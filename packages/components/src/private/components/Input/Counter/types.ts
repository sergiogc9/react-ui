import { ContentProps } from 'components/Content';

export type InputCounterProps = {
	isDisabled?: boolean;
	maxLength: number;
	valueContent?: string;
} & ContentProps;
