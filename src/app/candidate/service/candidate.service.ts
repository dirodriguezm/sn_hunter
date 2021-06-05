import qs from "qs";
import { ICandidateRepository } from "../entity/candidate.repository";
import { CandidateData } from "../entity/candidate.types";
import { Result, combine } from "neverthrow";
import {
  CandidateAPIResponse,
  CandidateSearchFilters,
} from "./candidate.service.types";
import { inject } from "inversify-props";
import { toDomain } from "./candidate.parser";
import { HttpService, HttpError } from "@/shared/http";
import { ParseError } from "@/shared/ParseError";

export class CandidateService implements ICandidateRepository {
  httpService: HttpService;
  constructor(@inject() httpService: HttpService) {
    this.httpService = httpService;
    this.httpService.initService("");
  }
  async getCandidates(
    filter: CandidateSearchFilters
  ): Promise<Result<CandidateData[], HttpError | ParseError>> {
    const parseTo = (
      apiResponse: CandidateAPIResponse
    ): Result<CandidateData[], ParseError> => {
      const listOfCandidateResults = apiResponse.items.map(toDomain);
      return combine(listOfCandidateResults);
    };

    return await this.httpService.get(
      {
        url: "/objects",
        config: { params: filter, paramsSerializer: this.parseQueryString },
      },
      { parseTo }
    );
  }

  private parseQueryString(filters: CandidateSearchFilters): string {
    return qs.stringify(filters, {
      skipNulls: true,
      arrayFormat: "repeat",
      filter: (value) => {
        if (value === "") {
          return;
        }
        return value;
      },
    });
  }
}