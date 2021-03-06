import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import Text from 'components/Text';

import StatusColor from '../collaborator/StatusColor';
import { InputHelperTextProps } from './types';

const InputHelperText: React.FC<InputHelperTextProps> = styled(Text)<InputHelperTextProps>`
	${({ theme, ...props }) => {
		const statusColor = new StatusColor(props, theme);

		return css({
			color: statusColor.getStatusColorWithFallback('default')
		});
	}}
`;

InputHelperText.defaultProps = {
	color: 'neutral.500',
	fontSize: 0,
	wordBreak: 'break-word'
};

export default React.memo(InputHelperText);
