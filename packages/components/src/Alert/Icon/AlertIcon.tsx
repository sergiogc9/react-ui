import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faCircleExclamation, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import AlertContext from '../Context';
import { AlertProps } from '../types';
import { StyledAlertIcon, StyledAlertIconFontAwesome } from './styled';
import { AlertIconFontAwesomeProps, AlertIconProps } from './types';

const ALERT_STATUS_ICONS: Record<NonNullable<AlertProps['status']>, IconProp> = {
	error: faCircleExclamation,
	info: faCircleInfo,
	success: faCheckCircle,
	warning: faCircleExclamation
};

const AlertIconFontAwesome: React.FC<AlertIconFontAwesomeProps> = ({ children, ...rest }) => {
	return <StyledAlertIconFontAwesome {...rest} />;
};

const AlertIcon: React.FC<AlertIconProps> = ({ icon, ...rest }) => {
	const { status } = React.useContext(AlertContext);

	// Use font awesome icons as default
	if (!icon)
		return <AlertIconFontAwesome data-testid="alertIcon" icon={ALERT_STATUS_ICONS[status]} {...(rest as any)} />;

	return <StyledAlertIcon data-testid="alertIcon" {...(rest as any)} icon={icon} status={status} />;
};

const MemoAlertIcon = React.memo(AlertIcon);
MemoAlertIcon.displayName = 'AlertIcon';

export { MemoAlertIcon as AlertIcon, AlertIconFontAwesome };
