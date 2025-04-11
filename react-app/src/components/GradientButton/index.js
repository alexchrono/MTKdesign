import React from 'react';
import './GradientButton.css';

function GradientButton({ children, onClick }) {
  return (
    <button className="uiverse-gradient-button" onClick={onClick}>
      <span className="uiverse-button-inner">{children}</span>
    </button>
  );
}

export default GradientButton;
