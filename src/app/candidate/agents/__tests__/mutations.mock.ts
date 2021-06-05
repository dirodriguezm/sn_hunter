import { MutationTree } from "vuex";
import { MutationTypes } from "../mutations";
import { CandidateState } from "../state";

export const mockMutations: MutationTree<CandidateState> = {
  [MutationTypes.SET_SUCCESS]: jest.fn(),
  [MutationTypes.SET_ERROR]: jest.fn(),
  [MutationTypes.SET_REQUEST]: jest.fn(),
};

export const clearMockMutations = () => {
    (mockMutations[MutationTypes.SET_SUCCESS] as jest.Mock).mockClear()
    (mockMutations[MutationTypes.SET_REQUEST] as jest.Mock).mockClear()
    (mockMutations[MutationTypes.SET_ERROR] as jest.Mock).mockClear()
}
