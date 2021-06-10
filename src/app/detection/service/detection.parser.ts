import { Result, ok, err } from "neverthrow";
import { DetectionData, Detection } from "../entity";
import { ParseError } from "@/shared";

export function toDomain(dto: DetectionData): Result<Detection, ParseError> {
  try {
    return ok(new Detection(dto));
  } catch (error) {
    return err(ParseError.fromError(error));
  }
}
