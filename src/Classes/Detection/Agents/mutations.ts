import { Detection } from '@/Classes/Detection/Entity/detection.types'
import { DetectionState } from '@/Classes/Detection/Agents/state'
import { MutationTree } from 'vuex'

export enum MutationTypes {
	GET_REQUEST = 'GET_REQUEST',
	GET_SUCCESS = 'GET_SUCCESS',
	GET_ERROR = 'GET_ERROR'
}

const mutations: MutationTree<DetectionState> = {
	[MutationTypes.GET_REQUEST](state) {
		state.loading = true;
		state.error = null;
	},
	[MutationTypes.GET_ERROR](state, error) {
		state.error = error;
		state.loading = false;
	},
	[MutationTypes.GET_SUCCESS](state, detections: Detection[]) {
		state.detections = detections;
		state.error = null;
		state.loading = false;
	},
};

export default mutations;
