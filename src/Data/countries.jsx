export async function getCountries() {
	const ULR_API = 'src/data.json';
	try {
		const response = await fetch(ULR_API);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getCountry(numericCode) {
	try {
		const countries = await getCountries();
		console.log(countries);
		const country = await countries.find(
			async (element) => (await element.numericCode) === numericCode
		);

		return country;
	} catch (error) {
		return [];
	}
}
