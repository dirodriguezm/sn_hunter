import { ActionTree } from "vuex";
import { DetectionsState } from "./state";
import { IRootState } from "@/store/store.types";
import { MutationTypes } from "./mutations";
import { container, cid } from "inversify-props";
import { UseCaseInteractor } from "@/shared/generic";

export enum ActionTypes {
  getDetections = "getDetections",
}

export const actions: ActionTree<DetectionsState, IRootState> = {
  async [ActionTypes.getDetections]({ commit }, oid: string) {
    commit(MutationTypes.SET_REQUEST);
    const interactor = container.get<UseCaseInteractor>(cid.GetDetections);

    interactor.execute(oid, {
      respondWithSuccess: (detections) => {
        commit(MutationTypes.SET_SUCCESS, detections);
      },
      respondWithClientError: (error) => {
        commit(
          MutationTypes.SET_ERROR,
          `CLIENT ERROR: ${error.message} (error status: ${error.status})`
        );
      },
      respondWithServerError: (error) => {
        commit(
          MutationTypes.SET_ERROR,
          `SERVER ERROR: ${error.message} (error status: ${error.status})`
        );
      },
      respondWithParseError: (error) => {
        commit(MutationTypes.SET_ERROR, `PARSE ERROR: ${error.message}`);
      },
    });
  },
};
