import { SelectedState } from '@/Classes/Selected/Agents/state'
import { IRootState } from '@/Store/store.types'
import { GetterTree } from 'vuex'


const getters: GetterTree<SelectedState, IRootState> = {
	getCandidate: (state) => state.candidate,
	getDetection: (state) => state.detection,
	hasCandidate: (state) => state.hasCandidate,
	hasDetection: (state) => state.hasDetection
}

export default getters;