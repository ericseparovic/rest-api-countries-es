import Search from './Search';
import Filter from './Filter';
import { useAxios } from '../Hooks/useAxios';
import Country from './Country';

function Main() {
	const URL = 'src/data.json';
	const { data, isLoading, hasError } = useAxios(URL);

	return (
		<main className='bg-gray-100 h-full flex flex-col items-center pb-12 px-6'>
			<div className='container mx-auto'>
				<form className='md:flex justify-between mt-8'>
					<Search />
					<Filter />
				</form>
				<section className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 place-items-center mt-8'>
					{data.map((country) => {
						return <Country country={country} key={country.numericCode} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default Main;
