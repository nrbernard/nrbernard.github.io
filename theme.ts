import { theme } from '@chakra-ui/core';

export default {
	...theme,
	colors: {
		...theme.colors,
		light: {
			background: theme.colors.red[300],
			heading: theme.colors.gray[800],
			text: theme.colors.red[800],
		},
	},
	fonts: {
		...theme.fonts,
		body: 'system-ui, sans-serif',
		heading: "'Yanone Kaffeesatz', sans-serif",
		mono: 'Menlo, monospace',
	},
	fontSizes: {
		...theme.fontSizes,
		'7xl': '84px',
	},
};
