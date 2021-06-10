import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { resetContainer, mockSingleton, cid, container } from "inversify-props";
import { containerBuilder } from "@/shared/container";
import { IDetectionRepository } from "@/app/detection/entity";
import { MockDetectionService } from "@/app/detection/service/__tests__/detection.service.mock";
import { TestActions } from "@/shared/http/__tests__/HttpService.mock";
import { IStoreCreator } from "@/store/StoreCreator";
import { ActionTypes } from "../actions";
import { mockDetectionsData } from "@/app/detection/entity/__tests__/detection.mock";

const localVue = createLocalVue();
localVue.use(Vuex);

beforeEach(() => {
  resetContainer();
  containerBuilder();
  mockSingleton<IDetectionRepository>(
    cid.DetectionService,
    MockDetectionService
  );
});

describe("Detections Actions", () => {
  describe("Get Detections", () => {
    it("should commit detections on success response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("ok");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("detections/" + ActionTypes.getDetections);
      expect(store.state.detections.detections).toStrictEqual(
        mockDetectionsData
      );
      expect(store.state.detections.error).toBeNull();
      expect(store.state.detections.loading).toBeFalsy();
    });
it("should commit server error on server error response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("serverError");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("detections/" + ActionTypes.getDetections);
      expect(store.state.detections.detections).toHaveLength(0);
      expect(store.state.detections.error).toContain("SERVER ERROR");
      expect(store.state.detections.loading).toBeFalsy();
    });
    it("should commit client error on client error response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("clientError");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("detections/" + ActionTypes.getDetections);
      expect(store.state.detections.detections).toHaveLength(0);
      expect(store.state.detections.error).toContain("CLIENT ERROR");
      expect(store.state.detections.loading).toBeFalsy();
    });
    it("should commit parse error on parse error response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("parseError");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("detections/" + ActionTypes.getDetections);
      expect(store.state.detections.detections).toHaveLength(0);
      expect(store.state.detections.error).toContain("PARSE ERROR");
      expect(store.state.detections.loading).toBeFalsy();
    });

  });
});
