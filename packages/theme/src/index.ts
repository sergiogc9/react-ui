import ReactUIProvider, { ReactUIProviderProps, useChangeThemeMode } from './components/ReactUIProvider';
import { getColorByMode, getColorFromTheme, getColorFromThemeWithOpacity, getComponentLocale, themeGet } from './utils';
import reset from './reset';
import theme from './theme';
import {
	ColorPalette,
	DefaultThemeAttributes,
	ExtractThemeAttributes,
	Theme,
	ThemeColors,
	ThemePalette,
	TokenPath
} from './types';

export {
	getColorByMode,
	getColorFromTheme,
	getColorFromThemeWithOpacity,
	getComponentLocale,
	ReactUIProvider,
	ReactUIProviderProps,
	reset,
	themeGet,
	useChangeThemeMode
};

export type {
	ColorPalette,
	DefaultThemeAttributes,
	ExtractThemeAttributes,
	Theme,
	ThemeColors,
	ThemePalette,
	TokenPath
};

export default theme;
