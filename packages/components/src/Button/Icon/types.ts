import { IconProps, IconFontAwesomeProps } from 'components/Icon';

import { ButtonProps } from '../types';

export interface ButtonIconProps extends Omit<IconProps, 'aspectSize'> {}
export interface ButtonIconFontAwesomeProps extends Omit<IconFontAwesomeProps, 'aspectSize'> {}

export interface StyledButtonIconProps extends ButtonIconProps, Pick<ButtonProps, 'aspectSize'> {}
export interface StyledButtonIconFontAwesomeProps extends ButtonIconFontAwesomeProps, Pick<ButtonProps, 'aspectSize'> {}
