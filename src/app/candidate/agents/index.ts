import { IStoreModule } from "@/store/store.types";
import { state as candidatesState } from "./candidates/state";
import { mutations as candidatesMutations } from "./candidates/mutations";
import { actions as candidatesActions } from "./candidates/actions";
import { getters as candidatesGetters } from "./candidates/getters";
import { state as candidateState } from "./candidate/state";
import { mutations as candidateMutations } from "./candidate/mutations";
import { actions as candidateActions } from "./candidate/actions";
import { getters as candidateGetters } from "./candidate/getters";

export const CandidatesModule: IStoreModule = {
  namespaced: true,
  state: candidatesState,
  mutations: candidatesMutations,
  actions: candidatesActions,
  getters: candidatesGetters,
};

export const CandidateModule: IStoreModule = {
  namespaced: true,
  state: candidateState,
  mutations: candidateMutations,
  actions: candidateActions,
  getters: candidateGetters,
};
