import React, { useState, useEffect } from 'react';

const BusinessIntro = ({setBusinessSelection}) => {
  const [someState, setSomeState] = useState(null); // Placeholder state if you need it

  useEffect(() => {
    // Placeholder effect if you need to run anything on mount
  }, []);

  return (
    <section
      className="intro"
      style={{
        boxSizing: 'border-box',
        border: '3px dotted pink',
        height: '100%',
        overflowY:'hidden',
        width: '100%',
        maxWidth: '100%',
        gridTemplateColumns: '50% 50%'
      }}
    >

      <header style={{boxSizing:'border-box',border:'10px dotted black',paddingTop:'0px'}}>
        <h1>MTK Design</h1>
        <p>
          Interior Design &amp; Something Else{' '}
          <a href="https://www.linkedin.com/in/adam-heasley/">Adam Heasley</a>{' '}
          / <a href="mailto:adamheasley@gmail.com">adamheasley@gmail.com</a>
        </p>
        <ul className="actions">
          <li>
            <a href="#first" className="arrow scrolly" onClick={()=>{setBusinessSelection('philosophy')}}>
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
          width: '100%',
          height: '100%',
          padding: '0 5%'
        }}
      >
        <img
          src="https://i.ibb.co/vMTgwKG/MTKdesign-First-Pic.jpg"
          alt="stock image interior design"
          style={{
            width: 'auto',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
    </section>
  );
};

export default BusinessIntro;
