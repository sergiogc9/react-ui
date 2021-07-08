import { DefaultTheme } from 'styled-components';

export type ComponentLocales<K extends string> = {
	locales: Record<DefaultTheme['locale'], Partial<Record<K, string>>>;
};

export const getComponentLocale = (
	theme: DefaultTheme,
	component: keyof DefaultTheme['components'],
	key: string
): string => {
	const themeLocale = theme.locale;

	const componentLocales = theme.components[component] as ComponentLocales<any>;

	if (!componentLocales.locales) return '';

	return componentLocales.locales[themeLocale][key] || componentLocales.locales.en[key] || '';
};
