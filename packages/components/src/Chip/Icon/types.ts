import { IconProps, IconFontAwesomeProps } from 'components/Icon';
import { ChipProps } from '../types';

export type ChipIconProps = IconProps;
export type StyledChipIconProps = ChipIconProps & {
	readonly variant?: ChipProps['variant'];
};

export type ChipIconFontAwesomeProps = Omit<IconFontAwesomeProps, 'aspectSize'>;
export type StyledChipIconFontAwesomeProps = ChipIconFontAwesomeProps & {
	readonly variant?: ChipProps['variant'];
};
