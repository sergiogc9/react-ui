import { BoxProps } from 'components/Box';
import { GridBoxProps } from 'components/Grid';

type SkeletonRectBoxProps = {
	readonly type?: 'box';
} & BoxProps;

type SkeletonRectGridBoxProps = {
	readonly type: 'grid';
} & GridBoxProps;

export type SkeletonRectProps = SkeletonRectBoxProps | SkeletonRectGridBoxProps;
