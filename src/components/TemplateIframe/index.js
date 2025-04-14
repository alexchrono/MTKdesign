import React from 'react';

const TemplateIframe = () => {
  return (

      <iframe
      src={`${process.env.PUBLIC_URL}/template-index.html`}
      width="100%"
        height="100%"
        style={{ border: 'none',position:'fixed' }}
        title="Template"
      />

  );
};

export default TemplateIframe;
