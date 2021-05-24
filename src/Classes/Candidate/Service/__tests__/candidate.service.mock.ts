import { ICandidateRepository } from '@/Classes/Candidate/Entity/candidate.repository';
import { mockCandidates } from '@/Classes/Candidate/Entity/__tests__/candidate.mock';
import { Candidate } from '@/Classes/Candidate/Entity/candidate.types'
import { ParseError } from '@/Shared/ParseError/ParseError';
import { ok, err, Result } from '@/Shared/Result/Result';
import { HttpError } from '@/Shared/HTTP/HttpError';

type TestActions = 'ok' | 'error' | 'timeout';
export class MockCandidateService implements ICandidateRepository {
	actionType: TestActions;
	
	constructor(actionType: TestActions) {
		this.actionType = actionType;
	}

	getCandidates(): Promise<Result<Candidate[], ParseError | HttpError>> {
		if (this.actionType === 'ok') {
			return new Promise((resolve) => {resolve(ok(mockCandidates))});
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