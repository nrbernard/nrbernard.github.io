import { theme } from '@chakra-ui/core';

export default {
	...theme,
	colors: {
		...theme.colors,
		body: '#FFFFFF',
		heading: '#FFFFFF',
		almond: {
			100: '#E6D2B9',
		},
		independence: {
			100: '#3B4C68',
		},
	},
	fonts: {
		...theme.fonts,
		heading: '"Roboto", sans-serif',
	},
};
