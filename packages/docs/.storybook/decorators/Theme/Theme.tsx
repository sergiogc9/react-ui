import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Decorator } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import theme, { reset, ReactUIProvider } from '@sergiogc9/react-ui-theme';

const GlobalStyle = createGlobalStyle`
	${reset}
	body {
		margin: 0;
	}
	// These styles are only applied to playground stories to center them
	.sbdocs .docs-story > div {
		align-content: flex-start;
		justify-content: flex-start;
	}
`;

const ThemeDecorator: Decorator = story => {
	const dark = useDarkMode();

	return (
		<ReactUIProvider theme={{ ...theme, mode: dark ? 'dark' : 'light' }}>
			<GlobalStyle />
			{story()}
		</ReactUIProvider>
	);
};

export default ThemeDecorator;
