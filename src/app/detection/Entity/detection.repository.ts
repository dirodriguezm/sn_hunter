import { Detection } from '@/Classes/Detection/Entity/detection.types';
import { HttpResult } from '@/Shared/HTTP/HttpResult';

export interface IDetectionRepository {
	getDetections(oid: string): HttpResult<Detection[]>
}