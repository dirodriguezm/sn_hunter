import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
import { state } from "./state";
import { IStoreModule } from "@/store/store.types";

export const ClassifiersModule: IStoreModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
