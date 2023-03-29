import ButtonBack from '../components/ButtonBack';
import { useLoaderData } from 'react-router-dom';
import { getCountries } from '../Data/countries';
import { useState, useEffect } from 'react';
import { faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';

export function loader() {
	const countries = getCountries();
	return countries;
}

function Detail() {
	const countries = useLoaderData();

	// Get pathname === numericCodeCountry
	const url = window.location.pathname;
	const numericCode = url.substring(url.lastIndexOf('/') + 1);

	const [country, setCountry] = useState({});
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	async function getCountry(numericCode) {
		const country = await countries.find(
			(element) => element.numericCode === numericCode
		);

		return country;
	}

	const {
		name,
		flag,
		capital,
		currencies,
		languages,
		population,
		subregion,
		nativeName,
		topLevelDomain,
		region,
		borders,
	} = country;

	const populationFormat = new Intl.NumberFormat().format(population);
	console.log(populationFormat);

	useEffect(() => {
		getCountry(numericCode)
			.then((result) => {
				setCountry(result);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(true);
				console.error(error);
			});
	}, []);

	return (
		<main className='bg-gray-100 h-full flex flex-col items-center pb-12 px-6  shadow-inner'>
			<div className='container mx-auto'>
				<ButtonBack />

				{isLoading ? (
					<h1>Loaded</h1>
				) : (
					<section className='my-12'>
						<div>
							<img src={flag} alt='flag country' />
						</div>
						<div className='mt-12'>
							<h1 className='font-bold text-xl mb-4'>{name}</h1>
							<div>
								<ul className='mb-10'>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Native Name: <span>{nativeName}</span>
									</li>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Population: <span>{populationFormat}</span>{' '}
									</li>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Region: <span>{region}</span>{' '}
									</li>

									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Sub Region: <span>{subregion}</span>{' '}
									</li>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Capital: <span>{capital}</span>{' '}
									</li>
								</ul>
								<ul className='mb-10'>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Top Level Domain:
										{topLevelDomain.map((domain) => {
											return <span key={domain}>{domain}</span>;
										})}
									</li>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Currencies:{' '}
										{currencies.map((currency) => {
											return <span key={currency.code}>{currency.name}</span>;
										})}
									</li>
									<li className='text-sm pb-2 text-gray-800 font-medium'>
										Languages:{' '}
										{languages.map((language) => {
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
									{borders.map((border) => {
										return (
											<div
												key={border}
												className='shadow-lg w-24 py-1  bg-white rounded-sm text-gray-700 flex items-center justify-center gap-2'>
												<p>{border}</p>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</section>
				)}
			</div>
		</main>
	);
}

export default Detail;
