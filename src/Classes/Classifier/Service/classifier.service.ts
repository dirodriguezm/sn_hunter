import { IClassifierRepository } from '@/Classes/Classifier/Entity/classifier.repository'
import { toDomain as toClassifier } from '@/Classes/Classifier/Service/classifier.parser'
import { Classifier, ClassifierDTO } from '@/Classes/Classifier/Entity/classifier.types'
import { HttpService } from '@/Shared/HTTP/HttpService'
import { HttpResult } from '@/Shared/HTTP/HttpResult'
import { combine } from '@/Shared/Result'

export function ClassifierService(httpService: HttpService): IClassifierRepository {
	async function getClassifiers(): HttpResult<Classifier[]> {
		function parseTo(apiResponse: ClassifierDTO[]) {
			const listOfClassifierResults = apiResponse.map(toClassifier)
			return combine(listOfClassifierResults)
		}

		const result = await httpService.get<ClassifierDTO[], Classifier[]>(
			{ url: '/classifiers' },
			{ parseTo }
		)

		return result
	}

	return {
		getClassifiers
	}
}