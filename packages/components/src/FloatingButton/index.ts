import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import FloatingButton from './FloatingButton';
import FloatingButtonIcon from './Icon';
import FloatingButtonText from './Text';

import { FloatingButtonProps } from './types';
import { FloatingButtonIconProps } from './Icon/types';
import { FloatingButtonTextProps } from './Text/types';

const NamespacedFloatingButton = createNameSpacedComponent(FloatingButton, {
	Icon: FloatingButtonIcon,
	Text: FloatingButtonText
});

NamespacedFloatingButton.displayName = 'FloatingButton';
FloatingButtonIcon.displayName = 'FloatingButton.Icon';
FloatingButtonText.displayName = 'FloatingButton.Text';

export type { FloatingButtonProps, FloatingButtonTextProps, FloatingButtonIconProps };
export default NamespacedFloatingButton;
