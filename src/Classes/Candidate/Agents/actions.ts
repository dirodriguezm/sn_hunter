import { MutationTypes } from '@/Classes/Candidate/Agents/mutations';
import { CandidateState } from '@/Classes/Candidate/Agents/state';
import { Filter } from '@/Classes/Filter/Entity/filter.types';
import { getCandidates } from '@/Container/container';
import { IRootState } from '@/Store/store.types';
import { ActionTree } from 'vuex';

export enum ActionTypes {
	getCandidates = 'getCandidates'
};

const actions: ActionTree<CandidateState, IRootState> = {
	async [ActionTypes.getCandidates]({ commit }, filter: Filter) {

		commit(MutationTypes.GET_REQUEST);

		await getCandidates.execute(filter, {
			respondWithSuccess: (candidates) => {
				commit( MutationTypes.GET_SUCCESS, candidates )
			},
			respondWithClientError: (error) => {
				commit(
					MutationTypes.GET_ERROR,
					`CLIENT ERROR: ${error.message} (error status: ${error.status})`
				)
			},
			respondWithServerError: (error) => {
				commit(
					MutationTypes.GET_ERROR,
					`SERVER ERROR: ${error.message} (error status: ${error.status})`
				)
			}
		});
	}
};

export default actions;