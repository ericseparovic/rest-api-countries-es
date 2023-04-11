import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from './ThemeProvider';

function Country({ country }) {
	const { name, population, region, capital, flag, numericCode } = country;

	const { theme } = useContext(ThemeContext);

	return (
		<Link to={`/detail/${numericCode}`}>
			<div className='rounded-md overflow-hidden max-w-xs shadow-lg'>
				<div>
					<img
						className='w-full object-cover h-56'
						src={flag}
						alt='img country'
					/>
				</div>
				<div className={`p-6 ${theme && 'bg-darkBlue'}`}>
					<h2 className={`font-bold text-xl mb-4 ${theme && 'text-white'}`}>
						{name}
					</h2>
					<p className={`text-sm pb-2 font-bold ${theme && 'text-white'}`}>
						Population:{' '}
						<span className='text-gray-700 font-light'>{population}</span>
					</p>
					<p className={`text-sm pb-2 font-bold ${theme && 'text-white'}`}>
						Region: <span className='text-gray-700 font-light'>{region}</span>
					</p>

					<p className={`text-sm pb-2 font-bold ${theme && 'text-white'}`}>
						Capital: <span className='text-gray-700 font-light'>{capital}</span>
					</p>
				</div>
			</div>
		</Link>
	);
}

export default Country;
