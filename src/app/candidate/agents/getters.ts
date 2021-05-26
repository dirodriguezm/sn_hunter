import { CandidateState } from '@/Classes/Candidate/Agents/state'
import { IRootState } from '@/Store/store.types'
import { GetterTree } from 'vuex'


const getters: GetterTree<CandidateState, IRootState> = {
	get: (state) => state.candidates,
	length: (state) => state.candidates.length,
	isLoading: (state) => state.loading,
	isError: (state) => state.error
}

export default getters