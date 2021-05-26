import { Candidate } from '@/Classes/Candidate/Entity/candidate.types'

export const state = () => ({
	loading: false,
	candidates: [] as Candidate[],
	error: null as string | null
})

export type CandidateState = ReturnType<typeof state>

export default state