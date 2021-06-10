import { DetectionData } from '../../entity';

export const state = () => ({
	loading: false,
	detections: [] as DetectionData[],
	error: null as string | null
});

export type DetectionsState = ReturnType<typeof state>;
