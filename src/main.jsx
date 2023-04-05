import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home';
import Header from './components/Header';
import Detail from './Routes/Detail';
import { ThemeProvider } from './components/ThemeProvider';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/detail/:numericCode',
				element: <Detail />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
