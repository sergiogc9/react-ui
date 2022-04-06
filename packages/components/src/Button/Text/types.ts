import { ButtonProps } from 'components/Button/types';
import { TextProps } from 'components/Text/types';

type Props = Omit<TextProps, 'aspectSize'> & {
	readonly aspectSize?: ButtonProps['aspectSize'];
	readonly isDisabled?: ButtonProps['isDisabled'];
	readonly variant?: ButtonProps['variant'];
};

export type ButtonTextProps = Props & Omit<TextProps, 'aspectSize'>;
