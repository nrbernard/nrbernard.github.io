import React, { useEffect } from 'react';
import Head from 'next/head';
import { ColorModeProvider, ThemeProvider, CSSReset, useColorMode } from '@chakra-ui/core';
import Home from './home';
import customTheme from '../theme';
import { load } from '../lib/analytics';

function App(): JSX.Element {
	const { colorMode } = useColorMode();

	useEffect(() => {
		load();
	}, []);

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
					<script
						dangerouslySetInnerHTML={{
							__html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var t=analytics.methods[e];analytics[t]=analytics.factory(t)}analytics.load=function(e,t){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=t};analytics.SNIPPET_VERSION="4.1.0";}}();`,
						}}
					/>
					<link href="https://fonts.googleapis.com/css2?family=Galdeano&display=swap" rel="stylesheet"></link>
				</Head>
				<CSSReset />
				<Home />
			</ColorModeProvider>
		</ThemeProvider>
	);
}

export default App;
