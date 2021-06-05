import { resetContainer, mockTransient, cid, container } from "inversify-props";
import { containerBuilder } from "@/shared/container/container";
import { IAxiosCreator } from "@/shared/http";
import {
  MockAxiosCreator,
  TestActions,
} from "@/shared/http/__tests__/HttpService.mock";
import { ICandidateRepository } from "../../entity";
import { CandidateSearchFilters } from "../candidate.service.types";

beforeEach(() => {
  resetContainer();
  containerBuilder();
  mockTransient<IAxiosCreator>(cid.AxiosCreator, MockAxiosCreator);
});

describe("CandidateService", () => {
  describe("getCandidates", () => {
    it("should get candidates when http request success", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("ok");
      const service = container.get<ICandidateRepository>(cid.CandidateService);
      const result = await service.getCandidates({
        classifier: "test",
        class: "test",
        firstmjd: ["test"],
        page: 1
      } as CandidateSearchFilters);
      expect(result.isOk()).toBeTruthy();
    });
    it("should return err when http request error", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("error");
      const service = container.get<ICandidateRepository>(cid.CandidateService);
      const result = await service.getCandidates({});
      expect(result.isErr()).toBeTruthy();
    });
    it("should return err when http request timeout", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("timeout");
      const service = container.get<ICandidateRepository>(cid.CandidateService);
      const result = await service.getCandidates({});
      expect(result.isErr()).toBeTruthy();
    });
  });
});
