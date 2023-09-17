import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import { StepperIcon, StepperIconFontAwesome } from './StepperIcon';

export type { StepperIconProps, StepperIconFontAwesomeProps } from './types';
export default createNameSpacedComponent(StepperIcon, {
	FontAwesome: StepperIconFontAwesome
});
