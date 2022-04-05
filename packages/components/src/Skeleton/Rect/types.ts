import { FlexProps } from 'components/Flex';
import { GridBoxProps } from 'components/Grid';

type SkeletonRectBoxProps = {
	readonly type?: 'box';
} & FlexProps;

type SkeletonRectGridBoxProps = {
	readonly type: 'grid';
} & GridBoxProps;

export type SkeletonRectProps = SkeletonRectBoxProps | SkeletonRectGridBoxProps;
