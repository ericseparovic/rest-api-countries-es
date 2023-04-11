import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeProvider';

function Filter({ handleFilter }) {
	const [status, setState] = useState(false);
	const { theme } = useContext(ThemeContext);

	function showModalFilter() {
		setState(!status);
	}

	return (
		<div
			className={`rounded-md w-44 p-4 flex items-center justify-between relative text-gray-800 h-14 cursor-pointer shadow-lg ${
				theme ? 'bg-darkBlue' : 'bg-white'
			}`}
			onClick={showModalFilter}>
			<p className={`text-sm ${theme && 'text-white'}`}>Filter by Region</p>
			<FontAwesomeIcon
				icon={faChevronDown}
				size='xs'
				color={theme && 'white'}
			/>
			<div
				className={`bg-white text-xs w-44  absolute top-16 right-0  cursor-pointer rounded-md shadow-lg ${
					!status && 'hidden'
				} ${theme && 'bg-darkBlue text-white'}`}>
				<ul onClick={(e) => handleFilter(e)}>
					<li onClick={handleFilter} className='px-5 py-2 hover:bg-slate-100'>
						Africa
					</li>
					<li className='px-5 py-2 hover:bg-slate-100'>Americas</li>
					<li className='px-5 py-2 hover:bg-slate-100'>Asia</li>
					<li className='px-5 py-2 hover:bg-slate-100'>Europe</li>
					<li className='px-5 py-2 hover:bg-slate-100'>Oceania</li>
				</ul>
			</div>
		</div>
	);
}

Filter.propTypes = {
	handleFilter: PropTypes.func.isRequired,
};
export default Filter;
