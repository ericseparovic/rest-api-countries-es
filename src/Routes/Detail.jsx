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
	const [isLoading, setIsLoading] = useState(false);

	async function getCountry(numericCode) {
		setIsLoading(true);
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

	if (!isLoading) {
		console.log(country.name);
	}

	return (
		<main className='bg-gray-100 h-screen flex flex-col items-center pb-12 px-6  shadow-inner'>
			<div className='container mx-auto'>
				<ButtonBack />
				<img src='' alt='' />
			</div>
		</main>
	);
}

export default Detail;
