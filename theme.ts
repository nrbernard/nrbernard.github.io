import { theme } from '@chakra-ui/core';

export default {
	...theme,
	colors: {
		...theme.colors,
		dark: {
			background: theme.colors.red[300],
			heading: theme.colors.gray[800],
			text: theme.colors.blue[600],
		},
		light: {
			background: theme.colors.orange[100],
			heading: theme.colors.gray[700],
			text: theme.colors.orange[500],
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
