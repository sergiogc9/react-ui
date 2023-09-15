import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	readonly isVertical?: boolean;
};

type DividerProps<T extends React.ElementType = 'span'> = ExtendedFlexProps<Props, T>;

type DividerComponent = ExtendedFlexComponent<Props>;

export { DividerComponent, DividerProps };
