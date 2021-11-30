import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import FloatingButton from './FloatingButton';
import FloatingButtonIcon from './Icon';
import FloatingButtonText from './Text';

export { FloatingButtonProps } from './types';
export { FloatingButtonIconProps } from './Icon/types';
export { FloatingButtonTextProps } from './Text/types';
export default createNameSpacedComponent(FloatingButton, {
	Icon: FloatingButtonIcon,
	Text: FloatingButtonText
});
