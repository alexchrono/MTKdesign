import React, { useEffect,useState } from 'react';
import '../../assets/css/main.css';
import BusinessIntro from '../BusinessIntro';

const BusinessDescriptionPortal = () => {
    const [businessSelection,setBusinessSelection]=useState('intro')

    useEffect(() => {
        const el = document.getElementById('oldBody');
        if (el?.classList.contains('is-preload')) {
          el.classList.remove('is-preload');
        }
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


<div className="is-preload" id="oldBody" style={{ height: '100%' }}>
<div id="wrapper" style={{width:'100%',height:'100%',padding:'0 0 0 0'}}>
        {businessSelection==='intro' && (
            <BusinessIntro setBusinessSelection={setBusinessSelection} />
        )}

      </div>
      </div>



  );
};

export default BusinessDescriptionPortal;
