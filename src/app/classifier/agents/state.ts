import { ClassifierData } from '../entity'

export const state = () => ({
	loading: false,
	classifiers: [] as ClassifierData[],
	error: null as string | null,
})

export type ClassifierState = ReturnType<typeof state>
