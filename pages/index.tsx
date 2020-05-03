import React from 'react';
import Head from 'next/head';
import { ColorModeProvider, theme, ThemeProvider, CSSReset, useColorMode } from '@chakra-ui/core';
import Home from './home';

const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		body: '#843893',
		almond: {
			100: '#E6D2B9',
		},
		independence: {
			100: '#3B4C68',
		},
	},
	fonts: {
		...theme.fonts,
		heading: '"Galdeano", sans-serif',
	},
};

function App(): JSX.Element {
	const { colorMode } = useColorMode();

	return (
		<ThemeProvider theme={customTheme}>
			<ColorModeProvider value={colorMode}>
				<Head>
					<title>Nick Bernard - Software Engineer in Portland, OR</title>
					<meta name="description" content="Nick Bernard is a software engineer in Portland, OR." />
					<link
						rel="icon"
						href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍔</text></svg>"
					></link>
					<link href="https://fonts.googleapis.com/css2?family=Galdeano&display=swap" rel="stylesheet"></link>
				</Head>
				<CSSReset />
				<Home />
			</ColorModeProvider>
		</ThemeProvider>
	);
}

export default App;
