import { Classifier } from '@/Classes/Classifier/Entity/classifier.types'

export const state = () => ({
	loading: false,
	classifiers: [] as Classifier[],
	error: null as string | null,
})

export type ClassifierState = ReturnType<typeof state>

export default state