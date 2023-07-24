import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import Text from 'components/Text';

import StatusColor from '../collaborator/StatusColor';
import { InputHelperTextProps } from './types';

const InputHelperText: React.FC<InputHelperTextProps> = styled(Text)<InputHelperTextProps>`
	${({ aspectSize, theme, ...props }) => {
		const statusColor = new StatusColor(props, theme);
		const { fontSize: fontSizeProp } = theme.components.input;
		console.log(aspectSize)

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
