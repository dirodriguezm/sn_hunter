import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import Vue from "vue";
import Vuetify from "vuetify";
import { containerBuilder } from "@/shared/container";
import { container, cid, resetContainer, mockSingleton } from "inversify-props";
import { IStoreCreator } from "@/store/StoreCreator";
import CandidatesComponent from "./CandidatesComponent";
import { mockCandidatesData } from "@/app/candidate/entity/__tests__/candidate.mock";
import { IDetectionRepository } from "@/app/detection/entity";
import { MockDetectionService } from "@/app/detection/service/__tests__/detection.service.mock";
import flushPromises from "flush-promises";
import { TestActions } from "@/shared/http/__tests__/HttpService.mock";
const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe("CandidatesComponent", () => {
  let vuetify: Vuetify;
  containerBuilder();
  const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
  const store = storeCreator.create();

  beforeEach(() => {
    resetContainer();
    containerBuilder();
    mockSingleton<IDetectionRepository>(
      cid.DetectionService,
      MockDetectionService
    );
    vuetify = new Vuetify();
  });

  it("should warn that no candidates were passed", () => {
    jest.spyOn(console, "error");
    mount(CandidatesComponent, {
      localVue,
      vuetify,
      store,
    });
    expect(console.error).toHaveBeenCalled();
  });

  it("should render list of passed candidates", () => {
    container.bind<TestActions>("ActionType").toConstantValue("ok");
    const wrapper = mount(CandidatesComponent, {
      localVue,
      vuetify,
      store,
      propsData: { candidates: mockCandidatesData },
    });
    const trList = wrapper.findAll("tr");
    for (let i = 1; i < trList.length; i++) {
      const tdList = trList.at(i).findAll("td");
      expect(tdList.at(0).text()).toEqual(mockCandidatesData[i - 1].oid);
    }
  });

  it("should trigger selectCandidate on click", async () => {
    container.bind<TestActions>("ActionType").toConstantValue("ok");
    const wrapper = mount(CandidatesComponent, {
      localVue,
      vuetify,
      store,
      propsData: { candidates: mockCandidatesData },
    });
    await flushPromises();
    expect(store.state.candidate.candidate).toBe(mockCandidatesData[0]);
    const trList = wrapper.findAll("tr");
    trList.at(2).trigger("click");
    await flushPromises();
    expect(store.state.candidate.candidate).toEqual(mockCandidatesData[1]);
  });

  it("should trigger selectCandidate on key press", async () => {
    container.bind<TestActions>("ActionType").toConstantValue("ok");
    const wrapper = mount(CandidatesComponent, {
      localVue,
      vuetify,
      store,
      propsData: { candidates: mockCandidatesData },
      attachTo: document.body,
    });
    await flushPromises();
    wrapper.trigger("keydown", { key: "ArrowDown" });
    await flushPromises();
    expect(store.state.candidate.candidate).toStrictEqual(
      mockCandidatesData[1]
    );
  });
});
