import { ThemeColors } from 'theme/types';
import { ComponentLocales } from 'theme/utils';

type SelectSizes = 's' | 'm' | 'l';
type SelectVariant = 'neutral' | 'primary';
type SelectOptionColors = Record<'default' | 'hover' | 'active' | 'bgHover' | 'bgActive', string>;
export type SelectColors = { option: Record<SelectVariant, SelectOptionColors> };

type SelectLocaleKeys = 'remove_all_btn' | 'save_btn' | 'no_results';
export interface Select extends ComponentLocales<SelectLocaleKeys> {
	colors: ThemeColors<SelectColors>;
	option: {
		height: Record<SelectSizes, string | number>;
	};
}
