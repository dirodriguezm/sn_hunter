import { HttpService, HttpError, ParseError } from "@/shared";
import { IClassifierRepository, ClassifierData } from "../entity";
import { Result, combine } from "neverthrow";
import { inject } from 'inversify-props';
import {toDomain} from './classifier.parser'

export class ClassifierService implements IClassifierRepository {
  httpService: HttpService
  constructor(@inject() httpService: HttpService) {
	  this.httpService = httpService
	  this.httpService.initService("")
  }

  async getClassifiers(): Promise<
    Result<ClassifierData[], HttpError | ParseError>
  > {
    function parseTo(apiResponse: ClassifierData[]) {
      const listOfClassifierResults = apiResponse.map(toDomain);
      return combine(listOfClassifierResults);
    }

    const result = await this.httpService.get(
      { url: "/classifiers" },
      { parseTo }
    );

    return result;
  }
}
