export async function getCountries() {
	const ULR_API = 'src/data.json';
	try {
		const response = await fetch(ULR_API);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}
