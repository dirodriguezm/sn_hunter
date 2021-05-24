import { Candidate } from '@/Classes/Candidate/Entity/candidate.types';
import { Detection } from '@/Classes/Detection/Entity/detection.types';
import { SelectedState } from '@/Classes/Selected/Agents/state';
import { MutationTree } from 'vuex';

export enum MutationTypes {
	DESELECT = 'DESELECT',
	SET_CANDIDATE = 'SET_CANDIDATE',
	SET_DETECTION = 'SET_DETECTION'
}

const mutations: MutationTree<SelectedState> = {
	[MutationTypes.DESELECT](state) {
		state.candidate = null
		state.detection = null
		state.hasCandidate = false
		state.hasDetection = false
	},
	[MutationTypes.SET_CANDIDATE](state, candidate: Candidate) {
		state.candidate = candidate
		state.hasCandidate = true
	},
	[MutationTypes.SET_DETECTION](state, detection: Detection) {
		state.detection = detection
		state.hasDetection = true
	}
};

export default mutations;