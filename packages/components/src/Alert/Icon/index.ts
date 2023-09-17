import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import { AlertIcon, AlertIconFontAwesome } from './AlertIcon';

export type { AlertIconProps, AlertIconFontAwesomeProps } from './types';
export default createNameSpacedComponent(AlertIcon, {
	FontAwesome: AlertIconFontAwesome
});
