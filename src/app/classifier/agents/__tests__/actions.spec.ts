import { containerBuilder } from "@/shared/container";
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import { resetContainer, mockSingleton, cid, container } from "inversify-props";
import { IClassifierRepository, mockClassifiersData } from "../../entity";
import { MockClassifierService } from "../../service/__tests__/classifier.service.mock";
import { TestActions } from "@/shared/http/__tests__/HttpService.mock";
import { IStoreCreator } from "@/store/StoreCreator";
import { ActionTypes } from "../actions";

const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  resetContainer();
  containerBuilder();
  mockSingleton<IClassifierRepository>(
    cid.ClassifierService,
    MockClassifierService
  );
});
describe("Classifier Actions", () => {
  describe("Get classifiers", () => {
    it("should commit candidates on success response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("ok");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("classifiers/" + ActionTypes.getClassifiers);
      expect(store.state.classifiers.classifiers).toStrictEqual(
        mockClassifiersData
      );
      expect(store.state.classifiers.error).toBeNull();
      expect(store.state.classifiers.loading).toBeFalsy();
    });
    it("should commit server error on server error response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("serverError");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("classifiers/" + ActionTypes.getClassifiers);
      expect(store.state.classifiers.classifiers).toHaveLength(0);
      expect(store.state.classifiers.error).toContain("SERVER ERROR");
      expect(store.state.classifiers.loading).toBeFalsy();
    });
    it("should commit client error on client error response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("clientError");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("classifiers/" + ActionTypes.getClassifiers);
      expect(store.state.classifiers.classifiers).toHaveLength(0);
      expect(store.state.classifiers.error).toContain("CLIENT ERROR");
      expect(store.state.classifiers.loading).toBeFalsy();
    });
    it("should commit parse error on parse error response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("parseError");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("classifiers/" + ActionTypes.getClassifiers);
      expect(store.state.classifiers.classifiers).toHaveLength(0);
      expect(store.state.classifiers.error).toContain("PARSE ERROR");
      expect(store.state.classifiers.loading).toBeFalsy();
    });
  });
});
