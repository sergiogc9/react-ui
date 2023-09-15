import { FlexProps } from 'components/Flex';
import { GridBoxProps } from 'components/Grid';

type SkeletonCircleBoxProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	readonly type?: 'box';
};

interface SkeletonCircleGridBoxProps extends GridBoxProps {
	readonly type: 'grid';
}

export type SkeletonCircleProps = SkeletonCircleBoxProps | SkeletonCircleGridBoxProps;
