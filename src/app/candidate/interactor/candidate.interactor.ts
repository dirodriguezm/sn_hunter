import { UseCaseInteractor, Callbacks } from "@/shared/generic/interactor";
import { ICandidateRepository, CandidateData } from "../entity";
import { inject } from "inversify-props";
import { isHttpError } from "@/shared";

export class GetCandidates implements UseCaseInteractor {
  candidateService: ICandidateRepository;
  constructor(@inject() candidateService: ICandidateRepository) {
    this.candidateService = candidateService;
  }
  async execute(filter: any, callbacks: Callbacks) {
    const result = await this.candidateService.getCandidates(filter);

    result
      .map((candidateList) => {
        const candidates: CandidateData[] = candidateList;
        callbacks.respondWithSuccess(candidates);
      })
      .mapErr((error) => {
        if (isHttpError(error)) {
          if (error.isClientError()) {
            callbacks.respondWithClientError(error);
          } else {
            callbacks.respondWithServerError(error);
          }
        } else {
          callbacks.respondWithParseError(error);
        }
      });
  }
}
