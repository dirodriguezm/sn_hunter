import { mockCandidatesData } from '@/Classes/Candidate/Entity/__tests__/candidate.mock';
import { mockDetectionsData } from '@/Classes/Detection/Entity/__tests__/detection.mock';
import { CandidateAPIResponse } from '@/Classes/Candidate/Entity/candidate.types';
import { mockFilter } from '@/Classes/Filter/Entity/__tests__/filter.mock';
import { IAxiosCreator } from '@/Shared/AxiosCreator';
import axios, { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import qs from 'qs';

type TestActions = 'ok' | 'error' | 'timeout';

export class MockAxiosCreator implements IAxiosCreator {
	mock!: MockAdapter;
	actionType: TestActions;
	candidatesQuery: string;
	detectionsQuery: string;

	constructor(type: TestActions) {
		this.actionType = type;
		this.candidatesQuery = '/objects?'+qs.stringify(mockFilter);
		this.detectionsQuery = '/objects/'+mockCandidatesData[0].oid+'/detections';
	}

	setMockActions() {
		this.mock.onGet(this.candidatesQuery).reply((_config: any) => {
			const response: CandidateAPIResponse = {
				total: 50001,
				page: 1,
				next: 2,
				has_next: true,
				prev: null,
				has_prev: false,
				items: mockCandidatesData
			}
			return [200, JSON.stringify(response)]
		});

		this.mock.onGet(this.detectionsQuery).reply((_config: any) => {
			return [200, mockDetectionsData]
		});
	}

	setErrorActions() {
		this.mock.onGet(this.candidatesQuery).networkError();
		this.mock.onGet(this.detectionsQuery).networkError();
	}

	setTimeoutActions() {
		this.mock.onGet(this.candidatesQuery).timeout();
		this.mock.onGet(this.detectionsQuery).timeout();
	}

	create(): AxiosInstance {
		const instance = axios.create({baseURL: ''});
		this.mock = new MockAdapter(instance);
		if (this.actionType === 'ok') {this.setMockActions()}
		if (this.actionType === 'error') {this.setErrorActions()}
		if (this.actionType === 'timeout') {this.setTimeoutActions()}
		return instance;
	}
}