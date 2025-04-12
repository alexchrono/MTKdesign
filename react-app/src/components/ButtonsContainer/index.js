import React from 'react';
import GradientButton from '../GradientButton';
import { useAppContext } from '../../context/AppContext';

const ButtonsContainer = () => {
  const { buttonSelection, setButtonSelection } = useAppContext();

  return (
    <div id="buttonsContainer">
      <div id="buttonsContainer2">
        <GradientButton
          selected={buttonSelection === 'About Us'}
          onClick={() => setButtonSelection('About Us')}
        >
          About Us
        </GradientButton>

        <GradientButton
          selected={buttonSelection === 'Previous Work'}
          onClick={() => setButtonSelection('Previous Work')}
        >
          Previous Work
        </GradientButton>

        <GradientButton
          selected={buttonSelection === 'Owner'}
          onClick={() => setButtonSelection('Owner')}
        >
          Owner
        </GradientButton>

        <GradientButton
          selected={buttonSelection === 'Contact Us'}
          onClick={() => setButtonSelection('Contact Us')}
        >
          Contact Us
        </GradientButton>
      </div>
    </div>
  );
};

export default ButtonsContainer;
