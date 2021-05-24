import { Candidate } from '@/Classes/Candidate/Entity/candidate.types'
import { Filter } from '@/Classes/Filter/Entity/filter.types'
import { HttpResult } from '@/Shared/HTTP/HttpResult'

export interface ICandidateRepository {
	getCandidates(filter: Filter): HttpResult<Candidate[]>
}