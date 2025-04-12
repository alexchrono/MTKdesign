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

		<div id='Navigation'>

			<div id='leftHome'>
				<NavLink to="/">Home</NavLink>
				</div>
				<div id='blockSpacer'>
          {buttonSelection === 'Previous Work'?
          (<span id='showHouseNumber'>House 1 of 3</span>)
        : (
<div id='centerLogo'>
					<img src={Logo} alt="MTK Design Logo" id='MTKlogo' />

					</div>
        )}


				</div>


			{/* {isLoaded && (
				<div id='navHolder'>
<ProfileButton user={{ name: "me", status: "I'm cool" }} />
</div>
			)} */}

		</div>


	);
}

export default Navigation;
