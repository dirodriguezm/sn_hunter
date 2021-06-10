import { UseCaseInteractor, Callbacks } from "@/shared/generic";
import { inject } from "inversify-props";
import { IDetectionRepository} from "../entity";
import { isHttpError } from '@/shared';

export class GetDetections implements UseCaseInteractor {
  private detectionService: IDetectionRepository;
  constructor(@inject() detectionService: IDetectionRepository) {
    this.detectionService = detectionService;
  }
  async execute(params: string, callbacks: Callbacks) {
    const result = await this.detectionService.getDetections(params);
    result
      .map((detectionList) => {
        callbacks.respondWithSuccess(detectionList);
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
