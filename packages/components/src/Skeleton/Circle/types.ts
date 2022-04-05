import { FlexProps } from 'components/Flex';
import { GridBoxProps } from 'components/Grid';

type SkeletonCircleBoxProps = {
	readonly type?: 'box';
} & FlexProps;

type SkeletonCircleGridBoxProps = {
	readonly type: 'grid';
} & GridBoxProps;

export type SkeletonCircleProps = SkeletonCircleBoxProps | SkeletonCircleGridBoxProps;
