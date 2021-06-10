import { CandidatesModule, CandidateModule } from "@/app/candidate/agents";
import { ClassifiersModule } from "@/app/classifier/agents";
import { DetectionsModule, DetectionModule } from "@/app/detection/agents";

export type Modules = {
  modules: any;
};

export const modules: Modules = {
  modules: {
    candidates: CandidatesModule,
    candidate: CandidateModule,
    classifiers: ClassifiersModule,
    detections: DetectionsModule,
    detection: DetectionModule,
  },
};
