import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import PopoverContent from './Content';
import { PopoverContentProps } from './Content/types';
import PopoverTrigger from './Trigger';
import { PopoverTriggerProps } from './Trigger/types';
import PopoverWrapper from './Wrapper';
import { PopoverWrapperProps } from './Wrapper/types';
import Popover from './Popover';
import { PopoverProps } from './types';

export { PopoverProps, PopoverContentProps, PopoverTriggerProps, PopoverWrapperProps };
const FinalPopover: React.FC<PopoverProps> & {
	Content: React.FC<PopoverContentProps>;
	Trigger: React.FC<PopoverTriggerProps>;
	Wrapper: React.FC<PopoverWrapperProps>;
} = createNameSpacedComponent(Popover, {
	Content: PopoverContent,
	Trigger: PopoverTrigger,
	Wrapper: PopoverWrapper
});

export default FinalPopover;
