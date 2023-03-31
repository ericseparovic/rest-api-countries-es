import ButtonBack from '../components/ButtonBack';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
	// Get code numeric of url
	const { numericCode } = useParams();

	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('../src/data.json')
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

	const country = countries.find(
		(country) => country.numericCode === numericCode
	);

	const populationFormat = country
		? new Intl.NumberFormat().format(country.population)
		: 'N/A';

	const flag = country ? country.flag : country;
	console.log(flag);

	return (
		<main className='bg-gray-100 h-full flex flex-col items-center pb-12 px-6  shadow-inner'>
			<div className='container mx-auto'>
				<ButtonBack />
				<h1>{}</h1>

				{country ? (
					<section className='my-12 flex sm:flex-row flex-col'>
						<div>
							<img src={country.flag} alt='flag country' />
						</div>
						<div className='mt-12'>
							<h1 className='font-bold text-xl mb-4'>{country.name}</h1>
							<div>
								<ul className='mb-10'>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Native Name: <span>{country.nativeName}</span>
									</li>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Population: <span>{populationFormat}</span>{' '}
									</li>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Region: <span>{country.region}</span>{' '}
									</li>

									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Sub Region: <span>{country.subregion}</span>{' '}
									</li>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Capital: <span>{country.capital}</span>{' '}
									</li>
								</ul>
								<ul className='mb-10'>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Top Level Domain:
										{country.topLevelDomain.map((domain) => {
											return <span key={domain}>{domain}</span>;
										})}
									</li>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Currencies:{' '}
										{country.currencies &&
											country.currencies.map((currency) => {
												return <span key={currency.code}>{currency.name}</span>;
											})}
									</li>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Languages:{' '}
										{country.languages.map((language) => {
											return (
												<span key={language.iso639_1}>{language.name}</span>
											);
										})}
									</li>
								</ul>
							</div>
							<div>
								<h4 className='text-md font-medium mb-4'>Border Counties:</h4>
								<div className='grid grid-cols-3 gap-2'>
									{country.borders ? (
										country.borders.map((border) => {
											return (
												<div
													key={border}
													className='shadow-lg w-24 py-1  bg-white rounded-sm text-gray-700 flex items-center justify-center gap-2'>
													<p>{border}</p>
												</div>
											);
										})
									) : (
										<p>Has no borders</p>
									)}
								</div>
							</div>
						</div>
					</section>
				) : (
					<h1>Loaded</h1>
				)}
			</div>
		</main>
	);
}

export default Detail;
