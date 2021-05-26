import "reflect-metadata";
import {
  IAxiosCreator,
  AxiosCreator,
  IHttpService,
  HttpService,
} from "../http";
import { container } from "inversify-props";
import { CandidateService } from "@/app/candidate/service/candidate.service";
import { ICandidateRepository } from "@/app/candidate/entity/candidate.repository";
import { UseCaseInteractor } from "../generic/interactor";
import { GetCandidates } from "@/app/candidate/interactor/candidate.interactor";

export function containerBuilder() {
  container.addTransient<IAxiosCreator>(AxiosCreator);
  container.addTransient<IHttpService>(HttpService);
  container.addSingleton<ICandidateRepository>(CandidateService);
  container.addTransient<UseCaseInteractor>(GetCandidates);
}
