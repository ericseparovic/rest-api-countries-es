import Search from './Search';

function Main() {
	return (
		<main className='bg-gray-100 h-screen flex flex-col items-center p-8'>
			<form className='w-full'>
				<Search />
			</form>
			<section>
				<div>Card</div>
			</section>
		</main>
	);
}

export default Main;
