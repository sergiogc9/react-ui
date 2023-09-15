import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import Text from 'components/Text';

import StatusColor from '../collaborator/StatusColor';
import { InputHelperTextComponent, InputHelperTextProps } from './types';

const InputHelperText: InputHelperTextComponent = styled(Text)<InputHelperTextProps>`
	${({ aspectSize = 'm', theme, ...props }) => {
		const statusColor = new StatusColor(props, theme);
		const { fontSize: fontSizeProp } = theme.components.input;

		return css({
			color: statusColor.getStatusColorWithFallback('default'),
			fontSize: fontSizeProp[aspectSize!].label
		});
	}}
`;

InputHelperText.defaultProps = {
	color: 'neutral.500',
	wordBreak: 'break-word'
};

export default React.memo(InputHelperText);
