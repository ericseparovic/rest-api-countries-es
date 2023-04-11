import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from './ThemeProvider';

function ButtonBack() {
	const { theme } = useContext(ThemeContext);
	return (
		<Link to={'/'}>
			<div
				className={`shadow-lg w-24 py-1 mt-10  rounded-sm text-gray-700 flex items-center justify-center gap-2 ${
					theme ? 'bg-darkBlue text-white' : 'bg-white'
				} `}>
				<FontAwesomeIcon icon={faArrowLeftLong} size='xs' />
				<p>Back</p>
			</div>
		</Link>
	);
}

export default ButtonBack;
