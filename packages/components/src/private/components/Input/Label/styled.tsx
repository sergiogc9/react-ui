import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import composers from 'components/private/utils/composers';
import Flex from 'components/Flex';

import StatusColor from '../collaborator/StatusColor';
import { InputLabelProps } from './types';

const InputLabel: React.FC<InputLabelProps> = styled(Flex).withConfig<InputLabelProps>({
	shouldForwardProp: prop => prop !== 'placeholder'
})`
	${composers.text}
	${({ aspectSize = 'm', theme, ...props }) => {
		const statusColor = new StatusColor(props, theme);
		const { fontSize: fontSizeProp } = theme.components.input;

		return css({
			color: statusColor.getStatusColorWithFallback('default'),
			fontSize: fontSizeProp[aspectSize!].label
		});
	}}
`;

InputLabel.defaultProps = {
	as: 'label',
	color: 'neutral.500',
	cursor: 'inherit',
	overflow: 'hidden',
	pointerEvents: 'none',
	transition: 'all ease-in 0.2s',
	whiteSpace: 'nowrap'
};

export default React.memo(InputLabel);
