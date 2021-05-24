import { Classifier } from '@/Classes/Classifier/Entity/classifier.types'
import { HttpResult } from '@/Shared'

export interface IClassifierRepository {
	getClassifiers(): HttpResult<Classifier[]>
}