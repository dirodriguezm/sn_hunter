import { GetterTree } from 'vuex';
import { CandidateState } from './state';
import { IRootState } from '@/store/store.types';

export const getters: GetterTree<CandidateState, IRootState> = {
	get: (state) => state.candidate,
	isLoading: (state) => state.loading,
	isError: (state) => state.error != null,
	getError: (state) => state.error
}
