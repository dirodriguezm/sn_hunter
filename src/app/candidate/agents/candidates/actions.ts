import { IRootState } from "@/store/store.types";
import { ActionTree } from "vuex";
import { CandidateSearchFilters } from "@/app/candidate/service/candidate.service.types";
import { container, cid } from "inversify-props";
import { UseCaseInteractor } from "@/shared/generic";
import { CandidatesState } from './state';
import { MutationTypes } from './mutations';

export enum ActionTypes {
  getCandidates = "getCandidates",
}

export const actions: ActionTree<CandidatesState, IRootState> = {
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
