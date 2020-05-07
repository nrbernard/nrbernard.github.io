import React from 'react';
import Home from '../pages/home';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import customTheme from '../theme';

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

	it('toggles theme when the theme toggle button is clicked', () => {
		render(
			<ThemeProvider theme={customTheme}>
				<ColorModeProvider value="light">
					<Home />
				</ColorModeProvider>
			</ThemeProvider>,
		);

		const themeButton = screen.getByRole('button', { name: 'light-theme' });
		expect(themeButton).toBeInTheDocument();

		fireEvent.click(themeButton);

		expect(screen.getByRole('button', { name: 'dark-theme' })).toBeInTheDocument();
	});
});
