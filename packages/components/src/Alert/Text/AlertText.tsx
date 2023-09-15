import React from 'react';

import { TextProps } from 'components/Text';

import AlertContext from '../Context';
import { AlertProps } from '../types';
import { StyledAlertText } from './styled';
import { AlertTextComponent } from './types';

const ALERT_TEXT_SIZES: Record<NonNullable<AlertProps['aspectSize']>, NonNullable<TextProps['aspectSize']>> = {
	s: 's',
	m: 'm'
};

const AlertText: AlertTextComponent = ({ aspectSize: textAspectSize, ...rest }) => {
	const { aspectSize } = React.useContext(AlertContext);

	return <StyledAlertText aspectSize={textAspectSize ?? ALERT_TEXT_SIZES[aspectSize]} {...rest} as={rest.as as any} />;
};

const MemoAlertText: AlertTextComponent = React.memo(AlertText);
MemoAlertText.displayName = 'AlertText';

export { MemoAlertText as AlertText };
