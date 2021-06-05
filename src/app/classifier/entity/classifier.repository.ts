import { ParseError, HttpError } from '@/shared';
import { Result } from 'neverthrow';
import { ClassifierData } from './classifier.types';

export interface IClassifierRepository {
	getClassifiers(): Promise<Result<ClassifierData[], HttpError | ParseError>>
}
