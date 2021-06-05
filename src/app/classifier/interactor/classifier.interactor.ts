import { UseCaseInteractor, Callbacks } from "@/shared/generic";
import { IClassifierRepository, ClassifierData } from "../entity";
import { inject } from "inversify-props";
import { isHttpError } from "@/shared";

export class GetClassifiers implements UseCaseInteractor {
  classifierService: IClassifierRepository;
  constructor(@inject() classifierService: IClassifierRepository) {
    this.classifierService = classifierService;
  }
  async execute(_params: any, callbacks: Callbacks) {
    const result = await this.classifierService.getClassifiers();

    result
      .map((classifierList) => {
        const classifiers: ClassifierData[] = classifierList;
        callbacks.respondWithSuccess(classifiers);
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
