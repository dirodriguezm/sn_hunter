import { ActionTree } from "vuex";
import { ClassifierState } from "../state";
import { IRootState } from "@/store/store.types";

export enum ActionTypes {
  getClassifiers = "getClassifiers",
}

export const mockClassifierActions: ActionTree<ClassifierState, IRootState> = {
  [ActionTypes.getClassifiers]: jest.fn(),
};
