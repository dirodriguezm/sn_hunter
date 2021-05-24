import { IClassifierRepository } from '@/Classes/Classifier/Entity/classifier.repository'
import { Classifier } from '@/Classes/Classifier/Entity/classifier.types'
import { HttpError, isHttpError } from '@/Shared/HTTP/HttpError'

type Services = {
	classifierService: IClassifierRepository;
}

type Parameters = null

type Callbacks = {
	respondWithSuccess: (classifiers: Classifier[]) => void;
	respondWithClientError: (e: HttpError) => void;
	respondWithServerError: (e: HttpError) => void;
}

export function getClassifiers( { classifierService }: Services ): AsyncUseCase<Parameters, Callbacks> {
	async function execute(
		_: Parameters,
		{
			respondWithSuccess,
			respondWithClientError,
			respondWithServerError
		}: Callbacks
	) {
		const result = await classifierService.getClassifiers()

		result
		.map( (classifierList) => {
			const classifiers: Classifier[] = classifierList
			respondWithSuccess(classifiers)
		} )
		.mapErr( (error) => {
			if (isHttpError(error)) {
				if (error.isClientError()) {
					respondWithClientError(error)
					return
				}
				respondWithServerError(error)
			}
		} )
	}

	return { execute }
}