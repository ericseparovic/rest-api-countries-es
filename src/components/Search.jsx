import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeProvider';
import { useContext } from 'react';

function Search({ handleSearch, searchTeam }) {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`mb-12 relative shadow-lg`}>
			<div className='absolute flex items-center p-5'>
				<FontAwesomeIcon icon={faMagnifyingGlass} color={theme && 'white'} />
			</div>
			<input
				className={`p-4 pl-16 rounded-md w-full ${
					theme ? 'bg-darkBlue' : 'bg-white'
				}`}
				type='search'
				name=''
				id=''
				placeholder='Search for a country...'
				onChange={handleSearch}
				value={searchTeam}
			/>
		</div>
	);
}

Search.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	searchTeam: PropTypes.string,
};

export default Search;
