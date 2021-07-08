import { createNameSpacedComponent } from 'components/private/utils/components';
import TooltipContent from './Content';
import { TooltipContentProps } from './Content/types';
import TooltipTrigger from './Trigger';
import { TooltipTriggerProps } from './Trigger/types';
import Tooltip from './Tooltip';
import { TooltipProps } from './types';

export { TooltipProps, TooltipTriggerProps, TooltipContentProps };
export default createNameSpacedComponent(Tooltip, {
	Content: TooltipContent,
	Trigger: TooltipTrigger
});
