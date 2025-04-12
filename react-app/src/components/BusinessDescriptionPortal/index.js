import React, { useEffect } from 'react';
import './assets/css/main.css';

const BusinessDescriptionPortal = () => {
  useEffect(() => {
    const scriptPaths = [
      './assets/ScriptsForBusiness/jquery.min.js',
      './assets/ScriptsForBusiness/jquery.scrolly.min.js',
      './assets/ScriptsForBusiness/browser.min.js',
      './assets/ScriptsForBusiness/breakpoints.min.js',
      './assets/ScriptsForBusiness/util.js',
      './assets/ScriptsForBusiness/main.js',
    ];

    const scripts = scriptPaths.map((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false; // preserve execution order
      document.body.appendChild(script);
      return script;
    });

    // Cleanup on unmount
    return () => {
      scripts.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);

  return (
    <>

<div className="is-preload" id='oldBody'>
      <div id="wrapper">
        <section
          className="intro"
          style={{
            boxSizing: 'border-box',
            border: '3px dotted pink',
            height: '100dvh',
          }}
        >
          <header>
            <h1>MTK Design</h1>
            <p>
              Interior Design &amp; Something Else{' '}
              <a href="https://www.linkedin.com/in/adam-heasley/">Adam Heasley</a>{' '}
              / <a href="mailto:adamheasley@gmail.com">adamheasley@gmail.com</a>
            </p>
            <ul className="actions">
              <li>
                <a href="#first" className="arrow scrolly">
                  <span className="label">Next</span>
                </a>
              </li>
            </ul>
          </header>

          <div
            className="content"
            style={{
              boxSizing: 'border-box',
              border: '2px dotted gray',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="https://i.ibb.co/vMTgwKG/MTKdesign-First-Pic.jpg"
              alt="stock image interior design"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </section>
      </div>
      </>
    </>
  );
};

export default BusinessDescriptionPortal;
