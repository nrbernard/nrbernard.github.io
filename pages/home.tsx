import React from 'react';
import RouteLink from 'next/link';
import { Box, Flex, Heading, IconButton, Image, Link, Text, useColorMode } from '@chakra-ui/core';
import { RiLinkedinLine, RiMailLine, RiGithubLine, RiMoonLine, RiSunLine } from 'react-icons/ri';

function HomePage(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box m="0 auto" width="95%" maxWidth="800px">
			<Flex as="header" align="center" justify="space-between" p="1em 0">
				<Heading>
					<RouteLink href="/">
						<Link _hover={{ textDecoration: 'none' }}>NB</Link>
					</RouteLink>
				</Heading>
				<IconButton
					variant="link"
					variantColor="independence"
					aria-label="theme"
					icon={colorMode === 'light' ? RiMoonLine : RiSunLine}
					onClick={toggleColorMode}
				/>
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
			<Box as="footer">
				<Flex align="center" justify="right">
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
			</Box>
		</Box>
	);
}

export default HomePage;
