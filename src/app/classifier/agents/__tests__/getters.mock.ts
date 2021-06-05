import { GetterTree } from 'vuex';
import { ClassifierState } from '../state';
import { IRootState } from '@/store/store.types';
import { mockClassifiers } from '../../entity';

export const mockClassifierGetters: GetterTree<ClassifierState, IRootState> = {
	get: () => mockClassifiers,
	length: () => mockClassifiers.length,
	isLoading: () => false,
	isError: () => false
};
