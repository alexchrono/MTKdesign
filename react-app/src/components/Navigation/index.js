import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){

	return (
		<div id='Navigation'>

			<div id='leftHome'>
				<NavLink exact to="/">Home</NavLink>
				</div>
				<div id='blockSpacer'>

				</div>


			{isLoaded && (
				<div id='navHolder'>
<ProfileButton user={{ name: "me", status: "I'm cool" }} />
</div>
			)}

		</div>
	);
}

export default Navigation;
