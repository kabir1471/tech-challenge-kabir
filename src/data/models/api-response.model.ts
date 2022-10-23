export interface IApiResponseBase {
	statusCode?: number;
}

export interface IApiResponse<T> extends IApiResponseBase {
	data: T
}
