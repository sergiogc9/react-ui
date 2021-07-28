import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import AlertIcon, { AlertIconProps } from './Icon';
import AlertText, { AlertTextProps } from './Text';
import Alert from './Alert';
import { AlertProps } from './types';

export type { AlertProps, AlertTextProps, AlertIconProps };
export default createNameSpacedComponent(Alert, {
	Icon: AlertIcon,
	Text: AlertText
});
