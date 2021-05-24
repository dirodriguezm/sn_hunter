import { CandidateService } from '@/Classes/Candidate/Service/candidate.service'
import { MockAxiosCreator } from '@/Shared/HTTP/__tests__/HttpService.mock'
import { mockFilter } from '@/Classes/Filter/Entity/__tests__/filter.mock'
import { HttpService } from '@/Shared/HTTP/HttpService'

describe('CandidateService', () => {
	describe('getCandidates', () => {
		it('should get candidates', async () => {
			const mockAxiosCreator = new MockAxiosCreator('ok');
			const mockHttpService = new HttpService(mockAxiosCreator, true);
			const mockCandidateService = CandidateService(mockHttpService);
			const result = await mockCandidateService.getCandidates(mockFilter);
			expect(result.isOk()).toBeTruthy();
		})
	})
});