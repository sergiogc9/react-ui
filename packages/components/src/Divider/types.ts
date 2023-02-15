import { FlexProps } from 'components/Flex';

export interface DividerProps extends FlexProps<React.HTMLAttributes<HTMLSpanElement>, HTMLDivElement> {
	readonly isVertical?: boolean;
}
