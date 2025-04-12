import React, { useEffect,useState,useRef } from 'react';
// import '../../assets/css/main.css';
import BusinessIntro from '../BusinessIntro';
import { adjustPreviewDesktop } from './adjustPreviewDesktop';
import StaticPreviewPage from '../staticPreviewPage';
import { useAppContext } from "../../context/AppContext";












const BusinessDescriptionPortal = () => {
    const [businessSelection,setBusinessSelection]=useState('intro');
    const menuRightSideRef = useRef(null);
    const midStaticHolderRef = useRef(null);
    const [finalStyleForDesktopDisplay, setFinalStyleForDesktopDisplay] = useState({});
    const { buttonSelection, setButtonSelection } = useAppContext();

    useEffect(() => {
        const el = document.getElementById('oldBody');
        if (el?.classList.contains('is-preload')) {
          el.classList.remove('is-preload');
        }
      }, []);

      useEffect(() => {
        const timer = setTimeout(() => {
          if (midStaticHolderRef.current && menuRightSideRef.current) {
            const styleObj = adjustPreviewDesktop(midStaticHolderRef.current, menuRightSideRef.current);
            setFinalStyleForDesktopDisplay(styleObj);
          } else {
            console.warn("midStaticHolderRef or menuRightSideRef is null!");
          }
        }, 100); // small delay gives layout time to stabilize

        return () => clearTimeout(timer);
      }, [businessSelection]);

      useEffect(() => {
        function handleResize() {
          if (midStaticHolderRef.current && menuRightSideRef.current) {
            const styleObj = adjustPreviewDesktop(midStaticHolderRef.current, menuRightSideRef.current);
            setFinalStyleForDesktopDisplay(styleObj);
          }
        }

        window.addEventListener('resize', handleResize);

        // Initial call + delayed retry
        handleResize();
        const retryTimer = setTimeout(handleResize, 500);

        return () => {
          clearTimeout(retryTimer);
          window.removeEventListener('resize', handleResize);
        };
      }, []);



  return (

 <>
{/* <div
  className="is-preload"
  id="oldBody"><div id="wrapper"> */}
        {businessSelection==='intro' && (
            <div id="midStaticHolder" ref={midStaticHolderRef}>
            <div
              id="menuRightSide"
              ref={menuRightSideRef}
              style={finalStyleForDesktopDisplay}
            >
              <StaticPreviewPage  />
            </div>
          </div>
            // <BusinessIntro setBusinessSelection={setBusinessSelection} />
        )}

    {/* //   </div>
    //   </div> */}

    </>


  );
};

export default BusinessDescriptionPortal;
