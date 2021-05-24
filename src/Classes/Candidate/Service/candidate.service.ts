import { Candidate, CandidateAPIResponse } from '@/Classes/Candidate/Entity/candidate.types'
import { ICandidateRepository } from '@/Classes/Candidate/Entity/candidate.repository'
import { toDomain as toCandidate } from '@/Classes/Candidate/Service/candidate.parser'
import { Filter } from '@/Classes/Filter/Entity/filter.types'
import { HttpService } from '@/Shared/HTTP/HttpService'
import { HttpResult } from '@/Shared/HTTP/HttpResult'
import { combine } from '@/Shared/Result'
import qs from 'qs'

export function CandidateService(httpService: HttpService): ICandidateRepository {
	async function getCandidates(filter: Filter): HttpResult<Candidate[]> {

		function parseTo(apiResponse: CandidateAPIResponse) {
			const listOfCandidateResults = apiResponse.items.map(toCandidate)
			return combine(listOfCandidateResults)
		}

		const filterString = qs.stringify(filter, {skipNulls: true, arrayFormat: 'repeat'})

		const result = await httpService.get<CandidateAPIResponse, Candidate[]>(
			{
				url: '/objects?' + filterString + '&ranking=1&page_size=100&count=false&order_by=probability&order_mode=DESC',
				config: {
					headers: { 'content-type': 'application/x-www-form-urlencoded' }
				}
			},
			{ parseTo }
		)

		return result
	}

	return {
		getCandidates
	}
}