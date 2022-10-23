/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useCache } from '../../providers';
import { IApiResponse } from '../models';

type Options = {
  cache?: boolean;
  cacheKey?: string;
}
const defaultOptions = {
	cache: false,
};

const STATUS_SUCCESS = 200;

const getCacheKey = (key: string, ...params:any): string => key.format(params);

export const useRequest = <T>(request: (...params: any) =>
	Promise<IApiResponse<T>>, options?: Options) => {
	const { addToCache, getFromCache } = useCache();
	const mOptions = { ...defaultOptions, ...options };
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<T>();
	const [error, setError] = useState<boolean>();

	/**
    * Execute Api Request
    */

	const execute = async (...params: any) => {
		setLoading(true);
		const enableCache = !!mOptions?.cache;
		const cacheKey = getCacheKey(mOptions?.cacheKey || '', params);
		if (enableCache) {
			if (!options?.cache) {
				throw new Error('Cache has enabled but Cached key has not been set');
			}
			const cache = getFromCache(cacheKey);
			if (cache) {
				const resp = cache as IApiResponse<T>;
				setData(resp.results);
				setError(resp.statusCode !== STATUS_SUCCESS);
				setLoading(false);
				return resp.statusCode !== STATUS_SUCCESS;
			}
		}
		try {
			const response = await request(params);
			if (enableCache) {
				addToCache(cacheKey, response);
			}
			setData(response.results);
			setError(response.statusCode !== STATUS_SUCCESS);
			return response.statusCode !== STATUS_SUCCESS;
		} catch (err) {
			setError(true);
			return true;
		} finally {
			setLoading(false);
		}
	};

	return {
		execute,
		loading,
		data,
		error,
	};
};
