function Country({ country }) {
	const { name, population, region, capital, flag } = country;

	return (
		<div className='rounded-md overflow-hidden max-w-xs shadow-lg'>
			<div>
				<img
					className='w-full object-cover h-56'
					src={flag}
					alt='img country'
				/>
			</div>
			<div className='bg-white p-6'>
				<h2 className='font-bold text-xl mb-4'>{name}</h2>
				<p className='text-sm pb-2 text-gray-800 font-medium'>
					Population:{' '}
					<span className='text-gray-700 font-light'>{population}</span>
				</p>
				<p className='text-sm pb-2 text-gray-800 font-medium'>
					Region: <span className='text-gray-700 font-light'>{region}</span>
				</p>

				<p className='text-sm pb-2 text-gray-800 font-medium'>
					Capital: <span className='text-gray-700 font-light'>{capital}</span>
				</p>
			</div>
		</div>
	);
}

export default Country;
