import { CandidateData } from "../entity/candidate.types";
import { Result, ok, err } from "neverthrow";
import { Candidate } from "../entity/candidate";
import { ParseError } from "@/shared";

export function toDomain(dto: CandidateData): Result<Candidate, ParseError> {
  try {
    return ok(new Candidate(dto));
  } catch (error) {
    return err(ParseError.fromError(error));
  }
}
