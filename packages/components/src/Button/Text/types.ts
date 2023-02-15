import { TextProps } from 'components/Text/types';
import { ButtonProps } from '../types';

interface Props extends Omit<TextProps, 'aspectSize'> {}

export interface ButtonTextProps extends Props {}

export interface StyledButtonTextProps extends Props, Pick<ButtonProps, 'aspectSize' | 'isDisabled' | 'variant'> {}
