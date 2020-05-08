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
