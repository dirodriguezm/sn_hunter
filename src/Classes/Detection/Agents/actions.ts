import { MutationTypes } from '@/Classes/Detection/Agents/mutations';
import { DetectionState } from '@/Classes/Detection/Agents/state';
import { getDetections } from '@/Container/container';
import { IRootState } from '@/Store/store.types';
import { ActionTree } from 'vuex';

export enum ActionTypes {
	getDetections = 'getDetections'
};

const actions: ActionTree<DetectionState, IRootState> = {
	async [ActionTypes.getDetections]({ commit }, oid: string) {

		commit(MutationTypes.GET_REQUEST);

		await getDetections.execute(oid, {
			respondWithSuccess: (detections) => {
				commit( MutationTypes.GET_SUCCESS, detections );
			},
			respondWithClientError: (error) => {
				commit(
					MutationTypes.GET_ERROR,
					`CLIENT ERROR: ${error.message} (error status: ${error.status})`
				);
			},
			respondWithServerError: (error) => {
				commit(
					MutationTypes.GET_ERROR,
					`SERVER ERROR: ${error.message} (error status: ${error.status})`
				);
			}
		});
	}
};

export default actions;