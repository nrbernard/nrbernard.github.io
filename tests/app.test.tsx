import React from 'react';
import App from '../components/App';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';
import customTheme from '../theme';

describe('App', () => {
	it('renders the header', () => {
		render(
			<ThemeProvider theme={customTheme}>
				<App />
			</ThemeProvider>,
		);

		expect(screen.getByRole('link', { name: 'George Floyd' })).toBeInTheDocument();
	});
});
