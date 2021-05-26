import { CandidateData } from "../entity/candidate.types";

export type CandidateAPIResponse = {
  total: number;
  page: number;
  next: number | null;
  has_next: boolean;
  prev: number | null;
  has_prev: boolean;
  items: CandidateData[];
};

export interface CandidateSearchFilters {}
