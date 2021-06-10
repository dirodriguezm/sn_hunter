import axios, { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import { inject } from "inversify-props";
import { IAxiosCreator } from "../HttpService";
import { mockCandidatesData } from "@/app/candidate/entity/__tests__/candidate.mock";
import { mockClassifiersData } from "@/app/classifier/entity";
import { mockDetectionsData } from "@/app/detection/entity/__tests__/detection.mock";

export type TestActions =
  | "ok"
  | "error"
  | "timeout"
  | "parseError"
  | "clientError"
  | "serverError";

export class MockAxiosCreator implements IAxiosCreator {
  mock!: MockAdapter;
  actionType: TestActions;
  constructor(@inject("ActionType") actionType: TestActions) {
    this.actionType = actionType;
  }

  createAxiosInstance(_baseUrl: string): AxiosInstance {
    const instance = axios.create({ baseURL: _baseUrl });
    this.mock = new MockAdapter(instance);
    if (this.actionType === "ok") this.setMockActions();
    if (this.actionType === "error") this.setErrorActions();
    if (this.actionType === "timeout") this.setTimeoutActions();
    return instance;
  }

  setMockActions() {
    this.mock.onGet("/objects").reply((_config: any) => {
      const response = {
        total: 50001,
        page: 1,
        next: 2,
        has_next: true,
        prev: null,
        has_prev: false,
        items: mockCandidatesData,
      };
      return [200, JSON.stringify(response)];
    });
    this.mock.onGet("/classifiers").reply((_config: any) => {
      const response = mockClassifiersData;
      return [200, JSON.stringify(response)];
    });
    this.mock.onGet(/\/objects\/\w+\/detections/).reply((_config: any) => {
      const response = mockDetectionsData;
      return [200, JSON.stringify(response)];
    });
  }
  setErrorActions() {
    this.mock.onGet("/objects").networkError();
    this.mock.onGet("/classifiers").networkError();
    this.mock.onGet("//objects/w+/detections/").networkError();
  }
  setTimeoutActions() {
    this.mock.onGet("/objects").timeout();
    this.mock.onGet("/classifiers").timeout();
    this.mock.onGet("//objects/w+/detections/").timeout();
  }
}
