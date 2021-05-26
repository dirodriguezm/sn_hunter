import { Detection, DetectionDTO } from '@/Classes/Detection/Entity/detection.types';
import { ParseError } from '@/Shared/ParseError/ParseError';
import { err, ok, Result } from '@/Shared/Result/Result';

export function toDomain(dto: DetectionDTO): Result<Detection, ParseError> {
	try {
		return ok({
			...dto,
			magpsfCorr: dto.magpsf_corr,
			magpsfCorrExt: dto.magpsf_corr_ext,
			magapCorr: dto.magap_corr,
			sigmapsfCorr: dto.sigmapsf_corr,
			sigmapsfCorrExt: dto.sigmapsf_corr_ext,
			sigmagapCorr: dto.sigmagap_corr,
			hasStamp: dto.has_stamp,
			candidAlert: dto.candid_alert,
			stepIdCorr: dto.step_id_corr,
			parentCandid: dto.parent_candid
		});
		
	} catch (error) {
		return err(ParseError.fromError(error));
	}
}