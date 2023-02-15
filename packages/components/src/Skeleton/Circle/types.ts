import { FlexProps } from 'components/Flex';
import { GridBoxProps } from 'components/Grid';

interface SkeletonCircleBoxProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	readonly type?: 'box';
}

interface SkeletonCircleGridBoxProps extends GridBoxProps {
	readonly type: 'grid';
}

export type SkeletonCircleProps = SkeletonCircleBoxProps | SkeletonCircleGridBoxProps;
