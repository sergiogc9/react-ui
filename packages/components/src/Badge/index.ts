import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import Badge from './Badge';
import Status from './Status';
import Counter from './Counter';

export { BadgeCounterProps } from './Counter/types';
export { BadgeStatusProps } from './Status/types';

export default createNameSpacedComponent(Badge, {
	Status,
	Counter
});
