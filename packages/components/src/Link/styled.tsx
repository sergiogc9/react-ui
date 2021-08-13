import styled, { css } from 'styled-components';

import Content from 'components/Content';
import composers from 'components/private/utils/composers';
import aspectSize from 'components/Content/variants/aspectSize';
import behavior from './variants/behavior';
import { LinkProps } from './types';

const StyledLink: React.FC<LinkProps> = styled(Content)<LinkProps>`
	background: none;
	border: none;
	position: relative;
	&:focus {
		outline: none;
	}
	&::after {
		background-color: ${props => props.theme.colors.blue['700']};
		bottom: 1px;
		content: '';
		height: 1px;
		left: 0;
		position: absolute;
		transition: all 0.2s ease;
		width: 100%;
	}

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
	color: 'blue.700',
	cursor: 'pointer',
	p: 0,
	width: 'fit-content'
};

export default StyledLink;
