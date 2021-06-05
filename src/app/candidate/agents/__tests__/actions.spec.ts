import { containerBuilder } from "@/shared/container";
import { resetContainer, container, cid, mockSingleton } from "inversify-props";
import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { ActionTypes } from "../actions";
import { TestActions } from "@/shared/http/__tests__/HttpService.mock";
import { IStoreCreator } from "@/store/StoreCreator";
import { ICandidateRepository } from "../../entity";
import { MockCandidateService } from "../../service/__tests__/candidate.service.mock";
import { mockCandidatesData } from "../../entity/__tests__/candidate.mock";

const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  resetContainer();
  containerBuilder();
  mockSingleton<ICandidateRepository>(
    cid.CandidateService,
    MockCandidateService
  );
});
describe("Candidate Actions", () => {
  describe("Get candidates", () => {
    it("should commit candidates on success response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("ok");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("candidates/" + ActionTypes.getCandidates);
      expect(store.state.candidates.candidates).toStrictEqual(
        mockCandidatesData
      );
      expect(store.state.candidates.error).toBeNull();
      expect(store.state.candidates.loading).toBeFalsy();
    });
    it("should commit server error on server error response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("serverError");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("candidates/" + ActionTypes.getCandidates);
      expect(store.state.candidates.candidates).toHaveLength(0);
      expect(store.state.candidates.error).toContain("SERVER ERROR");
      expect(store.state.candidates.loading).toBeFalsy();
    });
    it("should commit client error on client error response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("clientError");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("candidates/" + ActionTypes.getCandidates);
      expect(store.state.candidates.candidates).toHaveLength(0);
      expect(store.state.candidates.error).toContain("CLIENT ERROR");
      expect(store.state.candidates.loading).toBeFalsy();
    });
    it("should commit parse error on parse error response", async () => {
      container.bind<TestActions>("ActionType").toConstantValue("parseError");
      const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
      const store = storeCreator.create();
      await store.dispatch("candidates/" + ActionTypes.getCandidates);
      expect(store.state.candidates.candidates).toHaveLength(0);
      expect(store.state.candidates.error).toContain("PARSE ERROR");
      expect(store.state.candidates.loading).toBeFalsy();
    });
  });
});
