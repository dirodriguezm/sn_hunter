import { HttpService } from '@/Shared/HTTP/HttpService';
import { AxiosCreator } from '@/Shared/AxiosCreator';

// Candidate
import { CandidateService as makeCandidateService } from '@/Classes/Candidate/Service/candidate.service';
import { getCandidates as makeGetCandidates } from '@/Classes/Candidate/Interactor/candidate.interactor';

// Classifier
import { ClassifierService as makeClassifierService } from '@/Classes/Classifier/Service/classifier.service';
import { getClassifiers as makeGetClassifiers } from '@/Classes/Classifier/Interactor/classifier.interactor';

// Detection
import { DetectionService as makeDetectionService } from '@/Classes/Detection/Service/detection.service';
import { getDetections as makeGetDetections } from '@/Classes/Detection/Interactor/detection.interactor';

// Create Axios Instance
const axiosService = new AxiosCreator('https://dev.api.alerce.online');

// Create main HTTP Service using Axios Instance
const coreHttpService = new HttpService(axiosService);

//Candidates
const candidateService = makeCandidateService(coreHttpService);
export const getCandidates = makeGetCandidates({ candidateService });

//Classifiers
const classifierService = makeClassifierService(coreHttpService);
export const getClassifiers = makeGetClassifiers({ classifierService });

//Detections
const detectionService = makeDetectionService(coreHttpService);
export const getDetections = makeGetDetections({ detectionService });