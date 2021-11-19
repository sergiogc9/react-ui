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
`;

Divider.defaultProps = {
	backgroundClip: 'content-box',
	backgroundColor: 'neutral.100',
	flexShrink: 0
};
