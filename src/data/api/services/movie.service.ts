import { IMovie } from '../../models';
import { IApiResponse } from '../../models/api-response.model';
// import { IApiResponse } from '../../models/api-response.model';
import Endpoints from '../endpoints.api';
import { reqGet } from '../request.api';

/** CONSTANTS COMMON VARIABLES FOR MOVIES */
const API_KEY = process.env.REACT_APP_API_KEY;
const LANGUAGE = 'en-US';
const INCLUDE_ADULT = false;

export const searchMovies = async (searchQuery: string, page: number):
	Promise<IApiResponse<IMovie[]>> => {
	const resp = await reqGet({
		// '/search/movie?api_key={0}&language={1}&page={3}&query={2}&include_adult={4}'
		url: Endpoints.SEARCH_MOVIES.format(API_KEY, LANGUAGE, page, searchQuery, INCLUDE_ADULT),
	});
	const data = resp.data as IApiResponse<IMovie[]>;
	data.statusCode = resp.status;
	return data;
};
