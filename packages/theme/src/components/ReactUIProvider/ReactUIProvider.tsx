import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import get from 'lodash/get';
import merge from 'lodash/merge';
import { useUpdateEffect } from '@sergiogc9/react-hooks';

import { ThemeColorMode, ThemeColors } from 'src/types';

import ReactUIThemeContext from './ThemeContext';
import { ReactUIProviderProps } from './types';
import { ReactUIThemeContextData } from './ThemeContext/types';

const __parseThemeColorsWithMode = <T extends Record<'colors', ThemeColors<any>>>(
	themeSlice: T,
	mode: ThemeColorMode
) => {
	const newTheme = { ...themeSlice };
	const defaultThemePalette = newTheme.colors.modes.light;
	const selectedThemePalette = newTheme.colors.modes[mode] ?? {};

	(newTheme.colors as DefaultTheme['colors']) = {
		...merge({}, defaultThemePalette, selectedThemePalette),
		modes: newTheme.colors.modes
	};

	return newTheme;
};

const ReactUIProvider = ({ children, theme }: ReactUIProviderProps) => {
	const [themeMode, setThemeMode] = React.useState(theme.mode);

	useUpdateEffect(() => {
		setThemeMode(theme.mode);
	}, [theme.mode]);

	const finalTheme = React.useMemo(() => {
		// Parse color palette
		if (!theme.colors?.modes?.light) throw new Error('No colors for light mode found in Theme.');

		const tempTheme = __parseThemeColorsWithMode(theme, themeMode);

		// Parse components colors
		Object.keys(tempTheme.components).forEach(key => {
			const componentTheme = get(tempTheme.components, key);
			if (componentTheme.colors?.modes) {
				if (!componentTheme.colors?.modes?.light)
					throw new Error(`No colors for light mode found in component ${key}.`);

				(tempTheme.components as any)[key] = __parseThemeColorsWithMode(componentTheme, themeMode);
			}
		});

		// Parse collections colors
		Object.keys(tempTheme.collections).forEach(key => {
			const componentTheme = get(tempTheme.collections, key);
			if (componentTheme.colors?.modes) {
				if (!componentTheme.colors?.modes?.light)
					throw new Error(`No colors for light mode found in collection ${key}.`);

				(tempTheme.collections as any)[key] = __parseThemeColorsWithMode(componentTheme, themeMode);
			}
		});

		// Parse theme mode
		(tempTheme.mode as ThemeColorMode) = themeMode;

		return tempTheme;
	}, [theme, themeMode]);

	const onChangeMode = React.useCallback((mode: ThemeColorMode) => {
		setThemeMode(mode);
	}, []);

	const contextData = React.useMemo<ReactUIThemeContextData>(
		() => ({
			onChangeMode
		}),
		[onChangeMode]
	);

	return (
		<ReactUIThemeContext.Provider value={contextData}>
			<ThemeProvider theme={finalTheme}>{children}</ThemeProvider>
		</ReactUIThemeContext.Provider>
	);
};

export default React.memo(ReactUIProvider);
