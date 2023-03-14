function Header() {
	return (
		<header className='border-b-2'>
			<div className='flex justify-between items-center h-20 px-4'>
				<h1 className='font-bold'>Where in the word?</h1>
				<button className='text-gray-800'>Dark Mode</button>
			</div>
		</header>
	);
}

export default Header;
