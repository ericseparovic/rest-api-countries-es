import Search from '../components/Search';
import Filter from '../components/Filter';
import Country from '../components/Country';
import { useState, useEffect, useContext } from 'react';
import '../loading.css';
import ThemeContext from '../components/ThemeProvider';

function Main(props) {
	const { theme, handleTheme } = useContext(ThemeContext);

	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [regionFilter, setRegionFilter] = useState(null);

	// Filter countries by region
	const filteredByRegion = regionFilter
		? countries.filter((country) => country.region === regionFilter)
		: countries;

	// Filter countries by search term
	const filteredBySearchTerm = searchTerm
		? filteredByRegion.filter((country) =>
				country.name.toLowerCase().includes(searchTerm.toLowerCase())
		  )
		: filteredByRegion;

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

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleFilter = (event) => {
		setRegionFilter(event.target.textContent);
	};

	return (
		<main
			className={`h-full flex flex-col items-center pb-12 px-6 shadow-inner min-h-screen ${
				theme ? 'bg-veryDarkBlueBG' : 'bg-gray-100'
			} `}>
			<div className='container mx-auto w-full'>
				<form className='md:flex justify-between mt-8'>
					<Search searchTerm={searchTerm} handleSearch={handleSearch} />
					<Filter handleFilter={handleFilter} />
				</form>
				{!isLoading ? (
					<section className='grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 place-items-center w-full'>
						{filteredBySearchTerm.map((country) => (
							<Country country={country} key={country.numericCode} />
						))}
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
