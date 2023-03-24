import Search from '../components/Search';
import Filter from '../components/Filter';
import Country from '../components/Country';
import { useLoaderData } from 'react-router-dom';
import { getCountries } from '../Data/countries';

export function loader() {
	const countries = getCountries();
	return countries;
}

function Main() {
	const countries = useLoaderData();

	return (
		<main className='bg-gray-100 h-full flex flex-col items-center pb-12 px-6  shadow-inner'>
			<div className='container mx-auto'>
				<form className='md:flex justify-between mt-8'>
					<Search />
					<Filter />
				</form>
				<section className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 place-items-center mt-8'>
					{countries.map((country) => {
						return <Country country={country} key={country.numericCode} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default Main;
