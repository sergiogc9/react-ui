import { IconProps, IconFontAwesomeProps } from 'components/Icon';
import { ChipProps } from '../types';

export interface ChipIconProps extends IconProps {}
export interface StyledChipIconProps extends ChipIconProps {
	readonly variant?: ChipProps['variant'];
}

export interface ChipIconFontAwesomeProps extends Omit<IconFontAwesomeProps, 'aspectSize'> {}
export interface StyledChipIconFontAwesomeProps extends ChipIconFontAwesomeProps {
	readonly variant?: ChipProps['variant'];
}
