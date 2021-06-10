import { IStoreModule } from '@/store/store.types';
import { state as detectionsState } from "./detections/state"
import { actions as detectionsActions } from "./detections/actions"
import { mutations as detectionsMutations } from "./detections/mutations"
import { getters as detectionsGetters } from "./detections/getters"
import { state as detectionState } from "./detection/state"
import { actions as detectionActions } from "./detection/actions"
import { mutations as detectionMutations } from "./detection/mutations"
import { getters as detectionGetters } from "./detection/getters"


export const DetectionsModule: IStoreModule = {
    namespaced: true,
    state: detectionsState,
    actions: detectionsActions,
    mutations: detectionsMutations,
    getters: detectionsGetters
}

export const DetectionModule: IStoreModule = {
    namespaced: true,
    state: detectionState,
    actions: detectionActions,
    mutations: detectionMutations,
    getters: detectionGetters
}
