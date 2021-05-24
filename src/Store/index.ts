import ClassifierAgents from '@/Classes/Classifier/Agents';
import CandidateAgents from '@/Classes/Candidate/Agents';
import DetectionAgents from '@/Classes/Detection/Agents';
import SelectedAgents from '@/Classes/Selected/Agents';
import {StoreCreator} from '@/Store/StoreCreator';
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new StoreCreator({
	modules: {
		selected: SelectedAgents,
		candidate: CandidateAgents,
		detection: DetectionAgents,
		classifier: ClassifierAgents,
	}
}).create();
