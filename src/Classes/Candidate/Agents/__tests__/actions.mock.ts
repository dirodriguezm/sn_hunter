import { CandidateState } from '@/Classes/Candidate/Agents/state';
import { IRootState } from '@/Store/store.types';
import { ActionTree } from 'vuex';

export enum ActionTypes {
	getCandidates = 'getCandidates'
};

const mockCandidateActions: ActionTree<CandidateState, IRootState> = {
	[ActionTypes.getCandidates]: jest.fn()
};

export default mockCandidateActions;