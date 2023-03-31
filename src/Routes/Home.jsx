import Search from '../components/Search';
import Filter from '../components/Filter';
import Country from '../components/Country';
import { useState, useEffect } from 'react';
import '../loading.css';

function Main() {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('src/data.json')
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

	return (
		<main className='bg-gray-100 h-full flex flex-col items-center pb-12 px-6  shadow-inner min-h-screen'>
			<div className='container mx-auto w-full'>
				<form className='md:flex justify-between mt-8'>
					<Search />
					<Filter />
				</form>
				{!isLoading ? (
					<section className='grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 place-items-center w-full'>
						{countries.map((country) => {
							return (
								<Country
									country={country}
									key={country.numericCode}
									numericCode={country.numericCode}
								/>
							);
						})}
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

export default Main;
