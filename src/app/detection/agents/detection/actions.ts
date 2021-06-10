import { ActionTree } from "vuex";
import { IRootState } from "@/store/store.types";
import { DetectionData } from "../../entity";
import { DetectionState } from "./state";
import { MutationTypes } from "./mutations";

export enum ActionTypes {
  select = "select",
}

export const actions: ActionTree<DetectionState, IRootState> = {
  async [ActionTypes.select]({ commit }, detection: DetectionData) {
    commit(MutationTypes.SET_SUCCESS, detection);
  },
};
