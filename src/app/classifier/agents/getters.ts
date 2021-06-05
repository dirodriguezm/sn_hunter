import { GetterTree } from 'vuex'
import { ClassifierState } from './state'
import { IRootState } from '@/store/store.types'

export const getters: GetterTree<ClassifierState, IRootState> = {
	get: (state) => state.classifiers,
	length: (state) => state.classifiers.length,
	isLoading: (state) => state.loading,
	isError: (state) => state.error != null,
	getError: (state) => state.error
}
