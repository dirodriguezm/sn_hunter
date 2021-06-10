import { CandidateData } from '@/app/candidate/entity';

export const state = () => ({
	loading: false,
	candidates: [] as CandidateData[],
	error: null as string | null,
})

export type CandidatesState = ReturnType<typeof state>