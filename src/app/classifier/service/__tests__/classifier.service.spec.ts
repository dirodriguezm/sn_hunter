import { containerBuilder } from '@/shared/container';
import { container, cid, resetContainer, mockTransient } from "inversify-props";
import { TestActions, MockAxiosCreator } from "@/shared/http/__tests__/HttpService.mock";
import { IAxiosCreator } from '@/shared';
import { IClassifierRepository } from '../../entity';

beforeEach(() => {
  resetContainer();
  containerBuilder();
  mockTransient<IAxiosCreator>(cid.AxiosCreator, MockAxiosCreator);
});


describe("ClassifierService", () => {
  describe("getClassifiers", () => {
    it("should get classifiers when http request success", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("ok");
      const service = container.get<IClassifierRepository>(
        cid.ClassifierService
      );
      const result = await service.getClassifiers();
      expect(result.isOk()).toBeTruthy();
    });
    it("should return err when http request error", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("error");
      const service = container.get<IClassifierRepository>(
        cid.ClassifierService
      );
      const result = await service.getClassifiers();
      expect(result.isErr()).toBeTruthy();
    });
    it("should return err when http request timeout", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("timeout");
      const service = container.get<IClassifierRepository>(
        cid.ClassifierService
      );
      const result = await service.getClassifiers();
      expect(result.isErr()).toBeTruthy();
    });
  });
});
