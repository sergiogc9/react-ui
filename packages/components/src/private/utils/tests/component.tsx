import React, { FunctionComponent } from 'react';
import theme, { reset } from '@sergiogc9/react-ui-theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	${reset}
`;

const ThemeWrapper: FunctionComponent = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{children}
	</ThemeProvider>
);

export const withTheme = (Component: JSX.Element) => <ThemeWrapper>{Component}</ThemeWrapper>;

export const useAnimationsInTests = () => {
	(window as any).useAnimationsInTests = true;
};
