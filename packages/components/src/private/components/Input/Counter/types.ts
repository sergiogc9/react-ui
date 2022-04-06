import { TextProps } from 'components/Text';

export type InputCounterProps = {
	isDisabled?: boolean;
	maxLength: number;
	valueContent?: string;
} & TextProps;
