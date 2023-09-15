import { ButtonProps } from '../types';
import { ExtendedTextComponent, ExtendedTextProps } from 'components/types';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

type ButtonTextProps<T extends React.ElementType = 'span'> = ExtendedTextProps<Props, T, ['aspectSize']>;

type ButtonTextComponent = ExtendedTextComponent<Props, ['aspectSize']>;

type StyledButtonTextProps<T extends React.ElementType = 'span'> = ButtonTextProps<T> &
	Pick<ButtonProps, 'aspectSize' | 'isDisabled' | 'variant'>;

export { ButtonTextComponent, ButtonTextProps, StyledButtonTextProps };
