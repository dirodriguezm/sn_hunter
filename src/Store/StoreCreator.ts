import { IRootState } from '@/Store/store.types'
import { Store } from "vuex";

export interface IStoreCreator {
	create(): Store<IRootState>
}

export type StoreModule = {
	modules: any
}

export class StoreCreator implements IStoreCreator {
	private modules: StoreModule;

	constructor(modules: StoreModule) {
		this.modules = modules;
	}

	create(): Store<IRootState> {
		return new Store(this.modules)
	}
}