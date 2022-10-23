import React, { useState } from 'react';
import { useRequest } from '../../../data/api';
import { searchMovies } from '../../../data/api/services';
import { useEffectCustom } from '../../../hooks';
import { TopBar } from '../../molecules';
import ListMoviesPage from './ListMoviesPage';

const ListMovies = () => {
	const getMovies = useRequest(([param1, param2]) => searchMovies(param1, param2));

	const [query, setQuery] = useState('');

	useEffectCustom(() => {
		getMovies.execute('t', 1);
	}, []);

	useEffectCustom(() => {
		if (query) {
			getMovies.execute(query, 1);
		}
	}, [query]);

	const handleSetQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	return (
		<>
			<TopBar query={query} setQuery={handleSetQuery} />
			<ListMoviesPage
				movies={getMovies.data}
				loading={getMovies.loading}
				error={getMovies.loading}
			/>
		</>
	);
};

export default ListMovies;
