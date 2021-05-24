import axios, { AxiosInstance } from 'axios';

export interface IAxiosCreator {
	create(): AxiosInstance
}

export class AxiosCreator implements IAxiosCreator {
	private url: string;

	constructor(baseUrl: string) {
		this.url = baseUrl;
	}

	create(): AxiosInstance {
		return axios.create({
			baseURL: this.url,
			headers: { "Content-Type": "application/json" },
		});
	}
}