import { AsyncResult } from '@/Shared/Result'
import { HttpError } from '@/Shared/HTTP/HttpError'
import { ParseError } from '@/Shared/ParseError'

export type HttpResult<T> = AsyncResult<T, HttpError | ParseError>
