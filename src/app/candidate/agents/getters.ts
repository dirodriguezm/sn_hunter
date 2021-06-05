import { GetterTree } from 'vuex'
import { CandidateState } from '@/app/candidate/agents/state';
import { IRootState } from '@/store/store.types';


export const getters: GetterTree<CandidateState, IRootState> = {
	get: (state) => state.candidates,
	length: (state) => state.candidates.length,
	isLoading: (state) => state.loading,
	isError: (state) => state.error != null,
	getError: (state) => state.error
}

