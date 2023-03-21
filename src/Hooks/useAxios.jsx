import { useEffect, useState } from 'react';
import axios from 'axios';

export const useAxios = (URL) => {
	const [state, setState] = useState({
		data: [],
		isLoading: true,
		hasError: null,
	});

	const getData = async () => {
		setState({
			...state,
			isLoading: true,
		});
		try {
			const response = await axios.get('src/data.json');
			const data = response.data;
			setState({
				data,
				isLoading: false,
				hasError: null,
			});
		} catch (error) {
			setState({
				...state,
				hasError: error,
			});
			console.error(error);
		}
	};
	useEffect(() => {
		getData();
	}, [URL]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
