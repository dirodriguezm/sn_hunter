import { ParseError, HttpError } from "@/shared";
import { Result, ok, err } from "neverthrow";
import { TestActions } from "@/shared/http/__tests__/HttpService.mock";
import { inject } from "inversify-props";
import { IDetectionRepository, DetectionData } from "../../entity";
import { mockDetectionsData } from "../../entity/__tests__/detection.mock";

export class MockDetectionService implements IDetectionRepository {
  actionType: TestActions;
  constructor(@inject("ActionType") actionType: TestActions) {
    this.actionType = actionType;
  }
  getDetections(
    filter: any
  ): Promise<Result<DetectionData[], HttpError | ParseError>> {
    if (this.actionType === "ok") {
      return new Promise((resolve) => {
        resolve(ok(mockDetectionsData));
      });
    } else if (
      this.actionType === "error" ||
      this.actionType === "serverError"
    ) {
      return new Promise((resolve) => {
        resolve(err(new HttpError(500, "Server Error")));
      });
    } else if (this.actionType === "clientError") {
      return new Promise((resolve) => {
        resolve(err(new HttpError(400, "Client Error")));
      });
    } else if (this.actionType === "timeout") {
      return new Promise((resolve) => {
        resolve(err(new HttpError(502, "Gateway Timeout")));
      });
    }
    return new Promise((resolve) => {
      resolve(err(ParseError.fromString("Parse Error")));
    });
  }
}
