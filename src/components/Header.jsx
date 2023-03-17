import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Header() {
	const element = <FontAwesomeIcon icon={faMoon} />;
	return (
		<header>
			<div className='flex justify-between items-center h-20 px-4'>
				<h1 className='font-bold'>Where in the word?</h1>

				<div className='flex item-center gap-2'>
					<div className='w-5'>{element}</div>
					<button className='text-gray-800'>Dark Mode</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
