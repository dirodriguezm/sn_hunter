export type Candidate = {
	oid: string
	ndethist: string | null
	ncovhist: number | null
	mjdstarthist: number | null
	mjdendhist: number | null
	corrected: boolean | null
	stellar: boolean | null
	ndet: number
	grMax: number | null
	grMaxCorr: number | null
	grMean: number | null
	grMeanCorr: number | null
	firstmjd: number
	lastmjd: number
	deltajd: number
	meanra: number
	meandec: number
	sigmara: number | null
	sigmadec: number | null
	className: string | null
	classifier: string | null
	probability: number | null
	stepIdCorr: string
}

export type CandidateDTO = {
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
}

export type CandidateAPIResponse = {
	total: number;
	page: number;
	next: number | null;
	has_next: boolean;
	prev: number | null;
	has_prev: boolean;
	items: CandidateDTO[];
}