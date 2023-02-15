import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { SpaceProps } from 'styled-system';

import { IconProps } from '../types';

type FilteredFontAwesomeIconProps = Omit<FontAwesomeIconProps, 'fontSize' | 'fontSizeAdjust' | 'size'>;

export interface IconFontAwesomeProps extends FilteredFontAwesomeIconProps, SpaceProps {
	/**
	 * The size of the icon.
	 */
	readonly aspectSize?: IconProps['aspectSize'];
	/**
	 * The color used in primary layer. Use only with duotone icons.
	 */
	readonly primaryColor?: string;
	/**
	 * The opacity used in primary layer. Use only with duotone icons.
	 */
	readonly primaryOpacity?: number;
	/**
	 * The color used in secondary layer. Use only with duotone icons.
	 */
	readonly secondaryColor?: string;
	/**
	 * The opacity used in secondary layer. Use only with duotone icons.
	 */
	readonly secondaryOpacity?: number;
	/**
	 * The size of the icon.
	 */
	readonly size?: IconProps['size'];
}
