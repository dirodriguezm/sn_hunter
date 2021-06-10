import { containerBuilder } from '@/shared/container';
import { cid, container, resetContainer } from "inversify-props";
import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { IStoreCreator } from '../StoreCreator';

beforeEach(() => {
  resetContainer();
  containerBuilder();
});
describe("Store", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  describe("Init", () => {
    it("should register modules", () => {
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      expect(store).toHaveProperty("_modulesNamespaceMap.candidates/");
      expect(store).toHaveProperty("_modulesNamespaceMap.candidate/");
      expect(store).toHaveProperty("_modulesNamespaceMap.classifiers/");
      expect(store).toHaveProperty("_modulesNamespaceMap.detection/");
      expect(store).toHaveProperty("_modulesNamespaceMap.detections/");
    });
  });
});
