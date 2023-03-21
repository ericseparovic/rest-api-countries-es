import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Filter() {
	const [status, setState] = useState(false);

	function showModalFilter() {
		setState(!status);
	}

	return (
		<div
			className='bg-white rounded-md w-44 p-4 flex items-center justify-between relative text-gray-800 h-14 cursor-pointer'
			onClick={showModalFilter}>
			<p className='text-xs'>Filter by Region</p>
			<FontAwesomeIcon icon={faChevronDown} size='xs' />
			<div
				className={`bg-white text-xs w-44  absolute top-16 right-0  cursor-pointer rounded-md ${
					!status && 'hidden'
				}`}>
				<ul>
					<li className='px-5 py-2 hover:bg-slate-100'>Africa</li>
					<li className='px-5 py-2 hover:bg-slate-100'>America</li>
					<li className='px-5 py-2 hover:bg-slate-100'>Asia</li>
					<li className='px-5 py-2 hover:bg-slate-100'>Europa</li>
					<li className='px-5 py-2 hover:bg-slate-100'>Oceania</li>
				</ul>
			</div>
		</div>
	);
}

export default Filter;