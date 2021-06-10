import { ActionTree } from 'vuex';
import { CandidateState } from '../state';
import { IRootState } from '@/store/store.types';

export enum ActionTypes {
	getCandidates = 'getCandidates'
};

export const mockCandidateActions: ActionTree<CandidateState, IRootState> = {
	[ActionTypes.getCandidates]: jest.fn()
};
