import React, { FC } from 'react';
import { IMovie } from '../../../data/models';
import { MovieCard } from '../../organisms';
import './index.css';

interface IListMoviesProps {
	movies?: IMovie[];
	loading: boolean;
	error: boolean;
}

const ListMoviesPage: FC<IListMoviesProps> = (props) => {
	const { movies, loading, error } = props;
	return (
		<div className="container">
			{loading && <>LOADING ... </>}
			{error && <>ERROR</>}
			<div className="grid">
				{movies && movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
			</div>
		</div>
	);
};

export default ListMoviesPage;
