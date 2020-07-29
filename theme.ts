import { theme } from '@chakra-ui/core';

export default {
	...theme,
	colors: {
		...theme.colors,
		dark: {
			background: theme.colors.gray[700],
			heading: theme.colors.gray[300],
			text: theme.colors.yellow[100],
		},
		light: {
			background: theme.colors.orange[100],
			heading: theme.colors.gray[700],
			text: theme.colors.orange[500],
		},
		lightYellow: {
			background: theme.colors.yellow[200],
			heading: theme.colors.gray[800],
			text: theme.colors.green[600],
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
