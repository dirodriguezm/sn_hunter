import { IDetectionRepository } from '@/Classes/Detection/Entity/detection.repository';
import { mockDetections } from '@/Classes/Detection/Entity/__tests__/detection.mock';
import { Detection } from '@/Classes/Detection/Entity/detection.types';
import { ParseError } from '@/Shared/ParseError/ParseError';
import { ok, err, Result } from '@/Shared/Result/Result';
import { HttpError } from '@/Shared/HTTP/HttpError';

type TestActions = 'ok' | 'error' | 'timeout';

export class MockDetectionService implements IDetectionRepository {
	actionType: TestActions;
	
	constructor(actionType: TestActions) {
		this.actionType = actionType;
	}

	getDetections(): Promise<Result<Detection[], ParseError | HttpError>> {
		if (this.actionType === 'ok') {
			return new Promise((resolve) => {resolve(ok(mockDetections))});
		}
		else if (this.actionType === 'error') {
			return new Promise((reject) => {reject(err(new HttpError(400)))});
		}
		else if (this.actionType === 'timeout') {
			return new Promise((reject) => {reject(err(new HttpError(504)))});
		}
		else {
			return new Promise((reject) => {reject(err(new HttpError(500)))});
		}
	}
}