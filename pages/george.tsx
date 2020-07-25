import React, { useEffect } from 'react';
import Head from 'next/head';
import {
	ColorModeProvider,
	ThemeProvider,
	CSSReset,
	useColorMode,
	Box,
	Heading,
	List,
	ListItem,
} from '@chakra-ui/core';
import customTheme from '../theme';
import { load } from '../lib/analytics';
import { Global, css } from '@emotion/core';
import Image from '../components/Image';

function App(): JSX.Element {
	const { colorMode } = useColorMode();

	useEffect(() => {
		load();
	}, []);

	return (
		<ThemeProvider theme={customTheme}>
			<ColorModeProvider value={colorMode}>
				<Head>
					<title>JUSTICE FOR GEORGE FLOYD</title>
					<meta name="description" content="Justice for George Floyd" />
					<link rel="icon" href="blm.png"></link>
					<script
						dangerouslySetInnerHTML={{
							__html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var t=analytics.methods[e];analytics[t]=analytics.factory(t)}analytics.load=function(e,t){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=t};analytics.SNIPPET_VERSION="4.1.0";}}();`,
						}}
					/>
					<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
				</Head>
				<CSSReset />
				<Global
					styles={css`
						body {
							background-color: black;
						}
						h1,
						h2,
						a {
							color: white;
							font-weight: bold;
						}
						a {
							text-decoration: underline;
						}
						a:hover {
							color: #c53030;
						}
						p,
						span {
							color: white;
						}
					`}
				/>
				<Box m="2em auto" width="95%" maxWidth="800px">
					<Heading as="h1" size="2xl" color="white" textTransform="uppercase" textAlign="center" mb={6}>
						Justice for George Floyd
					</Heading>
					<Image src="george-floyd.jpg" alt="George Floyd" />
					<p>Support the family of George Floyd, as well as Black-owned and Black-led organizations.</p>
					<Heading as="h2" mt={2} mb={2}>
						Donate:
					</Heading>
					<List styleType="none" mb={1}>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/georgefloyd">
								Official George Floyd Memorial Fund
							</a>
						</ListItem>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/george-floyd-bigfloyd">
								George Floyd Fund by Bridgett Floyd
							</a>
						</ListItem>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://minnesotafreedomfund.org/donate">
								Minnesota Freedom Fund
							</a>
						</ListItem>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://www.reclaimtheblock.org/">
								Reclaim the Block
							</a>
						</ListItem>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://www.blackvisionsmn.org/">
								Black Visions Collective
							</a>
						</ListItem>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://www.northstarhealthcollective.org/donate">
								North Star Health Collective
							</a>
						</ListItem>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://secure.actblue.com/donate/freeblackmamas2020">
								National Bail Out
							</a>
						</ListItem>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/the-black-resilience-fund">
								Black Resilience Fund
							</a>
						</ListItem>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/pdx-protest-bail-fund">
								PDX Protest Bail Fund
							</a>
						</ListItem>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://www.dontshootpdx.org/">
								Don&apos;t Shoot PDX
							</a>
						</ListItem>
						<ListItem mb={2}>
							<a target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/i-run-with-maud">
								I Run With Maud
							</a>
						</ListItem>
					</List>
				</Box>
			</ColorModeProvider>
		</ThemeProvider>
	);
}

export default App;
