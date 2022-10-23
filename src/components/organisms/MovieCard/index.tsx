import React, { FC, useState } from 'react';
import { IMovie } from '../../../data/models';
import { Image } from '../../atoms';
import MovieModal from '../../atoms/MovieModal';

interface IMovieCard {
	movie: IMovie
}

const MovieCard: FC<IMovieCard> = (props) => {
	const { movie } = props;
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
	};
	const handleShow = () => {
		setShow(true);
	};
	return (
		<div className="card text-center bg-secondary mb3">
			<div className="card-body">
				<Image src={movie.poster_path} alt={movie.title} />
				<div className="card-body">
					<h6>{movie.title}</h6>
					<button type="button" className="btn btn-dark" onClick={handleShow}>Show more</button>
					<MovieModal showModal={show} movie={movie} handleClose={handleClose} />
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
