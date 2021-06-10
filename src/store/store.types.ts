import { ClassifierState } from "@/app/classifier/agents/state";
import { CandidatesState } from "@/app/candidate/agents/candidates/state";
import { DetectionsState } from "@/app/detection/agents/detections/state";
import { CandidateState } from "@/app/candidate/agents/candidate/state";
import { DetectionState } from "@/app/detection/agents/detection/state";

export interface IRootState {
  candidates: CandidatesState;
  candidate: CandidateState;
  classifiers: ClassifierState;
  detections: DetectionsState;
  detection: DetectionState;
}
export interface IStoreModule {
  namespaced: boolean;
  state: any;
  mutations: any;
  actions: any;
  getters: any;
}
