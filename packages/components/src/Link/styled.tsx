import styled, { css } from 'styled-components';
import systemCSS from '@styled-system/css';

import composers from 'components/private/utils/composers';
import aspectSize from 'components/Text/variants/aspectSize';
import Text from 'components/Text';

import behavior from './variants/behavior';
import { LinkProps } from './types';

const StyledLink: React.FC<LinkProps> = styled(Text)<LinkProps>`
	background: none;
	border: none;
	position: relative;
	&:focus {
		outline: none;
	}
	&::after {
		${props => systemCSS({ bg: props.color ?? props.theme.components.link.colors.color })}
		bottom: 1px;
		content: '';
		height: 1px;
		left: 0;
		position: absolute;
		transition: all 0.2s ease;
		width: 100%;
	}

	${props => systemCSS({ color: props.color ?? props.theme.components.link.colors.color })}

	${props =>
		props.behavior === 'opposite' &&
		css`
			&::after {
				opacity: 0;
			}
		`}
	${composers.text}
  ${aspectSize}
  ${behavior}
`;

StyledLink.defaultProps = {
	behavior: 'default',
	cursor: 'pointer',
	p: 0,
	width: 'fit-content'
};

export default StyledLink;
