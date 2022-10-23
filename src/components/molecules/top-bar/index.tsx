import React, { FC } from 'react';
import {
	Navbar, Container, Nav, Form, FormControl,
} from 'react-bootstrap';

interface ITopBar {
	query: string;
	setQuery: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TopBar: FC<ITopBar> = (props) => {
	const { query, setQuery } = props;
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container fluid>
				<Navbar.Brand href="/">MovieDb App</Navbar.Brand>
				<Navbar.Brand href="/">Trending</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbar-scroll">
					<Nav
						className="me-auto my-2 my-lg-3"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Movie Search"
								className="me-2"
								aria-label="search"
								name=""
								value={query}
								onChange={setQuery}
							/>
						</Form>
					</Nav>
				</Navbar.Collapse>

			</Container>
		</Navbar>
	);
};

export default TopBar;
