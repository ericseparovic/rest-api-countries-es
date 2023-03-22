import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search() {
	return (
		<div className='mb-12 relative shadow-lg'>
			<div className='absolute flex items-center p-5'>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</div>
			<input
				className='p-4 pl-16 rounded-md w-full'
				type='search'
				name=''
				id=''
				placeholder='Search for a country...'
			/>
		</div>
	);
}

export default Search;
