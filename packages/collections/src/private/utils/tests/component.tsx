import React, { FunctionComponent } from 'react';
import theme, { ReactUIProvider, reset } from '@sergiogc9/react-ui-theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	${reset}
`;

const ThemeWrapper: FunctionComponent = ({ children }) => (
	<ReactUIProvider theme={theme}>
		<GlobalStyle />
		{children}
	</ReactUIProvider>
);

export const withTheme = (Component: JSX.Element) => <ThemeWrapper>{Component}</ThemeWrapper>;
