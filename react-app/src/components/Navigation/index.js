import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import Logo from '../../assets/MTKdesignPaletteSilver.png';
import GradientButton from '../GradientButton';




function Navigation({ isLoaded }){

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
		<GradientButton onClick={() => console.log("Gradient button clicked!")}>
          Let’s Go
        </GradientButton>

		</div>



		</>
	);
}

export default Navigation;
