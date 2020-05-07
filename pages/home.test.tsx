import React from 'react';
import Home from './home';
import { render } from '@testing-library/react';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import customTheme from './theme';

describe('Home', () => {
	it('renders the header', () => {
		const { getByText } = render(
			<ThemeProvider theme={customTheme}>
				<ColorModeProvider value="light">
					<Home />
				</ColorModeProvider>
			</ThemeProvider>,
		);

		expect(getByText("I'm Nick Bernard")).toBeInTheDocument();
	});
});
