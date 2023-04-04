import Search from '../components/Search';
import Filter from '../components/Filter';
import Country from '../components/Country';
import { useState, useEffect } from 'react';
import '../loading.css';

function Main() {
	// Define the states for countries, loading status, search input, and filtered countries
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [inputSearch, setInputSearch] = useState('');
	const [filterCountries, setFilterCountrires] = useState(countries);

	// Handle the search input
	const handleSearch = (e) => {
		setInputSearch(e.target.value);
	};

	const handleFilter = (element) => {
		filterCountry(element.textContent);
	};

	// Filter countrires based on the region
	function filterCountry(region) {
		const filterItems = countries.filter((item) => item.region === region);

		setFilterCountrires(filterItems);
	}

	// Filter countries based on the search input
	function searchCountry() {
		const filteredItems = countries.filter((item) =>
			item.name.toLowerCase().startsWith(inputSearch.toLowerCase())
		);
		setFilterCountrires(filteredItems);
	}

	// Update the filtered countries when the countries state changes
	useEffect(() => {
		setFilterCountrires(countries);
	}, [countries]);

	// Trigger the searchCountry function when inputSearch changes
	useEffect(() => {
		searchCountry();
	}, [inputSearch]);

	// Fetch data from the JSON file and update the countries state
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

	// Render the main component with the search bar, filter, and list of countries
	return (
		<main className='bg-gray-100 h-full flex flex-col items-center pb-12 px-6  shadow-inner min-h-screen'>
			<div className='container mx-auto w-full'>
				<form className='md:flex justify-between mt-8'>
					<Search handleSearch={handleSearch} inputSearch={inputSearch} />
					<Filter handleFilter={handleFilter} />
				</form>
				{!isLoading ? (
					<section className='grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 place-items-center w-full'>
						{filterCountries.map((country) => {
							return (
								<Country
									country={country}
									key={country.numericCode}
									numericCode={country.numericCode}
								/>
							);
						})}
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
