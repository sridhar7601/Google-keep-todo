import React from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes App</h1>
			<MdOutlineDarkMode
				class='darkmode-icons'
				size='1.7em'
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}/>
		</div>
	);
};

export default Header;
