import { CandidateData } from '../../entity';

export const state = () => ({
    loading: false,
    candidate: {} as CandidateData,
    error: null as string | null
})

export type CandidateState = ReturnType<typeof state>
