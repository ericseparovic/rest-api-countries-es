import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonLight } from '@fortawesome/free-regular-svg-icons';
// import { faMoon as faMoonDark } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from './ThemeProvider';

function Header() {
	const { theme, handleTheme } = useContext(ThemeContext);

	const iconFaMoonLight = (
		<FontAwesomeIcon icon={faMoonLight} color={theme && 'white'} size='lg' />
	);

	return (
		<>
			<header className={` w-full  lg:px-0 px-6 ${theme && `bg-darkBlue`} `}>
				<div className='container mx-auto flex justify-between h-20 items-center'>
					<h1
						className={`font-bold md:text-xl text-sm  ${
							theme ? 'text-white' : 'text-veryDarkBlueText'
						}`}>
						Where in the word?
					</h1>
					<div className='flex item-center gap-2'>
						<div className='pt-1'>{iconFaMoonLight}</div>
						<button
							className={`text-white-800 md:text-lg text-sm ${
								theme ? 'text-white' : 'text-veryDarkBlueText'
							}`}
							onClick={handleTheme}>
							Dark Mode
						</button>
					</div>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Header;
