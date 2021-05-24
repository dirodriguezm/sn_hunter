import { ICandidateRepository } from '@/Classes/Candidate/Entity/candidate.repository'
import { Candidate } from '@/Classes/Candidate/Entity/candidate.types'
import { HttpError, isHttpError } from '@/Shared/HTTP/HttpError'
import { Filter } from '@/Classes/Filter/Entity/filter.types'

type Services = {
	candidateService: ICandidateRepository;
}

export type Parameters = Filter;

export type Callbacks = {
	respondWithSuccess: (candidates: Candidate[]) => void;
	respondWithClientError: (e: HttpError) => void;
	respondWithServerError: (e: HttpError) => void;
};

export function getCandidates( { candidateService }: Services ): AsyncUseCase<Parameters, Callbacks> {
	async function execute(
		filter: Parameters,
		{
			respondWithSuccess,
			respondWithClientError,
			respondWithServerError
		}: Callbacks
	) {

		const result = await candidateService.getCandidates(filter)

		result
		.map( (candidateList) => {
			const candidates: Candidate[] = candidateList
			respondWithSuccess(candidates)
		} )
		.mapErr( (error) => {
			if (isHttpError(error)) {
				if (error.isClientError()) {
					respondWithClientError(error)
					return
				}
				respondWithServerError(error)
			}
		} )
	}

	return { execute }
}