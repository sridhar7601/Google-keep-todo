import {React,useState} from 'react';
import { MdOutlineDarkMode, MdOutlineWbSunny  } from 'react-icons/md';


const Header = ({ handleToggleDarkMode }) => {
	const [defaultMode, setDefaultMode] = useState(true);
	
	return (
		<div className='header'>
			<h1>Iam Neo Notes</h1>
			{defaultMode ?
				<MdOutlineDarkMode
					class='darkmode-icons'
					size='1.7em'
					onClick={() =>
						handleToggleDarkMode(
							(previousDarkMode) => !previousDarkMode,
							setDefaultMode(false)
						)
					} /> :
				<MdOutlineWbSunny
					class='gradient-icons'
					size='1.7em'
					onClick={() =>
						handleToggleDarkMode(
							(previousDarkMode) => !previousDarkMode,
							setDefaultMode(true)
						)
					} />
			}
		</div>
	);
};

export default Header;