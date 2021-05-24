import { Candidate } from '@/Classes/Candidate/Entity/candidate.types';
import { Detection } from '@/Classes/Detection/Entity/detection.types';
import { MutationTypes } from '@/Classes/Selected/Agents/mutations';
import { SelectedState } from '@/Classes/Selected/Agents/state';
import { IRootState } from '@/Store/store.types';
import { ActionTree } from 'vuex';

export enum ActionTypes {
	deselect = 'deselect',
	setCandidate = 'setCandidate',
	setDetection = 'setDetection'
}

const actions: ActionTree<SelectedState, IRootState> = {
	async [ActionTypes.deselect]({ commit }) {
		commit(MutationTypes.DESELECT);
	},
	async [ActionTypes.setCandidate]({ commit }, candidate: Candidate) {
		commit(MutationTypes.SET_CANDIDATE, candidate);
	},
	async [ActionTypes.setDetection]({ commit }, detection: Detection) {
		commit(MutationTypes.SET_DETECTION, detection);
	}
};

export default actions;