import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import SkeletonCircle, { SkeletonCircleProps } from './Circle';
import SkeletonRect, { SkeletonRectProps } from './Rect';
import Skeleton from './Skeleton';
import { SkeletonProps } from './types';

export type { SkeletonProps, SkeletonCircleProps, SkeletonRectProps };
export default createNameSpacedComponent(Skeleton, {
	Circle: SkeletonCircle,
	Rect: SkeletonRect
});
