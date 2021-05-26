import { HttpError, ParseError } from "@/shared";
import { CandidateData } from "./candidate.types";
import { Result } from "neverthrow";

export interface ICandidateRepository {
  getCandidates(
    filter: any
  ): Promise<Result<CandidateData[], HttpError | ParseError>>;
}
