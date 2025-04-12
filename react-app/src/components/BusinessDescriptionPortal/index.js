import React, { useEffect,useState,useRef } from 'react';
// import '../../assets/css/main.css';
import BusinessIntro from '../BusinessIntro';
import { adjustPreviewDesktop } from './adjustPreviewDesktop';
import StaticPreviewPage from '../staticPreviewPage';

const BusinessDescriptionPortal = () => {
    const [businessSelection,setBusinessSelection]=useState('intro');
    const menuRightSideRef = useRef(null);
    const midStaticHolderRef = useRef(null);
    const [finalStyleForDesktopDisplay, setFinalStyleForDesktopDisplay] = useState({});

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


//   useEffect(() => {
//     const scriptPaths = [
//       './assets/ScriptsForBusiness/jquery.min.js',
//       './assets/ScriptsForBusiness/jquery.scrolly.min.js',
//       './assets/ScriptsForBusiness/browser.min.js',
//       './assets/ScriptsForBusiness/breakpoints.min.js',
//       './assets/ScriptsForBusiness/util.js',
//       './assets/ScriptsForBusiness/main.js',
//     ];

//     const scripts = scriptPaths.map((src) => {
//       const script = document.createElement('script');
//       script.src = src;
//       script.async = false; // preserve execution order
//       document.body.appendChild(script);
//       return script;
//     });

//     // Cleanup on unmount
//     return () => {
//       scripts.forEach((script) => {
//         document.body.removeChild(script);
//       });
//     };
//   }, []);

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
