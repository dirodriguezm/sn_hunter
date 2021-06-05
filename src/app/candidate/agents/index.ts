import { IStoreModule } from "@/store/store.types";
import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

export const CandidatesModule: IStoreModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
