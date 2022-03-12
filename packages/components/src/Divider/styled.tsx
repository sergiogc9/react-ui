import styled from 'styled-components';
import css from '@styled-system/css';

import Box from 'components/Box';
import { DividerProps } from './types';

export const Divider: React.FC<DividerProps> = styled(Box)<DividerProps>`
	${props =>
		props.isVertical
			? css({
					height: props.height ?? '100%',
					maxHeight: props.maxHeight ?? '100%',
					width: props.width ?? 1
			  })
			: css({
					height: props.height ?? 1,
					maxWidth: props.maxWidth ?? '100%',
					width: props.width ?? '100%'
			  })}

	${props =>
		!props.bg &&
		!props.backgroundColor &&
		css({
			bg: props.theme.components.divider.colors.background
		})}
`;

Divider.defaultProps = {
	backgroundClip: 'content-box',
	flexShrink: 0
};
