import { HttpService, HttpError, ParseError } from "@/shared";
import { inject } from "inversify-props";
import { Result, combine } from "neverthrow";
import { toDomain } from "./detection.parser";
import { IDetectionRepository, DetectionData } from '../entity';

export class DetectionService implements IDetectionRepository {
  httpService: HttpService;
  constructor(@inject() httpService: HttpService) {
    this.httpService = httpService;
    this.httpService.initService("");
  }
  async getDetections(
    oid: string
  ): Promise<Result<DetectionData[], HttpError | ParseError>> {
    function parseTo(apiResponse: DetectionData[]) {
      const listOfDetectionResults = apiResponse.map(toDomain);
      return combine(listOfDetectionResults);
    }

    const result = await this.httpService.get(
      { url: "/objects/" + oid + "/detections" },
      { parseTo }
    );

    return result;
  }
}
