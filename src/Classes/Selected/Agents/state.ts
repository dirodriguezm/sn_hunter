import { Candidate } from '@/Classes/Candidate/Entity/candidate.types';
import { Detection } from '@/Classes/Detection/Entity/detection.types';

export const state = () => ({
	candidate: null as Candidate | null,
	detection: null as Detection | null,
	hasDetection: false as boolean,
	hasCandidate: false as boolean
})

export type SelectedState = ReturnType<typeof state>;
export default state;