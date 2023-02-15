import { FlexProps } from 'components/Flex';
import { GridBoxProps } from 'components/Grid';

interface SkeletonRectBoxProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	readonly type?: 'box';
}

interface SkeletonRectGridBoxProps extends GridBoxProps {
	readonly type: 'grid';
}

export type SkeletonRectProps = SkeletonRectBoxProps | SkeletonRectGridBoxProps;
