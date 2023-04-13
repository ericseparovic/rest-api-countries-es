import ButtonBack from '../components/ButtonBack';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import '../loading.css';
import ThemeContext from '../components/ThemeProvider';

function Detail() {
	// Get numeric code from URL
	const { numericCode } = useParams();

	// Initialize state variables
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { theme } = useContext(ThemeContext);

	// Fetch data when component mounts
	useEffect(() => {
		setIsLoading(true);
		fetch('../src/data/data.json')
			.then((response) => response.json())
			.then((data) => {
				setCountries(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			});
	}, []);

	// Find the country with the matching numeric code
	const country = countries.find(
		(country) => country.numericCode === numericCode
	);

	// Format the population number with thousands separators
	const populationFormat = country
		? new Intl.NumberFormat().format(country.population)
		: 'N/A';

	return (
		<main
			className={`flex flex-col items-center pb-12 px-6 shadow-inner h-screen ${
				theme ? 'bg-veryDarkBlueBG' : 'bg-gray-100'
			}`}>
			<div className='container mx-auto max-w-7xl md:mt-40'>
				<ButtonBack />

				{/* Display loading spinner if data is being fetched */}

				{!isLoading ? (
					<section className='gap-10 my-12 flex md:flex-row flex-col justify-between items-start'>
						<div className='md:max-w-3xl'>
							<img src={country?.flag} alt='flag country' />
						</div>
						<div>
							<h1 className={`font-bold text-xl mb-4 ${theme && 'text-white'}`}>
								{country?.name}
							</h1>
							<div className='sm:flex gap-4 w-full'>
								<ul className='mb-10'>
									<li
										className={`text-sm pb-2 font-medium ${
											theme ? 'text-white' : 'text-gray-800'
										}`}>
										Native Name: <span>{country?.nativeName}</span>
									</li>
									<li
										className={`text-sm pb-2 font-medium ${
											theme ? 'text-white' : 'text-gray-800'
										}`}>
										Population: <span>{populationFormat}</span>{' '}
									</li>
									<li
										className={`text-sm pb-2 font-medium ${
											theme ? 'text-white' : 'text-gray-800'
										}`}>
										Region: <span>{country?.region}</span>{' '}
									</li>

									<li
										className={`text-sm pb-2 font-medium ${
											theme ? 'text-white' : 'text-gray-800'
										}`}>
										Sub Region: <span>{country?.subregion}</span>{' '}
									</li>
									<li
										className={`text-sm pb-2 font-medium ${
											theme ? 'text-white' : 'text-gray-800'
										}`}>
										Capital: <span>{country?.capital}</span>{' '}
									</li>
								</ul>
								<ul className='mb-10'>
									<li
										className={`text-sm pb-2 font-medium ${
											theme ? 'text-white' : 'text-gray-800'
										}`}>
										Top Level Domain:
										{country?.topLevelDomain.map((domain) => {
											return <span key={domain}>{domain}</span>;
										})}
									</li>
									<li
										className={`text-sm pb-2 font-medium ${
											theme ? 'text-white' : 'text-gray-800'
										}`}>
										Currencies:{' '}
										{country?.currencies &&
											country.currencies.map((currency) => {
												return <span key={currency.code}>{currency.name}</span>;
											})}
									</li>
									<li
										className={`text-sm pb-2 font-medium ${
											theme ? 'text-white' : 'text-gray-800'
										}`}>
										Languages:{' '}
										{country?.languages.map((language) => {
											return (
												<span key={language.iso639_1}>{language.name}</span>
											);
										})}
									</li>
								</ul>
							</div>
							<div>
								<h4
									className={`text-md font-medium mb-4 ${
										theme && 'text-white'
									}`}>
									Border Counties:
								</h4>
								<div className='grid grid-cols-3 gap-2'>
									{country &&
										country.borders &&
										country.borders.map((border) => {
											return (
												<div
													key={border}
													className={`shadow-lg w-24 py-1 rounded-sm text-gray-700 flex items-center justify-center gap-2 ${
														theme ? 'bg-darkBlue text-white' : 'bg-white'
													}`}>
													<p>{border}</p>
												</div>
											);
										})}
								</div>
							</div>
						</div>
					</section>
				) : (
					<div className='flex justify-center items-center mt-36'>
						<div className='lds-roller'>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				)}
			</div>
		</main>
	);
}

export default Detail;
