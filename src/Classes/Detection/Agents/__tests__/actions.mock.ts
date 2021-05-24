import { DetectionState } from '@/Classes/Detection/Agents/state';
import { IRootState } from '@/Store/store.types';
import { ActionTree } from 'vuex';

export enum ActionTypes {
	getDetections = 'getDetections'
};

const mockActions: ActionTree<DetectionState, IRootState> = {
	getDetections: jest.fn()
};

export default mockActions;