import { Detection } from '@/Classes/Detection/Entity/detection.types';

export const state = () => ({
	loading: false,
	detections: [] as Detection[],
	error: null as string | null
});

export type DetectionState = ReturnType<typeof state>;
export default state;