import { DetectionState } from '@/Classes/Detection/Agents/state';
import { IRootState } from '@/Store/store.types';
import { GetterTree } from 'vuex';


const getters: GetterTree<DetectionState, IRootState> = {
	get: (state) => state.detections,
	getFirst: (state) => state.detections
		.sort((a, b) => (a.mjd > b.mjd) ? 1 : -1 )[0],
	length: (state) => state.detections.length,
	isLoading: (state) => state.loading,
	isError: (state) => state.error
};

export default getters;