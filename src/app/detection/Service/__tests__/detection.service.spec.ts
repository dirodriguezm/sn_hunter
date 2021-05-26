import { mockCandidatesData } from '@/Classes/Candidate/Entity/__tests__/candidate.mock';
import { DetectionService } from '@/Classes/Detection/Service/detection.service';
import { MockAxiosCreator } from '@/Shared/HTTP/__tests__/HttpService.mock';
import { HttpService } from '@/Shared/HTTP/HttpService';

describe('DetectionService', () => {
	describe('getDetections', () => {
		it('should get detections', async () => {
			const mockAxiosCreator = new MockAxiosCreator('ok');
			const mockHttpService = new HttpService(mockAxiosCreator, true);
			const mockDetectionService = DetectionService(mockHttpService);
			const result = await mockDetectionService.getDetections(mockCandidatesData[0].oid);
			expect(result.isOk()).toBeTruthy();
		})
	})
});