import React, { useRef } from 'react';
import screenshotGradient from '../../assets/screenshotGradient.png'


const createButtonStyles = (bgColor, borderColor) => {
  return {
    button: {
      position: 'relative',
      padding: '0.7em 2.4em',
      fontSize: '18px',
      background: bgColor,
      cursor: 'pointer',
      userSelect: 'none',
      overflow: 'hidden',
      color: 'white',
      zIndex: 1,
      fontFamily: 'inherit',
      fontWeight: '500',
      border: 'none',
      display: 'block',
      appearance: 'none',
    },
    backgroundWrapper: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'transparent',
      zIndex: -1,
      border: `4px solid ${borderColor}`,
      pointerEvents: 'none',
    },
    slash: {
      position: 'absolute',
      width: '8%',
      height: '500%',
      backgroundImage: `url(${screenshotGradient})`, // Set the screenshot as background image
      backgroundSize: 'cover',  // Make it cover the whole area
      backgroundPosition: 'center',  // Center the image (you can adjust this)
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(-60deg)',
      zIndex: -1,
      transition: 'all 0.3s ease-in-out',
      pointerEvents: 'none',
    },
    hoverSlash: {
      transform: 'translate(-50%, -50%) rotate(-90deg)',
      width: '100%',
    },
    activeSlash: {
      background: '#2751cd', // You can adjust this if you want to change the color when active
    },
  };
};

const ButtonFactory = ({ bgColor, borderColor, children = 'Button' }) => {
  const styles = createButtonStyles(bgColor, borderColor);
  const slashRef = useRef(null);

  const handleMouseEnter = () => {
    Object.assign(slashRef.current.style, styles.hoverSlash);
  };

  const handleMouseLeave = () => {
    Object.assign(slashRef.current.style, styles.slash);
  };

  const handleMouseDown = () => {
    Object.assign(slashRef.current.style, {
      ...styles.hoverSlash,
      ...styles.activeSlash,
    });
  };

  const handleMouseUp = () => {
    Object.assign(slashRef.current.style, styles.hoverSlash);
  };

  return (
    <button
      style={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span style={styles.backgroundWrapper}>
        <span ref={slashRef} style={styles.slash} />
      </span>
      {children}
    </button>
  );
};

export default ButtonFactory;
