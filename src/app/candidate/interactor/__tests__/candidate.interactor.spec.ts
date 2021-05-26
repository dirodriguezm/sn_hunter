import { resetContainer, cid, container, mockSingleton } from "inversify-props";
import { containerBuilder } from "@/shared/container/container";
import { UseCaseInteractor, Callbacks } from "@/shared/generic/interactor";
import { TestActions } from "@/shared/http/__tests__/HttpService.mock";
import { ICandidateRepository } from "../../entity";
import { MockCandidateService } from "../../service/__tests__/candidate.service.mock";

beforeEach(() => {
  resetContainer();
  containerBuilder();
  mockSingleton<ICandidateRepository>(
    cid.CandidateService,
    MockCandidateService
  );
});
describe("CandidateInteractor", () => {
  it("should call success callback if result is ok", async () => {
    const callbacks: Callbacks = {
      respondWithSuccess: jest.fn(),
      respondWithServerError: jest.fn(),
      respondWithClientError: jest.fn(),
      respondWithParseError: jest.fn(),
    };
    container.bind<TestActions>("ActionType").toConstantValue("ok");

    const getCandidates = container.get<UseCaseInteractor>(cid.GetCandidates);

    await getCandidates.execute({}, callbacks);

    expect(callbacks.respondWithSuccess).toHaveBeenCalledTimes(1);
  });
  it("should call server error callback if result has server error", async () => {
    const callbacks: Callbacks = {
      respondWithSuccess: jest.fn(),
      respondWithServerError: jest.fn(),
      respondWithClientError: jest.fn(),
      respondWithParseError: jest.fn(),
    };
    container.bind<TestActions>("ActionType").toConstantValue("serverError");

    const getCandidates = container.get<UseCaseInteractor>(cid.GetCandidates);

    await getCandidates.execute({}, callbacks);

    expect(callbacks.respondWithServerError).toHaveBeenCalledTimes(1);
  });
  it("should call client error callback if result has client error", async () => {
    const callbacks: Callbacks = {
      respondWithSuccess: jest.fn(),
      respondWithServerError: jest.fn(),
      respondWithClientError: jest.fn(),
      respondWithParseError: jest.fn(),
    };
    container.bind<TestActions>("ActionType").toConstantValue("clientError");

    const getCandidates = container.get<UseCaseInteractor>(cid.GetCandidates);

    await getCandidates.execute({}, callbacks);

    expect(callbacks.respondWithClientError).toHaveBeenCalledTimes(1);
  });
  it("should call parse error callback if result has parse error", async () => {
    const callbacks: Callbacks = {
      respondWithSuccess: jest.fn(),
      respondWithServerError: jest.fn(),
      respondWithClientError: jest.fn(),
      respondWithParseError: jest.fn(),
    };
    container.bind<TestActions>("ActionType").toConstantValue("parseError");

    const getCandidates = container.get<UseCaseInteractor>(cid.GetCandidates);

    await getCandidates.execute({}, callbacks);

    expect(callbacks.respondWithParseError).toHaveBeenCalledTimes(1);
  });
});
