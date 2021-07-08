import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import theme, { reset } from '@sergiogc9/react-ui-theme';

const GlobalStyle = createGlobalStyle`
	${reset}
	body {
		margin: 0;
	}
`;

const ThemeDecorator: DecoratorFn = story => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{story()}
		</ThemeProvider>
	);
};

export default ThemeDecorator;
