import { DetectionData } from '../../entity';

export const state = () => ({
    loading: false,
    detection: {} as DetectionData,
    error: null as string | null
})

export type DetectionState = ReturnType<typeof state>
