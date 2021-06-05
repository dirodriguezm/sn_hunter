import { CandidatesModule } from "@/app/candidate/agents";
import { ClassifiersModule } from "@/app/classifier/agents";

export type Modules = {
  modules: any;
};

export const modules: Modules = {
  modules: {
    candidates: CandidatesModule,
    classifiers: ClassifiersModule,
  },
};
