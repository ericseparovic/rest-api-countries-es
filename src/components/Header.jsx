import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonLight } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonDark } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';

function Header() {
	const iconFaMoonLight = <FontAwesomeIcon icon={faMoonLight} size='lg' />;
	const iconFaMoonDark = <FontAwesomeIcon icon={faMoonDark} size='lg' />;

	return (
		<>
			<header className='container mx-auto max-w-4xl lg:px-0 px-6'>
				<div className='w-full flex justify-between h-20 items-center'>
					<h1 className='font-bold md:text-xl text-sm'>Where in the word?</h1>
					<div className='flex item-center gap-2'>
						<div>{iconFaMoonLight}</div>
						<button className='text-gray-800 md:text-lg text-sm'>
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
