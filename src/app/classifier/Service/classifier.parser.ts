import { Classifier, ClassifierDTO } from '@/Classes/Classifier/Entity/classifier.types'
import { ParseError } from '@/Shared/ParseError/ParseError'
import { err, ok, Result } from '@/Shared/Result/Result'

export function toDomain(dto: ClassifierDTO): Result<Classifier, ParseError> {
	try {
		return ok({
			classifierName: dto.classifier_name,
			classifierVersion: dto.classifier_version,
			classes: dto.classes
		});
		
	} catch (error) {
		return err(ParseError.fromError(error));
	}
}