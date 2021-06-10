import { GetterTree } from 'vuex'
import { IRootState } from '@/store/store.types';
import { CandidatesState } from './state';


export const getters: GetterTree<CandidatesState, IRootState> = {
	get: (state) => state.candidates,
	length: (state) => state.candidates.length,
	isLoading: (state) => state.loading,
	isError: (state) => state.error != null,
	getError: (state) => state.error
}

