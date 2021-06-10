import { MutationTree } from "vuex";
import { DetectionData } from "../../entity";
import { DetectionsState } from './state';

export enum MutationTypes {
  SET_REQUEST = "SET_REQUEST",
  SET_SUCCESS = "SET_SUCCESS",
  SET_ERROR = "SET_ERROR",
}

export const mutations: MutationTree<DetectionsState> = {
  [MutationTypes.SET_REQUEST](state) {
    state.loading = true;
    state.error = null;
  },
  [MutationTypes.SET_ERROR](state, error) {
    state.error = error;
    state.loading = false;
  },
  [MutationTypes.SET_SUCCESS](state, detections: DetectionData[]) {
    state.detections = detections;
    state.error = null;
    state.loading = false;
  },
};
