import styled, { css } from 'styled-components';
import systemCSS from '@styled-system/css';

import Flex from 'components/Flex';

import aspectSize from './variants/aspectSize';
import variant from './variants/variant';
import { ChipProps } from './types';

export const StyledChip = styled(Flex)<ChipProps>`
	${aspectSize}
	${variant}
  text-decoration: none;
	-webkit-mask-image: -webkit-radial-gradient(white, black);
	mask-image: radial-gradient(white, black);

	/* Spacings rules defined depending on children */

	> :not(.last-child):not(.overlay) {
		/* Spacing between elements */
		${systemCSS({ mr: 1 })}
	}

	> span:first-child {
		/* Chip's spacing when it has some right icons and a label as children */
		${systemCSS({ ml: 1 })}
	}

	> span.last-child {
		/* Chip's spacing when it has some left icons and a label as children */
		${systemCSS({ mr: 2 })}
	}

	> span.last-child:first-child {
		/* Chip's spacing when it has only a label as children */
		${systemCSS({ mr: 1 })}
	}

	> span:first-child:not(.last-child) {
		/* Chip's left spacing when it has only a label and some right icons as children */
		${props => (props.aspectSize === 'm' ? systemCSS({ ml: 2 }) : '')}
	}

	> div.clickable:first-child {
		/* Chip's left padding when it has a clickable icon as first child */
		${props => (props.aspectSize === 'm' ? systemCSS({ ml: -2, pl: 1 }) : systemCSS({ ml: -1, pl: '3px' }))}
	}

	> div.clickable.last-child {
		/* Chip's right padding when it has a clickable icon as last child */
		${props => (props.aspectSize === 'm' ? systemCSS({ mr: -2, pr: 1 }) : systemCSS({ mr: -1, pr: '3px' }))}
	}
	/** Hover rules */

	& > .overlay {
		will-change: transform;
		transform: translateX(-101%);
	}

	@media (hover: hover) {
		&:hover > .overlay {
			transform: translateX(0%);
		}
		> .clickable:hover ~ .overlay {
			transform: translateX(-101%);
		}
	}

	${props =>
		props.isOverlayAlwaysVisible &&
		css`
			& > div.overlay {
				transform: translateX(0%) !important;
				transition: none !important;
			}
		`}
`;

StyledChip.defaultProps = {
	alignItems: 'center',
	overflow: 'hidden',
	transition: 'background 0.3s ease-in, box-shadow 0.3 ease-in'
};
