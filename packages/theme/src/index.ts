import ReactUIProvider, { ReactUIProviderProps, useChangeThemeMode } from './components/ReactUIProvider';
import { getColorByMode, getColorFromTheme, getColorFromThemeWithOpacity, getComponentLocale } from './utils';
import reset from './reset';
import theme from './theme';
import {
	ColorPalette,
	DefaultThemeAttributes,
	ExtractThemeAttributes,
	Theme,
	ThemeColors,
	ThemePalette
} from './types';

export {
	getColorByMode,
	getColorFromTheme,
	getColorFromThemeWithOpacity,
	getComponentLocale,
	ReactUIProvider,
	ReactUIProviderProps,
	reset,
	useChangeThemeMode
};

export type { ColorPalette, DefaultThemeAttributes, ExtractThemeAttributes, Theme, ThemeColors, ThemePalette };

export default theme;
