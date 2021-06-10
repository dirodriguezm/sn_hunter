import { ActionTree } from "vuex";
import { CandidateState } from "./state";
import { IRootState } from "@/store/store.types";
import { CandidateData } from "../../entity";
import { MutationTypes } from "./mutations";
import { ActionTypes as detectionActions } from "@/app/detection/agents/detections/actions";

export enum ActionTypes {
  select = "select",
}

export const actions: ActionTree<CandidateState, IRootState> = {
  async [ActionTypes.select]({ commit, dispatch }, candidate: CandidateData) {
    commit(MutationTypes.SET_SUCCESS, candidate);
    await dispatch("detections/" + detectionActions.getDetections, null, {
      root: true,
    });
  },
};
