import { ICandidateRepository, CandidateData } from "../../entity";
import { ParseError, HttpError } from "@/shared";
import { Result, ok, err } from "neverthrow";
import { TestActions } from "@/shared/http/__tests__/HttpService.mock";
import { inject } from "inversify-props";
import { mockCandidatesData } from "../../entity/__tests__/candidate.mock";

export class MockCandidateService implements ICandidateRepository {
  actionType: TestActions;
  constructor(@inject("ActionType") actionType: TestActions) {
    this.actionType = actionType;
  }
  getCandidates(
    filter: any
  ): Promise<Result<CandidateData[], HttpError | ParseError>> {
    if (this.actionType === "ok") {
      return new Promise((resolve) => {
        resolve(ok(mockCandidatesData));
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
