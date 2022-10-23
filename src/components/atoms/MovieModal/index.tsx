/* eslint-disable camelcase */
import React, { FC } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { IMovie } from '../../../data/models';
import { Image } from '..';

interface IMovieModalProps {
	movie: IMovie;
	showModal: boolean;
	handleClose: () => void
}

const MovieModal: FC<IMovieModalProps> = (props) => {
	const { movie, showModal, handleClose } = props;
	const {
		poster_path, title, vote_average, release_date, overview,
	} = movie;

	return (
		<Modal show={showModal} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title />
			</Modal.Header>
			<Modal.Body>
				<div className="row d-flex justify-content-center">
					<Image src={poster_path} alt={title} width="14rem" />
				</div>
				<h3>{title}</h3>
				<h4>
					ImDb:
					{' '}
					{vote_average}
				</h4>
				<h5>
					Release Date:
					{' '}
					{release_date}
				</h5>
				<h6>Overview</h6>
				<p>{overview}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default MovieModal;
