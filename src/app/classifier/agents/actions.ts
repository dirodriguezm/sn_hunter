import { ActionTree } from "vuex";
import { ClassifierState } from "./state";
import { IRootState } from "@/store/store.types";
import { MutationTypes } from "./mutations";
import { cid, container } from "inversify-props";
import { UseCaseInteractor } from "@/shared/generic";

export enum ActionTypes {
  getClassifiers = "getClassifiers",
}

export const actions: ActionTree<ClassifierState, IRootState> = {
  async [ActionTypes.getClassifiers]({ commit }) {
    commit(MutationTypes.SET_REQUEST);
    const interactor = container.get<UseCaseInteractor>(cid.GetClassifiers);

    interactor.execute(null, {
      respondWithSuccess: (classifiers) => {
        commit(MutationTypes.SET_SUCCESS, classifiers);
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
