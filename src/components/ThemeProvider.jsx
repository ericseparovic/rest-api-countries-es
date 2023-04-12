import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem('darkMode')) || false
	);

	const handleTheme = () => {
		setTheme(!theme);
	};

	useEffect(() => {
		localStorage.setItem('darkMode', JSON.stringify(theme));
	}, [theme]);

	const data = { theme, handleTheme };

	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
