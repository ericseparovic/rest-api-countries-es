import ButtonBack from '../components/ButtonBack';
import { useLoaderData } from 'react-router-dom';
import { getCountries } from '../Data/countries';
import { useState, useEffect } from 'react';

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
		<main className='bg-gray-100 h-screen flex flex-col items-center pb-12 px-6  shadow-inner'>
			<div className='container mx-auto'>
				<ButtonBack />

				{isLoading ? (
					<h1>Loaded</h1>
				) : (
					<section>
						<div>
							<img src={country.flag} alt='flag country' />
						</div>
						<div>
							<h1>{country.name}</h1>
							<div>
								<ul>
									<li>Native Name: </li>
									<li>Population: </li>
									<li>Region: </li>
									<li>Sub Region: </li>
									<li>Capital: </li>
								</ul>
								<ul>
									<li>Top Level Domain:</li>
									<li>Currencies:</li>
									<li>Languages:</li>
								</ul>
							</div>
							<div>
								<p>Border Counties</p>
							</div>
						</div>
					</section>
				)}
			</div>
		</main>
	);
}

export default Detail;
