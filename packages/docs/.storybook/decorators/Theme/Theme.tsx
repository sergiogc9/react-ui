import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import theme, { reset, ReactUIProvider } from '@sergiogc9/react-ui-theme';

const GlobalStyle = createGlobalStyle`
	${reset}
	body {
		margin: 0;
	}
`;

const ThemeDecorator: DecoratorFn = story => {
	const dark = useDarkMode();

	return (
		<ReactUIProvider theme={{ ...theme, mode: dark ? 'dark' : 'light' }}>
			<GlobalStyle />
			{story()}
		</ReactUIProvider>
	);
};

export default ThemeDecorator;
