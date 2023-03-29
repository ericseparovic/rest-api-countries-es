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

export function getCountry(numericCountry) {
	const countries = getCountries();
	return countries;
}
