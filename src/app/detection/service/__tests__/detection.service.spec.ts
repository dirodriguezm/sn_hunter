import { containerBuilder } from "@/shared/container";
import { resetContainer, mockTransient, cid, container } from "inversify-props";
import { IAxiosCreator } from "@/shared";
import {
  MockAxiosCreator,
  TestActions,
} from "@/shared/http/__tests__/HttpService.mock";
import { IDetectionRepository } from "../../entity";

beforeEach(() => {
  resetContainer();
  containerBuilder();
  mockTransient<IAxiosCreator>(cid.AxiosCreator, MockAxiosCreator);
});
describe("DetectionService", () => {
  describe("getDetections", () => {
    it("should get detections when http request success", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("ok");
      const service = container.get<IDetectionRepository>(cid.DetectionService);
      const result = await service.getDetections("oid");
      expect(result.isOk()).toBeTruthy();
    });
    it("should return err when http request error", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("error");
      const service = container.get<IDetectionRepository>(cid.DetectionService);
      const result = await service.getDetections("oid");
      expect(result.isErr()).toBeTruthy();
    });
    it("should return err when http request timeout", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("timeout");
      const service = container.get<IDetectionRepository>(cid.DetectionService);
      const result = await service.getDetections("oid");
      expect(result.isErr()).toBeTruthy();
    });
  });
});
