import React, { useEffect } from 'react';
import Head from 'next/head';
import { ColorModeProvider, ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from '../theme';
import { load } from '../lib/analytics';
import { Global, css } from '@emotion/core';
import App from '../components/App';

export default function Index(): JSX.Element {
	useEffect(() => {
		load();
	}, []);

	return (
		<ThemeProvider theme={customTheme}>
			<ColorModeProvider>
				<Head>
					<title>Say Their Names</title>
					<meta
						name="description"
						content="Justice for George Floyd. Justice for Breonna Taylor. Justice for Ahmaud Arbery."
					/>
					<link rel="icon" href="blm.png"></link>
					<script
						dangerouslySetInnerHTML={{
							__html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var t=analytics.methods[e];analytics[t]=analytics.factory(t)}analytics.load=function(e,t){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=t};analytics.SNIPPET_VERSION="4.1.0";}}();`,
						}}
					/>
					<link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet"></link>
				</Head>
				<CSSReset />
				<Global
					styles={css`
						body,
						#__next,
						.main {
							min-height: 100vh;
						}
					`}
				/>
				<App />
			</ColorModeProvider>
		</ThemeProvider>
	);
}
