import { BoxProps } from 'components/Box';
import { GridBoxProps } from 'components/Grid';

type SkeletonCircleBoxProps = {
	readonly type?: 'box';
} & BoxProps;

type SkeletonCircleGridBoxProps = {
	readonly type: 'grid';
} & GridBoxProps;

export type SkeletonCircleProps = SkeletonCircleBoxProps | SkeletonCircleGridBoxProps;
