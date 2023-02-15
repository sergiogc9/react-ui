import { ButtonProps } from 'components/Button';

export interface ButtonContextData {
	readonly aspectSize: NonNullable<ButtonProps['aspectSize']>;
	readonly isDisabled: NonNullable<ButtonProps['isDisabled']>;
	readonly variant: NonNullable<ButtonProps['variant']>;
}
