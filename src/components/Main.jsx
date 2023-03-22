import Search from './Search';
import Filter from './Filter';
import { useAxios } from '../Hooks/useAxios';

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
					<div className='rounded-md overflow-hidden max-w-xs shadow-lg'>
						<div>
							<img src={!isLoading && data[122].flag} alt='' />
						</div>
						<div className='bg-white p-6'>
							<h2 className='font-bold text-xl mb-4'>Name Pais</h2>
							<p className='text-sm pb-2 text-gray-800 font-medium'>
								Population:{' '}
								<span className='text-gray-700 font-light'>92,4343434</span>
							</p>
							<p className='text-sm pb-2 text-gray-800 font-medium'>
								Region:{' '}
								<span className='text-gray-700 font-light'>92,4343434</span>
							</p>

							<p className='text-sm pb-2 text-gray-800 font-medium'>
								Capital:{' '}
								<span className='text-gray-700 font-light'>92,4343434</span>
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
