import { ParseError, HttpError } from "@/shared";
import { Result } from "neverthrow";

export type DetectionData = {
  mjd: number;
  candid: string;
  fid: number;
  pid: number;
  diffmaglim: number;
  isdiffpos: number;
  nid: number;
  distnr: number;
  magpsf: number;
  magpsf_corr: number;
  magpsf_corr_ext: null;
  magap: number;
  magap_corr: number | null;
  sigmapsf: number;
  sigmapsf_corr: number;
  sigmapsf_corr_ext: number;
  sigmagap: number;
  sigmagap_corr: number | null;
  ra: number;
  dec: number;
  rb: number;
  rbversion: string;
  drb: number | null;
  magapbig: number;
  sigmagapbig: number;
  rfid: number | null;
  has_stamp: boolean;
  corrected: boolean;
  dubious: boolean;
  candid_alert: null;
  step_id_corr: string;
  phase: null;
  parent_candid: number;
};
export interface IDetectionRepository {
  getDetections(
    oid: string
  ): Promise<Result<DetectionData[], HttpError | ParseError>>;
}
