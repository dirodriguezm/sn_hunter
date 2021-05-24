import { mockClassifiers } from '@/Classes/Classifier/Entity/__tests__/classifier.mock';
import mockClassifierActions from '@/Classes/Classifier/Agents/__tests__/actions.mock';
import mockClassifierGetters from '@/Classes/Classifier/Agents/__tests__/getters.mock';
import mockCandidateActions from '@/Classes/Candidate/Agents/__tests__/actions.mock';
import FilterComponent from '@/UI/components/FilterComponent/FilterComponent';
import { Filter } from '@/Classes/Filter/Entity/filter.types';
import ClassifierAgents from '@/Classes/Classifier/Agents';
import CandidateAgents from '@/Classes/Candidate/Agents';
import { mount, createLocalVue } from '@vue/test-utils';
import { StoreCreator } from '@/Store/StoreCreator';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import Vue from 'vue';

const mockData = {
	filter: {
		classifier: mockClassifiers[0].classifierName,
		class: null,
		firstmjd: [],
		page: 1
	} as Filter,
	datePickerMenu: false
};

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe('FilterComponent', () => {
	let vuetify: Vuetify;

	beforeEach(() => {
		vuetify = new Vuetify();
	});

	it('should show the classifiers in the respective v-select', () => {
		const mockStore = new StoreCreator({
			modules: {
				candidate: {
					...CandidateAgents,
					actions: mockCandidateActions
				},
				classifier: {
					...ClassifierAgents,
					actions: mockClassifierActions,
					getters: mockClassifierGetters
				}
			}
		}).create();

		const wrapper = mount(FilterComponent, {
			localVue,
			vuetify,
			store: mockStore,
			data() { return mockData }
		});

		const vSelectClassifier = wrapper.findAll('.v-select').at(0);
		expect(vSelectClassifier.props('items')).toBe(mockClassifiers);
	});


	it('should show the classes in the respective v-select, according to selected classifier', async () => {
		const mockStore = new StoreCreator({
			modules: {
				candidate: {
					...CandidateAgents,
					actions: mockCandidateActions
				},
				classifier: {
					...ClassifierAgents,
					actions: mockClassifierActions,
					getters: mockClassifierGetters
				}
			}
		}).create();

		const wrapper = mount(FilterComponent, {
			localVue,
			vuetify,
			store: mockStore,
			data() { return mockData }
		});

		const vSelectClassifier = wrapper.findAll('.v-select').at(1);
		expect(vSelectClassifier.props('items')).toBe(mockClassifiers[0].classes);
	});

	it('should execute setFilter() when the search button is pressed', async () => {
		const mockStore = new StoreCreator({
			modules: {
				candidate: {
					...CandidateAgents,
					actions: mockCandidateActions
				},
				classifier: {
					...ClassifierAgents,
					actions: mockClassifierActions,
					getters: mockClassifierGetters
				}
			}
		}).create();

		const wrapper = mount(FilterComponent, {
			localVue,
			vuetify,
			store: mockStore,
			data() { return mockData }
		});

		const searchButton = wrapper.find('.v-btn');
		searchButton.trigger('click');
		expect(mockCandidateActions.getCandidates).toHaveBeenCalled();
	});
})