import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import Button from './Button';
import { ButtonProps } from './types';
import ButtonIcon from './Icon';
import { ButtonIconProps } from './Icon/types';
import ButtonText from './Text';
import { ButtonTextProps } from './Text/types';

const NamespacedButton = createNameSpacedComponent(Button, {
	Icon: ButtonIcon,
	Text: ButtonText
});

NamespacedButton.displayName = 'Button';
ButtonIcon.displayName = 'Button.Icon';
ButtonIcon.FontAwesome.displayName = 'Button.Icon.FontAwesome';
ButtonText.displayName = 'Button.Text';

export type { ButtonProps, ButtonIconProps, ButtonTextProps };
export default NamespacedButton;
