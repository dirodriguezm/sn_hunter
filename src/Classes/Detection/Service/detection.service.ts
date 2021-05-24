import { IDetectionRepository } from '@/Classes/Detection/Entity/detection.repository';
import { toDomain as toDetection } from '@/Classes/Detection/Service/detection.parser';
import { Detection, DetectionDTO } from '@/Classes/Detection/Entity/detection.types';
import { HttpService } from '@/Shared/HTTP/HttpService';
import { HttpResult } from '@/Shared/HTTP/HttpResult';
import { combine } from '@/Shared/Result';

export function DetectionService(httpService: HttpService): IDetectionRepository {
	async function getDetections(oid: string): HttpResult<Detection[]> {
		function parseTo(apiResponse: DetectionDTO[]) {
			const listOfDetectionResults = apiResponse.map(toDetection)
			return combine(listOfDetectionResults)
		}

		const result = await httpService.get<DetectionDTO[], Detection[]>(
			{ url: '/objects/'+oid+'/detections' },
			{ parseTo }
		)

		return result
	}

	return {
		getDetections
	}
}