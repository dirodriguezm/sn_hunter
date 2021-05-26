import { ClassifierState } from '@/Classes/Classifier/Agents/state';
import { IRootState } from '@/Store/store.types';
import { ActionTree } from 'vuex';

export enum ActionTypes {
	getClassifiers = 'getClassifiers'
};

const mockClassifierActions: ActionTree<ClassifierState, IRootState> = {
	[ActionTypes.getClassifiers]: jest.fn()
};

export default mockClassifierActions;