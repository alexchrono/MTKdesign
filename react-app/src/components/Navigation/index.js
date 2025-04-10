import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div id='Navigation'>

			<div id='leftHome'>
				<NavLink exact to="/">Home</NavLink>
				</div>
				<div id='blockSpacer'>

				</div>

			
			{isLoaded && (
				<div id='navHolder'>
					<ProfileButton user={sessionUser} />
				</div>
			)}

		</div>
	);
}

export default Navigation;
