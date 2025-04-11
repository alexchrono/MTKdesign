import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import Logo from '../../assets/MTKdesignPaletteSilver.png';
import GradientButton from '../GradientButton';
import GradientComparison from '../GradientComparison';




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
		<div id='buttonsContainer2'>
		<GradientButton onClick={() => console.log("Gradient button clicked!")}>
          About Us
        </GradientButton>

		<GradientButton onClick={() => console.log("Gradient button clicked!")}>
          Previous Work
        </GradientButton>

		<GradientButton onClick={() => console.log("Gradient button clicked!")}>
          Owner
        </GradientButton>

		<GradientButton onClick={() => console.log("Gradient button clicked!")}>
          Contact Us
        </GradientButton>

				</div>

		</div>



		</>
	);
}

export default Navigation;
