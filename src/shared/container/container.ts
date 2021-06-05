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
import { Modules, modules } from '@/store/RegisterModules';
import { IStoreCreator, StoreCreator } from '@/store/StoreCreator';
import { IClassifierRepository } from '@/app/classifier/entity';
import { ClassifierService } from '@/app/classifier/service/classifier.service';
import { GetClassifiers } from '@/app/classifier/interactor/classifier.interactor';

export function containerBuilder() {
  container.addTransient<IAxiosCreator>(AxiosCreator);
  container.addTransient<IHttpService>(HttpService);
  container.addSingleton<ICandidateRepository>(CandidateService);
  container.addTransient<UseCaseInteractor>(GetCandidates);
  container.bind<Modules>("Modules").toConstantValue(modules);
  container.addSingleton<IStoreCreator>(StoreCreator);
  container.addSingleton<IClassifierRepository>(ClassifierService)
  container.addTransient<UseCaseInteractor>(GetClassifiers)
}
