import { MutationTree } from 'vuex'
import { DetectionState } from './state'
import { DetectionData } from '../../entity'

export enum MutationTypes {
    SET_REQUEST = 'SET_REQUEST',
    SET_SUCCESS = 'SET_SUCCESS',
    SET_ERROR = 'SET_ERROR',
}

export const mutations: MutationTree<DetectionState> = {
	[MutationTypes.SET_REQUEST](state) {
		state.loading = true
		state.error = null
	},
	[MutationTypes.SET_ERROR](state, error) {
		state.loading = false
		state.error = error
	},
	[MutationTypes.SET_SUCCESS](state, detection: DetectionData) {
		state.loading = false
		state.error = null
		state.detection = detection
	},
}