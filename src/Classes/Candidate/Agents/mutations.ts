import { Candidate } from '@/Classes/Candidate/Entity/candidate.types'
import { CandidateState } from '@/Classes/Candidate/Agents/state'
import { MutationTree } from 'vuex'

export enum MutationTypes {
	GET_REQUEST = 'GET_REQUEST',
	GET_SUCCESS = 'GET_SUCCESS',
	GET_ERROR = 'GET_ERROR'
}

const mutations: MutationTree<CandidateState> = {
	[MutationTypes.GET_REQUEST](state) {
		state.loading = true
		state.error = null
	},
	[MutationTypes.GET_ERROR](state, error) {
		state.loading = false
		state.error = error
	},
	[MutationTypes.GET_SUCCESS](state, candidates: Candidate[]) {
		state.loading = false
		state.error = null
		state.candidates = candidates
	},
}

export default mutations