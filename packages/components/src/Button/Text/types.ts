import { TextProps } from 'components/Text/types';
import { ButtonProps } from '../types';

type Props = Omit<TextProps, 'aspectSize'>;

export type ButtonTextProps = Props;

export type StyledButtonTextProps = Props & Pick<ButtonProps, 'aspectSize' | 'isDisabled' | 'variant'>;
