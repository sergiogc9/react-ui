import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faCircleExclamation, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { IconProps } from 'components/Icon';

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

const ALERT_ICON_SIZES: Record<NonNullable<AlertProps['aspectSize']>, NonNullable<IconProps['aspectSize']>> = {
	s: 's',
	m: 'm'
};

const AlertIconFontAwesome: React.FC<AlertIconFontAwesomeProps> = ({ ...rest }) => {
	return <StyledAlertIconFontAwesome {...rest} />;
};

const AlertIcon: React.FC<AlertIconProps> = ({ aspectSize: iconAspectSize, icon, ...rest }) => {
	const { aspectSize, status } = React.useContext(AlertContext);

	// Use font awesome icons as default
	if (!icon)
		return (
			<AlertIconFontAwesome
				aspectSize={iconAspectSize ?? ALERT_ICON_SIZES[aspectSize]}
				data-testid="alertIcon"
				icon={ALERT_STATUS_ICONS[status]}
				{...(rest as any)}
			/>
		);

	return (
		<StyledAlertIcon
			aspectSize={iconAspectSize ?? ALERT_ICON_SIZES[aspectSize]}
			data-testid="alertIcon"
			{...(rest as any)}
			icon={icon}
			status={status}
		/>
	);
};

const MemoAlertIcon = React.memo(AlertIcon);
MemoAlertIcon.displayName = 'AlertIcon';

export { MemoAlertIcon as AlertIcon, AlertIconFontAwesome };
