import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';

const SiteWrapper = ({ children }) => {
      const { buttonSelection, setButtonSelection } = useAppContext();

  return (
    <div
  style={{
    height: '91%',
    width: '100%',
    background: buttonSelection === 'Previous Work'
      ? 'rgba(84, 94, 141, 1)' // Background color when buttonSelection is 'Previous Work'
      : 'linear-gradient(to bottom, rgba(49, 54, 63,.8) 0%, #5b7d83 10.34%, rgb(104, 152, 154) 37.24%, #5b7d83 74.89%, var(--siteBg) 119.73%)', // Gradient when buttonSelection is not 'Previous Work'
  }}
>
      {children}
    </div>
  );
};

export default SiteWrapper;
