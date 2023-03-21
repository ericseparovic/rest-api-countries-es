import Search from './Search';
import Filter from './Filter';
import { useAxios } from '../Hooks/useAxios';

function Main() {
	const URL = 'src/data.json';
	const { data, isLoading, hasError } = useAxios(URL);

	return (
		<main className='bg-gray-100 h-screen flex flex-col items-center p-8'>
			<form className='w-full md:flex justify-between'>
				<Search />
				<Filter />
			</form>
			<section>
				<div>Card</div>
			</section>
		</main>
	);
}

export default Main;
