import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home, { loader as countriesLoader } from './Routes/Home';
import Header from './components/Header';
import Detail, { loader as detailCountry } from './Routes/Detail';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Header />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: countriesLoader,
			},
			{
				path: '/detail/:country',
				element: <Detail />,
				loader: detailCountry,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
