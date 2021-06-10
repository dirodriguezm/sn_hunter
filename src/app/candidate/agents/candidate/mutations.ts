import { MutationTree } from 'vuex'
import { CandidateState } from './state'
import { CandidateData } from '../../entity'

export enum MutationTypes {
    SET_REQUEST = 'SET_REQUEST',
    SET_SUCCESS = 'SET_SUCCESS',
    SET_ERROR = 'SET_ERROR',
}

export const mutations: MutationTree<CandidateState> = {
	[MutationTypes.SET_REQUEST](state) {
		state.loading = true
		state.error = null
	},
	[MutationTypes.SET_ERROR](state, error) {
		state.loading = false
		state.error = error
	},
	[MutationTypes.SET_SUCCESS](state, candidate: CandidateData) {
		state.loading = false
		state.error = null
		state.candidate = candidate
	},
}
