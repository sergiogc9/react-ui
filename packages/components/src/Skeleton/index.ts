import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import SkeletonCircle, { SkeletonCircleProps } from './Circle';
import SkeletonRect, { SkeletonRectProps } from './Rect';
import Skeleton from './Skeleton';
import { SkeletonProps } from './types';

const NamespacedSkeleton = createNameSpacedComponent(Skeleton, {
	Circle: SkeletonCircle,
	Rect: SkeletonRect
});

NamespacedSkeleton.displayName = 'Skeleton';
SkeletonCircle.displayName = 'Skeleton.Circle';
SkeletonRect.displayName = 'Skeleton.Rect';

export type { SkeletonProps, SkeletonCircleProps, SkeletonRectProps };
export default NamespacedSkeleton;
