import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import ButtonIcon from './ButtonIcon';
import ButtonIconFontAwesome from './ButtonIconFontAwesome';

export type { ButtonIconProps, ButtonIconFontAwesomeProps } from './types';

export default createNameSpacedComponent(ButtonIcon, {
	FontAwesome: ButtonIconFontAwesome
});
