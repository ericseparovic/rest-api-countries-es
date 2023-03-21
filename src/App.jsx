import Header from './components/Header';
import Main from './components/Main';
import { useAxios } from './Hooks/useAxios';

function App() {
	const URL = 'src/data.json';
	const { data, isLoading, hasError } = useAxios(URL);

	return (
		<div>
			<Header />
			<Main />
		</div>
	);
}

export default App;
