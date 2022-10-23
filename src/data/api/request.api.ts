import axios, { AxiosRequestConfig } from 'axios';
import Endpoints from './endpoints.api';

const { BASE_URL } = Endpoints;

const axiosConfig = {
	baseURL: BASE_URL,
};

const $axios = axios.create(axiosConfig);

const request = async (config: AxiosRequestConfig) => {
	const mConfig = config;
	mConfig.headers = {
		Accept: 'application/json',
	};
	const returnValue = await $axios({ ...mConfig });
	return returnValue;
};

export const reqGet = async (config: AxiosRequestConfig) => request({
	method: 'GET',
	...config,
});
