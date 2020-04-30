import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@chakra-ui/core';
import { Box, Heading, IconButton, Link, Text } from '@chakra-ui/core';

function HomePage(): JSX.Element {
	return (
		<ThemeProvider>
			<Head>
				<title>Nick Bernard - Software Engineer in Portland, OR</title>
				<meta name="description" content="Nick Bernard is a software engineer in Portland, OR." />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍔</text></svg>"
				></link>
			</Head>
			<Box>
				<Heading>Hello, I&apos;m Nick Bernard.</Heading>
				<Text>I write software for the web in Portland, OR.</Text>
				<Link href="mailto:nrobertbernard@gmail.com" isExternal color="blue.600">
					<IconButton aria-label="email" icon="email" variant="outline" />
				</Link>
			</Box>
		</ThemeProvider>
	);
}

export default HomePage;
