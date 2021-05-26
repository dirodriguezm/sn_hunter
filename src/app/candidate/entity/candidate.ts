import { CandidateData } from "./candidate.types";

export class Candidate implements CandidateData {
  oid: string;
  ndethist: string | null;
  ncovhist: number | null;
  mjdstarthist: number | null;
  mjdendhist: number | null;
  corrected: boolean | null;
  stellar: boolean | null;
  ndet: number;
  g_r_max: number | null;
  g_r_max_corr: number | null;
  g_r_mean: number | null;
  g_r_mean_corr: number | null;
  firstmjd: number;
  lastmjd: number;
  deltajd: number;
  meanra: number;
  meandec: number;
  sigmara: number | null;
  sigmadec: number | null;
  class: string | null;
  classifier: string | null;
  probability: number | null;
  step_id_corr: string;
  constructor(data: CandidateData) {
    this.oid = data.oid;
    this.ndethist = data.ndethist;
    this.ncovhist = data.ncovhist;
    this.mjdstarthist = data.mjdstarthist;
    this.mjdendhist = data.mjdendhist;
    this.corrected = data.corrected;
    this.stellar = data.stellar;
    this.ndet = data.ndet;
    this.g_r_max = data.g_r_max;
    this.g_r_max_corr = data.g_r_max_corr;
    this.g_r_mean = data.g_r_mean;
    this.g_r_mean_corr = data.g_r_mean_corr;
    this.firstmjd = data.firstmjd;
    this.lastmjd = data.lastmjd;
    this.deltajd = data.deltajd;
    this.meanra = data.meanra;
    this.meandec = data.meandec;
    this.sigmara = data.sigmara;
    this.sigmadec = data.sigmadec;
    this.class = data.class;
    this.classifier = data.classifier;
    this.probability = data.probability;
    this.step_id_corr = data.step_id_corr;
  }
}
