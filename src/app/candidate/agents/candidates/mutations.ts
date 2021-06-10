import { MutationTree } from 'vuex'
import { CandidateData } from '@/app/candidate/entity';
import { CandidatesState } from './state';

export enum MutationTypes {
    SET_REQUEST = 'SET_REQUEST',
    SET_SUCCESS = 'SET_SUCCESS',
    SET_ERROR = 'SET_ERROR',
}

export const mutations: MutationTree<CandidatesState> = {
	[MutationTypes.SET_REQUEST](state) {
		state.loading = true
		state.error = null
	},
	[MutationTypes.SET_ERROR](state, error) {
		state.loading = false
		state.error = error
	},
	[MutationTypes.SET_SUCCESS](state, candidates: CandidateData[]) {
		state.loading = false
		state.error = null
		state.candidates = candidates
	},
}

