import Search from './Search';
import Filter from './Filter';
import { useAxios } from '../Hooks/useAxios';

function Main() {
	const URL = 'src/data.json';
	const { data, isLoading, hasError } = useAxios(URL);

	return (
		<main className='bg-gray-100 h-screen flex flex-col items-center px-8'>
			<div className='max-w-5xl mx-auto'>
				<form className='w-full md:flex justify-between mt-8'>
					<Search />
					<Filter />
				</form>
				<section className='flex flex-col gap-6 md:flex-row md:justify-between'>
					<div className='rounded-md overflow-hidden max-w-xs'>
						<div>
							<img src={!isLoading && data[122].flag} alt='' />
						</div>
						<div className='bg-white p-6'>
							<h2 className='font-bold text-xl mb-4'>Name Pais</h2>
							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>
							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>

							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>
						</div>
					</div>
					<div className='rounded-md overflow-hidden max-w-xs'>
						<div>
							<img src={!isLoading && data[122].flag} alt='' />
						</div>
						<div className='bg-white p-6'>
							<h2 className='font-bold text-xl mb-4'>Name Pais</h2>
							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>
							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>

							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>
						</div>
					</div>

					<div className='rounded-md overflow-hidden max-w-xs'>
						<div>
							<img src={!isLoading && data[122].flag} alt='' />
						</div>
						<div className='bg-white p-6'>
							<h2 className='font-bold text-xl mb-4'>Name Pais</h2>
							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>
							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>

							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>
						</div>
					</div>
					<div className='rounded-md overflow-hidden max-w-xs'>
						<div>
							<img src={!isLoading && data[122].flag} alt='' />
						</div>
						<div className='bg-white p-6'>
							<h2 className='font-bold text-xl mb-4'>Name Pais</h2>
							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>
							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>

							<p className='text-sm pb-2 text-gray-800'>
								Population: <span className='text-gray-700'>92,4343434</span>
							</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Main;
