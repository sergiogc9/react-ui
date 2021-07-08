import { createNameSpacedComponent } from 'components/private/utils/components';
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
