import { IconProps, IconFontAwesomeProps } from 'components/Icon';

import { ButtonProps } from '../types';

export type ButtonIconProps = Omit<IconProps, 'aspectSize'>;
export type ButtonIconFontAwesomeProps = Omit<IconFontAwesomeProps, 'aspectSize'>;

export type StyledButtonIconProps = ButtonIconProps & Pick<ButtonProps, 'aspectSize'>;
export type StyledButtonIconFontAwesomeProps = ButtonIconFontAwesomeProps & Pick<ButtonProps, 'aspectSize'>;
