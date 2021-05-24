import {
	AxiosInstance,
	AxiosResponse,
	AxiosRequestConfig,
	AxiosError,
} from "axios";
import { err, Result } from "@/Shared/Result";
import { HttpError } from "@/Shared/HTTP/HttpError";
import { HttpResult } from "@/Shared/HTTP/HttpResult";
import { ParseError } from "@/Shared/ParseError";
import { IAxiosCreator } from "../AxiosCreator";

type IHttpRequest = {
	url: string;
	config?: AxiosRequestConfig;
	data?: any;
};

type FailableParser<T, M> = (_: T) => Result<M, ParseError>;

type Parser<T, M> = {
	parseTo: FailableParser<T, M>;
};

export interface HttpService {
	get<T, M>(request: IHttpRequest, parser: Parser<T, M>): HttpResult<M>;
}

export class HttpService {
	private readonly axiosService: AxiosInstance;

	constructor(creator: IAxiosCreator, testing = false) {
		this.axiosService = creator.create();
		if (!testing) {
			this._initializeRequestInterceptor();
			this._initializeResponseInterceptor();
		}
	}

	public async get<T, M>(
		{ url, config }: IHttpRequest,
		parser: Parser<T, M>
	): HttpResult<M> {
		try {
			const response = await this.axiosService.get<T>(url, config);
			return this._parseFailable<T, M>(response.data, parser.parseTo);
		} catch (error) {
			return err(error);
		}
	}

	private _parseFailable<T, M>(
		data: T,
		parser: FailableParser<T, M>
	): Result<M, ParseError> {
		try {
			return parser(data);
		} catch (error) {
			const parseError = ParseError.fromError(error);
			return err(parseError);
		}
	}

	private _initializeRequestInterceptor() {
		this.axiosService.interceptors.request.use(
			this._handleRequest,
			this._handleError
		);
	}

	private _initializeResponseInterceptor() {
		this.axiosService.interceptors.response.use(
			(response: AxiosResponse) => response,
			this._handleError
		);
	}

	private _handleRequest(config: AxiosRequestConfig) {
		return config;
	}

	private _handleError(error: AxiosError): HttpError {
		if (error.response) {
			return HttpError.fromStatus(error.response.status, error.message);
		}
		throw error;
	}
}
