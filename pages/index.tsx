import React from 'react';
import Head from 'next/head';
import { Box, Heading, IconButton, Image, Link, Text, theme, ThemeProvider, CSSReset } from '@chakra-ui/core';

const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		brand: {
			primary: '#E6D2B8',
			secondary: '#252107',
		},
	},
	fonts: {
		...theme.fonts,
		heading: '"Galdeano", sans-serif',
	},
};

function HomePage(): JSX.Element {
	return (
		<ThemeProvider theme={customTheme}>
			<CSSReset />
			<Head>
				<title>Nick Bernard - Software Engineer in Portland, OR</title>
				<meta name="description" content="Nick Bernard is a software engineer in Portland, OR." />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍔</text></svg>"
				></link>
				<link href="https://fonts.googleapis.com/css2?family=Galdeano&display=swap" rel="stylesheet"></link>
			</Head>
			<Box m="2em auto" width="95%" maxWidth="800px">
				<Box m="0 0 1em 0" position="relative">
					<Heading position="absolute" top="1em" left="1em" color="brand.primary" size="2xl">
						Oh, hello there
					</Heading>
					<Image
						src="./fishing.jpeg"
						alt="Nick Bernard fly fishing on the Deschutes River near Maupin, OR"
						width="100%"
					/>
				</Box>
				<Box>
					<Heading as="h1" color="brand.secondary">
						I&apos;m Nick Bernard
					</Heading>
					<Text>I write software for the web in Portland, OR.</Text>
					<Link href="mailto:nrobertbernard@gmail.com" isExternal color="blue.600">
						<IconButton aria-label="email" icon="email" variant="outline" />
					</Link>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default HomePage;
