import { mockFilter } from '@/Classes/Filter/Entity/__tests__/filter.mock';
import { getCandidates } from '@/Container/__tests__/container.mock';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const Vue = createLocalVue();
Vue.use(Vuex);

describe('CandidateInteractor', () => {
	it('should get candidates', async () => {
		const callbacks = {
			respondWithSuccess: jest.fn(),
			respondWithServerError: jest.fn(),
			respondWithClientError: jest.fn()
		};
		
		await getCandidates.execute(mockFilter, callbacks);

		expect(callbacks.respondWithSuccess).toHaveBeenCalled();
	})
})