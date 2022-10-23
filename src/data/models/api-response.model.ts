export interface IApiResponseBase {
	statusCode?: number;
	page: number;
	total_pages: number;
	total_results: number
}

export interface IApiResponse<T> extends IApiResponseBase {
	results: T
}
