import { IDetectionRepository } from '@/Classes/Detection/Entity/detection.repository';
import { Detection } from '@/Classes/Detection/Entity/detection.types';
import { HttpError, isHttpError } from '@/Shared/HTTP/HttpError';

type Services = {
	detectionService: IDetectionRepository;
}

type Parameters = string;

type Callbacks = {
	respondWithSuccess: (detections: Detection[]) => void;
	respondWithClientError: (e: HttpError) => void;
	respondWithServerError: (e: HttpError) => void;
}

export function getDetections( { detectionService }: Services ): AsyncUseCase<Parameters, Callbacks> {
	async function execute(
		oid: Parameters,
		{
			respondWithSuccess,
			respondWithClientError,
			respondWithServerError
		}: Callbacks
	) {
		const result = await detectionService.getDetections(oid);

		result
		.map( (detectionList) => {
			const detections: Detection[] = detectionList
			respondWithSuccess(detections)
		} )
		.mapErr( (error) => {
			if (isHttpError(error)) {
				if (error.isClientError()) {
					respondWithClientError(error)
					return
				}
				respondWithServerError(error)
			}
		} );
	}

	return { execute }
}