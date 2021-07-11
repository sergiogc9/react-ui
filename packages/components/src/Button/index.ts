import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import Button from './Button';
import ButtonIcon from './Icon';
import ButtonText from './Text';

export { ButtonProps } from './types';
export { ButtonIconProps } from './Icon/types';
export { ButtonTextProps } from './Text/types';
export default createNameSpacedComponent(Button, {
	Icon: ButtonIcon,
	Text: ButtonText
});
