import { ClassifierState } from '@/Classes/Classifier/Agents/state'
import { IRootState } from '@/Store/store.types'
import { GetterTree } from 'vuex'

const getters: GetterTree<ClassifierState, IRootState> = {
	get: (state) => state.classifiers,
	length: (state) => state.classifiers.length,
	isLoading: (state) => state.loading,
	isError: (state) => state.error
}

export default getters