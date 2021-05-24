import { Candidate, CandidateDTO } from '@/Classes/Candidate/Entity/candidate.types'
import { ParseError } from '@/Shared/ParseError/ParseError'
import { err, ok, Result } from '@/Shared/Result/Result'

export function toDomain(dto: CandidateDTO): Result<Candidate, ParseError> {
	try {
		return ok({
			...dto,
			grMax: dto.g_r_max,
			grMaxCorr: dto.g_r_max_corr,
			grMean: dto.g_r_mean,
			grMeanCorr: dto.g_r_mean_corr,
			className: dto.class,
			stepIdCorr: dto.step_id_corr
		});
		
	} catch (error) {
		return err(ParseError.fromError(error));
	}
}