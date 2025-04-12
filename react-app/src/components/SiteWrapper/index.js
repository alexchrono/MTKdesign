import React, { useState, useEffect, useRef } from 'react';

const SiteWrapper = ({ children }) => {
  return (
    <div
      style={{
        height: '91%',
        width: '100%',
        background: 'linear-gradient(to bottom, rgb(49, 54, 63) 0%, #5b7d83 10.34%, rgb(104, 152, 154) 37.24%, #5b7d83 74.89%, var(--siteBg) 119.73%)',
      }}
    >
      {children}
    </div>
  );
};

export default SiteWrapper;
