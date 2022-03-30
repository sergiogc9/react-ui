import ReactUIProvider, { ReactUIProviderProps, useChangeThemeMode } from './components/ReactUIProvider';
import { getColorByMode, getColorFromTheme, getColorFromThemeWithOpacity, getComponentLocale } from './utils';
import reset from './reset';
import theme from './theme';
import { Theme, ThemeColors, ThemePalette } from './types';

export {
	getColorByMode,
	getColorFromTheme,
	getColorFromThemeWithOpacity,
	getComponentLocale,
	ReactUIProvider,
	ReactUIProviderProps,
	reset,
	Theme,
	ThemeColors,
	ThemePalette,
	useChangeThemeMode
};

export default theme;
