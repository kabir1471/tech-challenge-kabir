enum Endpoints {
	/** BASE URL */
	BASE_URL = 'https://api.themoviedb.org/3',

	/** SEARCH MOVIES */
	SEARCH_MOVIES = '/search/movie?api_key={0}&language={1}&page={3}&query={2}&include_adult={4}',
	POPULAR_MOVIES='/movie/popular?api_key={0}&language={1}&page={2}'

}

export default Endpoints;
