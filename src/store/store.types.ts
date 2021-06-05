import { CandidateState } from "@/app/candidate/agents/state";
import { ClassifierState } from '@/app/classifier/agents/state';

export interface IRootState {
  candidates: CandidateState;
  classifiers: ClassifierState
}
export interface IStoreModule {
  namespaced: boolean;
  state: any;
  mutations: any;
  actions: any;
  getters: any;
}
