import React from 'react';

import { TextProps } from 'components/Text';

import AlertContext from '../Context';
import { AlertProps } from '../types';
import { StyledAlertText } from './styled';
import { AlertTextProps } from './types';

const ALERT_TEXT_SIZES: Record<NonNullable<AlertProps['aspectSize']>, NonNullable<TextProps['aspectSize']>> = {
	s: 's',
	m: 'm'
};

const AlertText: React.FC<AlertTextProps> = ({ aspectSize: textAspectSize, ...rest }) => {
	const { aspectSize } = React.useContext(AlertContext);

	return <StyledAlertText aspectSize={textAspectSize ?? ALERT_TEXT_SIZES[aspectSize]} {...rest} />;
};

const MemoAlertText = React.memo(AlertText);
MemoAlertText.displayName = 'AlertText';

export { MemoAlertText as AlertText };
