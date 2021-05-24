//Candidates
import { getCandidates as makeGetCandidates } from '@/Classes/Candidate/Interactor/candidate.interactor';
import { MockCandidateService } from '@/Classes/Candidate/Service/__tests__/candidate.service.mock';
import { ICandidateRepository } from '@/Classes/Candidate/Entity/candidate.repository';

//Detections
import { getDetections as makeGetDetections } from '@/Classes/Detection/Interactor/detection.interactor';
import { MockDetectionService } from '@/Classes/Detection/Service/__tests__/detection.service.mock';
import { IDetectionRepository } from '@/Classes/Detection/Entity/detection.repository';

//Candidates
const mockCandidateService: ICandidateRepository = new MockCandidateService('ok');
export const getCandidates = makeGetCandidates({ candidateService: mockCandidateService });

//Detections
const mockDetectionService: IDetectionRepository = new MockDetectionService('ok');
export const getDetections = makeGetDetections({ detectionService: mockDetectionService });