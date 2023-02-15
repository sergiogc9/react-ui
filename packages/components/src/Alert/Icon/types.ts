import { IconProps, IconFontAwesomeProps } from 'components/Icon';

import { AlertProps } from '../types';

export interface AlertIconProps extends Partial<IconProps> {}
export interface StyledAlertIconProps extends AlertIconProps {
	status: AlertProps['status'];
}

export interface AlertIconFontAwesomeProps extends IconFontAwesomeProps {}

interface StyledProps {
	status: AlertProps['status'];
}
export interface StyledAlertIconFontAwesomeProps extends AlertIconFontAwesomeProps, StyledProps {}
