import { IconProps, IconFontAwesomeProps } from 'components/Icon';

import { AlertProps } from '../types';

export type AlertIconProps = Partial<IconProps>;
export type StyledAlertIconProps = AlertIconProps & {
	status: AlertProps['status'];
};

export type AlertIconFontAwesomeProps = IconFontAwesomeProps;
export type StyledAlertIconFontAwesomeProps = AlertIconFontAwesomeProps & {
	status: AlertProps['status'];
};
