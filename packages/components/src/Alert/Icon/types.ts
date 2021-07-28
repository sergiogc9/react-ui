import { IconProps } from 'components/Icon';

import { AlertProps } from '../types';

export type AlertIconProps = Partial<IconProps>;
export type StyledAlertIconProps = Partial<IconProps> & {
	status: AlertProps['status'];
};
