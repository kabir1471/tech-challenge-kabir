import React from 'react';
import { ListMovies } from './components/pages';
import { CacheProvider } from './providers';
import {} from './utils/string.extension';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => (
	<CacheProvider>
		<ListMovies />
	</CacheProvider>
);

export default App;
