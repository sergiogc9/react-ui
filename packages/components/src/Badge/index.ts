import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import Badge from './Badge';
import BadgeStatus from './Status';
import BadgeCounter from './Counter';

import { BadgeCounterProps } from './Counter/types';
import { BadgeStatusProps } from './Status/types';

const NamespacedBadge = createNameSpacedComponent(Badge, {
	Counter: BadgeCounter,
	Status: BadgeStatus
});

NamespacedBadge.displayName = 'Badge';
BadgeCounter.displayName = 'Badge.Counter';
BadgeStatus.displayName = 'Badge.Status';

export type { BadgeCounterProps, BadgeStatusProps };
export default NamespacedBadge;
