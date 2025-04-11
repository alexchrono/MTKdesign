import React from 'react';

const GradientComparison = () => {
  const buttonBase = {
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    margin: '8px',
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <button
        style={{
          ...buttonBase,
          backgroundImage: 'linear-gradient(144deg, #8c1c13, #9d2aa8 50%, #177e89)',
        }}
      >
        Magenta Bridge
      </button>
      <button
        style={{
          ...buttonBase,
          backgroundImage: 'linear-gradient(144deg, #8c1c13, #803358 50%, #177e89)',
        }}
      >
        Maroon Blend
      </button>
      <button
  style={{
    ...buttonBase,
    backgroundImage: 'linear-gradient(144deg, rgb(140, 28, 19), rgb(128, 51, 88) 22%, rgb(94, 62, 136) 44%, rgb(57, 83, 198) 58%, rgb(58, 140, 159) 66%, rgb(23, 126, 137) 77%)',
}}
>
  Button Text
</button>

    </div>
  );
};

export default GradientComparison;
