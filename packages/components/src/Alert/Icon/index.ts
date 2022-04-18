import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import { AlertIcon, AlertIconFontAwesome } from './AlertIcon';

export { AlertIconProps, AlertIconFontAwesomeProps } from './types';
export default createNameSpacedComponent(AlertIcon, {
	FontAwesome: AlertIconFontAwesome
});
