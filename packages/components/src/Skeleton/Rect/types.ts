import { FlexProps } from 'components/Flex';
import { GridBoxProps } from 'components/Grid';

type SkeletonRectBoxProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	readonly type?: 'box';
};

interface SkeletonRectGridBoxProps extends GridBoxProps {
	readonly type: 'grid';
}

export type SkeletonRectProps = SkeletonRectBoxProps | SkeletonRectGridBoxProps;
