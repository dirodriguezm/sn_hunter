import { GetterTree } from 'vuex';
import { DetectionState } from './state';
import { IRootState } from '@/store/store.types';

export const getters: GetterTree<DetectionState, IRootState> = {
    get: (state) => state.detection,
    isLoading: (state) => state.loading,
    isError: (state) => state.error != null,
    getError: (state) => state.error
}
