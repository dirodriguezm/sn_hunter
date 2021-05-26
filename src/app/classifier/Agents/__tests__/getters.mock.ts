import { mockClassifiers } from '@/Classes/Classifier/Entity/__tests__/classifier.mock';
import { ClassifierState } from '@/Classes/Classifier/Agents/state';
import { IRootState } from '@/Store/store.types';
import { GetterTree } from 'vuex';

const mockClassifierGetters: GetterTree<ClassifierState, IRootState> = {
	get: () => mockClassifiers,
	length: () => mockClassifiers.length,
	isLoading: () => false,
	isError: () => false
};

export default mockClassifierGetters;