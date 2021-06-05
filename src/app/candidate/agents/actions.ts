import { IRootState } from "@/store/store.types";
import { ActionTree } from "vuex";
import { CandidateState } from "@/app/candidate/agents/state";
import { CandidateSearchFilters } from "@/app/candidate/service/candidate.service.types";
import { MutationTypes } from "@/app/candidate/agents/mutations";
import { container, cid } from "inversify-props";
import { UseCaseInteractor } from "@/shared/generic";

export enum ActionTypes {
  getCandidates = "getCandidates",
}

export const actions: ActionTree<CandidateState, IRootState> = {
  async [ActionTypes.getCandidates](
    { commit },
    filter: CandidateSearchFilters
  ) {
    commit(MutationTypes.SET_REQUEST);
    const interactor = container.get<UseCaseInteractor>(cid.GetCandidates);

    interactor.execute(filter, {
      respondWithSuccess: (candidates) => {
        commit(MutationTypes.SET_SUCCESS, candidates);
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
