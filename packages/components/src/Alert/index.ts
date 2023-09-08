import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import AlertIcon, { AlertIconProps } from './Icon';
import AlertText, { AlertTextProps } from './Text';
import Alert from './Alert';
import { AlertProps } from './types';

const NamespacedAlert = createNameSpacedComponent(Alert, {
	Icon: AlertIcon,
	Text: AlertText
});

NamespacedAlert.displayName = 'Alert';
AlertIcon.displayName = 'Alert.Icon';
AlertText.displayName = 'Alert.Text';

export type { AlertProps, AlertTextProps, AlertIconProps };
export default NamespacedAlert;
