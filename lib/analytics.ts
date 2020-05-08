export const load = (): void => {
	const key = process.env.SEGMENT_WRITE_KEY;

	if (key) {
		window.analytics.load(key);
	} else {
		console.error('SEGMENT_WRITE_KEY is undefined');
	}
};

export const page = (name: string): void => {
	window.analytics.page(name);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const track = (name: string, payload: any): void => {
	analytics.track(name, payload);
};
