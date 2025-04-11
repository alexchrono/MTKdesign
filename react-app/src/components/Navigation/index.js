import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import Logo from '../../assets/MTKdesignPaletteSilver.png';
import GradientButton from '../GradientButton';
import GradientComparison from '../GradientComparison';
import { useAppContext } from '../../context/AppContext';





function Navigation({ isLoaded }){
	const { buttonSelection, setButtonSelection } = useAppContext();

	return (
		<>
		<div id='Navigation'>

			<div id='leftHome'>
				<NavLink exact to="/">Home</NavLink>
				</div>
				<div id='blockSpacer'>

					<div id='centerLogo'>
					<img src={Logo} alt="MTK Design Logo" id='MTKlogo' />

					</div>

				</div>


			{/* {isLoaded && (
				<div id='navHolder'>
<ProfileButton user={{ name: "me", status: "I'm cool" }} />
</div>
			)} */}

		</div>

		<div id='buttonsContainer'>
		<div id='buttonsContainer2'>
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



		</>
	);
}

export default Navigation;
