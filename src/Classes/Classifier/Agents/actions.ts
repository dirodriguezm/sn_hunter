import { MutationTypes } from '@/Classes/Classifier/Agents/mutations'
import { ClassifierState } from '@/Classes/Classifier/Agents/state'
import { getClassifiers } from '@/Container/container'
import { IRootState } from '@/Store/store.types'
import { ActionTree } from 'vuex'

export enum ActionTypes {
	getClassifiers = 'getClassifiers'
}

const actions: ActionTree<ClassifierState, IRootState> = {
	async [ActionTypes.getClassifiers]({ commit }) {
		commit( MutationTypes.GET_REQUEST )

		await getClassifiers.execute(null, {
			respondWithSuccess: (classifiers) => {
				commit( MutationTypes.GET_SUCCESS, classifiers )
			},
			respondWithClientError: (error) => {
				commit(
					MutationTypes.GET_ERROR,
					`CLIENT ERROR: ${error.message} (error status: ${error.status})`
				)
			},
			respondWithServerError: (error) => {
				commit(
					MutationTypes.GET_ERROR,
					`SERVER ERROR: ${error.message} (error status: ${error.status})`
				)
			}
		})
	}
}

export default actions