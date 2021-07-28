import React from 'react';

import AlertContext from '../Context';
import { AlertProps } from '../types';
import StyledAlertIcon from './styled';
import { AlertIconProps } from './types';

const ALERT_STATUS_ICONS: Record<NonNullable<AlertProps['status']>, AlertIconProps['icon']> = {
	error: 'alert-error',
	info: 'info',
	success: 'check-circle',
	warning: 'alert-error'
};

const ALERT_STATUS_STYLINGS: Record<NonNullable<AlertProps['status']>, AlertIconProps['styling']> = {
	error: 'filled',
	info: 'filled',
	success: 'outlined',
	warning: 'filled'
};

const AlertIcon: React.FC<AlertIconProps> = ({ icon, styling, ...rest }) => {
	const { status } = React.useContext(AlertContext);

	const finalIcon = icon ?? ALERT_STATUS_ICONS[status];
	const finalStyling = styling ?? ALERT_STATUS_STYLINGS[status];

	return (
		<StyledAlertIcon
			data-testid="alertIcon"
			mr={2}
			{...(rest as any)}
			icon={finalIcon}
			status={status}
			styling={finalStyling}
		/>
	);
};

export default React.memo(AlertIcon);
