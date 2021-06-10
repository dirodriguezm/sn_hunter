import { containerBuilder } from "@/shared/container";
import Vuetify from "vuetify";
import Vuex from "vuex";
import Vue from "vue";
import { mockClassifiers } from "@/app/classifier/entity/__tests__/classifier.mock";
import { CandidateSearchFilters } from "@/app/candidate/service/candidate.service.types";
import { createLocalVue, mount } from "@vue/test-utils";
import { resetContainer, container, cid, mockSingleton } from "inversify-props";
import FilterComponent from "./FilterComponent";
import { IStoreCreator } from "@/store/StoreCreator";
import { mockCandidatesData } from "@/app/candidate/entity/__tests__/candidate.mock";
import { ICandidateRepository } from "@/app/candidate/entity";
import { MockCandidateService } from "@/app/candidate/service/__tests__/candidate.service.mock";
import { TestActions } from "@/shared/http/__tests__/HttpService.mock";
import flushPromises from "flush-promises";
import { IClassifierRepository } from "@/app/classifier/entity";
import { MockClassifierService } from "@/app/classifier/service/__tests__/classifier.service.mock";
import { IDetectionRepository } from "@/app/detection/entity";
import { MockDetectionService } from "@/app/detection/service/__tests__/detection.service.mock";

const mockData = {
  filter: {
    classifier: mockClassifiers[0].classifier_name,
    class: null,
    firstmjd: [],
    page: 1,
  } as CandidateSearchFilters,
  datePickerMenu: false,
};

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);

describe("FilterComponent", () => {
  let vuetify: Vuetify;

  containerBuilder();
  const storeCreator = container.get<IStoreCreator>(cid.StoreCreator);
  const store = storeCreator.create();

  beforeEach(() => {
    resetContainer();
    containerBuilder();
    mockSingleton<ICandidateRepository>(
      cid.CandidateService,
      MockCandidateService
    );
    mockSingleton<IClassifierRepository>(
      cid.ClassifierService,
      MockClassifierService
    );
    mockSingleton<IDetectionRepository>(
      cid.DetectionService,
      MockDetectionService
    );
    vuetify = new Vuetify();
  });

  it("should show the classifiers in the respective v-select", async () => {
    container.bind<TestActions>("ActionType").toConstantValue("ok");
    const wrapper = mount(FilterComponent, {
      localVue,
      vuetify,
      store,
      data() {
        return mockData;
      },
    });

    await flushPromises();

    const vSelectClassifier = wrapper.findAll(".v-select").at(0);
    expect(vSelectClassifier.props("items")).toStrictEqual(mockClassifiers);
  });

  it("should show the classes in the respective v-select, according to selected classifier", async () => {
    container.bind<TestActions>("ActionType").toConstantValue("ok");
    const wrapper = mount(FilterComponent, {
      localVue,
      vuetify,
      store,
      data() {
        return mockData;
      },
    });

    await flushPromises();

    const vSelectClassifier = wrapper.findAll(".v-select").at(1);
    expect(vSelectClassifier.props("items")).toStrictEqual(
      mockClassifiers[0].classes
    );
  });

  it("should fetch candidates when the search button is pressed", async () => {
    container.bind<TestActions>("ActionType").toConstantValue("ok");
    const wrapper = mount(FilterComponent, {
      localVue,
      vuetify,
      store,
      data() {
        return mockData;
      },
    });
    await flushPromises();

    const searchButton = wrapper.find(".v-btn");
    searchButton.trigger("click");
    expect(store.state.candidates.candidates).toStrictEqual(mockCandidatesData);
    expect(store.state.candidate.candidate).toStrictEqual(
      mockCandidatesData[0]
    );
  });
  it("should fetch candidates when mounted", async () => {
    container.bind<TestActions>("ActionType").toConstantValue("ok");
    mount(FilterComponent, {
      localVue,
      vuetify,
      store,
      data() {
        return mockData;
      },
    });
    await flushPromises();
    expect(store.state.candidates.candidates).toStrictEqual(mockCandidatesData);
    expect(store.state.candidate.candidate).toStrictEqual(
      mockCandidatesData[0]
    );
  });
});
