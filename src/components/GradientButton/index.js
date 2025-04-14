import React from 'react';
import './GradientButton.css';

function GradientButton({ children, onClick, selected }) {
  return (
    <button
      className={`uiverse-gradient-button ${selected ? 'uiverse-gradient-button--selected' : ''}`}
      onClick={onClick}
    >
      <span className="uiverse-button-inner">{children}</span>
    </button>
  );
}

export default GradientButton;
