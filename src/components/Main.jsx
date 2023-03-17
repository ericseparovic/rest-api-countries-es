import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Main() {
	return (
		<main className='bg-gray-100 h-screen flex flex-col items-center p-8'>
			<form className='w-full'>
				<div className='mb-12 relative'>
					<div className='absolute flex items-center p-5'>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</div>
					<input
						className='p-4 pl-16 rounded-md w-full'
						type='search'
						name=''
						id=''
						placeholder='Search for a country...'
					/>
				</div>
			</form>
			<section>
				<div>Card</div>
			</section>
		</main>
	);
}

export default Main;
