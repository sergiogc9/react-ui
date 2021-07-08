import { DefaultTheme } from 'styled-components';
import { get, TLengthStyledSystem } from 'styled-system';

/**
 * Returns the color if found in theme path, otherwise the themePath itself is returned as fallback.
 */
export const getColorFromTheme = (theme: DefaultTheme, themePath: TLengthStyledSystem) => {
	return get(theme.colors, themePath, themePath);
};

const OPACITY_HEX_VALUES: Record<number, string> = {
	0: '00',
	4: '0A',
	8: '14',
	12: '1F',
	16: '29',
	20: '33',
	24: '3D',
	28: '47',
	32: '52',
	36: '5C',
	40: '66',
	44: '70',
	48: '7A',
	52: '85',
	56: '8F',
	60: '99',
	64: 'A3',
	68: 'AD',
	72: 'B8',
	76: 'C2',
	80: 'CC',
	84: 'D6',
	88: 'E0',
	92: 'EB',
	96: 'F5',
	100: 'FF'
};

/**
 * Returns the HEX color from theme with the opacity.
 */
export const getColorFromThemeWithOpacity = (
	theme: DefaultTheme,
	themePath: TLengthStyledSystem,
	opacityPercentage: number
) => {
	const opacityHex = OPACITY_HEX_VALUES[opacityPercentage];
	if (!opacityHex) throw new Error('The opactity value is not valid');
	return `${getColorFromTheme(theme, themePath)}${opacityHex}`;
};
