import { IRootState } from "@/Store/store.types";
import { Store } from "vuex";
import { Modules } from "./RegisterModules";

export interface StoreCreatorInterface {
  create(): Store<IRootState>;
}

export class StoreCreator implements StoreCreatorInterface {
  private modules: Modules;

  constructor(modules: Modules) {
    this.modules = modules;
  }

  create(): Store<IRootState> {
    return new Store(this.modules);
  }
}
