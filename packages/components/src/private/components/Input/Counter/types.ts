import { TextProps } from 'components/Text';

export interface InputCounterProps extends TextProps<React.HTMLAttributes<HTMLSpanElement>, undefined> {
	isDisabled?: boolean;
	maxLength: number;
	valueContent?: string;
}
