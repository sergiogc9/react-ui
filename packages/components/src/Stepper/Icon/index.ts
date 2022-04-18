import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import { StepperIcon, StepperIconFontAwesome } from './StepperIcon';

export { StepperIconProps, StepperIconFontAwesomeProps } from './types';
export default createNameSpacedComponent(StepperIcon, {
	FontAwesome: StepperIconFontAwesome
});
