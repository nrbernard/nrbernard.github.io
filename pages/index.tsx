import React from 'react';
import Head from 'next/head';
import RouteLink from 'next/link';
import { Box, Flex, Heading, IconButton, Image, Link, Text, theme, ThemeProvider, CSSReset } from '@chakra-ui/core';
import { RiLinkedinLine, RiMailLine, RiGithubLine } from 'react-icons/ri';

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
			<Box m="0 auto" width="95%" maxWidth="800px">
				<Flex as="header" align="center" justify="space-between" p="1em 0">
					<Heading>
						<RouteLink href="/">NB</RouteLink>
					</Heading>
					<Flex as="header" align="center">
						<Link href="https://github.com/nrbernard/" isExternal>
							<IconButton variant="link" variantColor="independence" aria-label="LinkedIn" icon={RiGithubLine} />
						</Link>
						<Link href="https://www.linkedin.com/in/nickbernard/" isExternal>
							<IconButton variant="link" variantColor="independence" aria-label="LinkedIn" icon={RiLinkedinLine} />
						</Link>
						<Link href="mailto:nrobertbernard@gmail.com" isExternal>
							<IconButton variant="link" variantColor="independence" aria-label="Email" icon={RiMailLine} />
						</Link>
					</Flex>
				</Flex>
				<Box m="0 0 1em 0" position="relative">
					<Heading position="absolute" top="1.5em" left="1.5em" color="almond.100" size="xl">
						Oh, hello there
					</Heading>
					<Image
						src="./fishing.jpeg"
						alt="Nick Bernard fly fishing on the Deschutes River near Maupin, OR"
						width="100%"
					/>
				</Box>
				<Box>
					<Heading as="h1" size="2xl" color="independence.100">
						I&apos;m Nick Bernard
					</Heading>
					<Text>I write software for the web in Portland, OR.</Text>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default HomePage;
