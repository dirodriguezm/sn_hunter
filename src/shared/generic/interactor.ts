import { ParseError } from "../ParseError";
import { HttpError } from '@/shared/http';

export interface Callbacks {
  respondWithSuccess(data: any): void;
  respondWithClientError(error: HttpError): void;
  respondWithServerError(error: HttpError): void;
  respondWithParseError(error: ParseError): void;
}

export interface UseCaseInteractor {
  execute(params: any, callbacks: Callbacks): void;
}
