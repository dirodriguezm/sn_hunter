import { ClassifierData, Classifier } from '../entity';
import { Result, ok, err } from 'neverthrow';
import { ParseError } from '@/shared';

export function toDomain(dto: ClassifierData): Result<Classifier, ParseError> {
  try {
    return ok(new Classifier(dto));
  } catch (error) {
    return err(ParseError.fromError(error));
  }
}
