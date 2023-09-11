import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import PopoverContent from './Content';
import { PopoverContentProps } from './Content/types';
import PopoverTrigger from './Trigger';
import { PopoverTriggerProps } from './Trigger/types';
import PopoverWrapper from './Wrapper';
import { PopoverWrapperProps } from './Wrapper/types';
import Popover from './Popover';
import { PopoverProps } from './types';

const NamespacedPopover = createNameSpacedComponent(Popover, {
	Content: PopoverContent,
	Trigger: PopoverTrigger,
	Wrapper: PopoverWrapper
});

NamespacedPopover.displayName = 'Popover';
PopoverContent.displayName = 'Popover.Content';
PopoverTrigger.displayName = 'Popover.Trigger';
PopoverWrapper.displayName = 'Popover.Wrapper';

export type { PopoverProps, PopoverContentProps, PopoverTriggerProps, PopoverWrapperProps };
export default NamespacedPopover;
