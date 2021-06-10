import { GetterTree } from 'vuex';
import { IRootState } from '@/store/store.types';
import { DetectionsState } from './state';


export const getters: GetterTree<DetectionsState, IRootState> = {
	get: (state) => state.detections,
	getFirst: (state) => state.detections
		.sort((a, b) => (a.mjd > b.mjd) ? 1 : -1 )[0],
	length: (state) => state.detections.length,
	isLoading: (state) => state.loading,
	isError: (state) => state.error != null,
	getError: (state) => state.error
};

