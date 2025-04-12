import React from 'react';

const TemplateIframe = () => {
  return (
    <div id="containerReact" style={{ position:  'fixed' }}  >
      <iframe
        src="/template-index.html"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Template"
      />
    </div>
  );
};

export default TemplateIframe;
