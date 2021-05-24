import { Classifier } from '@/Classes/Classifier/Entity/classifier.types'
import { ClassifierState } from '@/Classes/Classifier/Agents/state'
import { MutationTree } from 'vuex'

export enum MutationTypes {
	GET_REQUEST = 'GET_REQUEST',
	GET_SUCCESS = 'GET_SUCCESS',
	GET_ERROR = 'GET_ERROR'
}

const mutations: MutationTree<ClassifierState> = {
	[MutationTypes.GET_REQUEST](state) {
		state.loading = true
		state.error = null
	},
	[MutationTypes.GET_ERROR](state, error) {
		state.loading = false
		state.error = error
	},
	[MutationTypes.GET_SUCCESS](state, classifiers: Classifier[]) {
		state.loading = false
		state.error = null
		state.classifiers = classifiers
	},
}

export default mutations