import React from 'react';
import styled, { css } from 'styled-components';
import systemCSS from '@styled-system/css';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import Box from 'components/Box';
import { StyledTabsTabProps } from './types';

const StyledTabsTab = styled(Box)<StyledTabsTabProps>`
	cursor: pointer;
	text-transform: uppercase;

	&:first-child {
		${systemCSS({ marginLeft: [3, 3, 3, 0] })}
	}

	> span {
		align-items: center;
		display: inline-flex;
		transition: all 200ms ease-in-out;
	}

	&:hover {
		> span {
			color: ${props => props.theme.colors.neutral['900']};
		}
	}

	&::after {
		background-color: ${props => getColorFromTheme(props.theme, props.theme.components.tab.color)};
		border-radius: 4px;
		bottom: 0px;
		content: '';
		height: 4px;
		left: 0;
		position: absolute;
		transition: all 150ms ease-in-out 0s;
		transform: scaleX(0);
		width: 100%;
		z-index: 1;
		visibility: hidden;
	}

	${props =>
		props.activeID === props.id &&
		css`
			 {
				color: ${props.theme.colors.neutral['900']};
				cursor: default;
				&::after {
					visibility: visible;
					transform: scaleX(1);
				}
			}
		`}

	${props =>
		props.activeID !== props.id &&
		css`
			&:hover {
				&::after {
					visibility: visible;
					transform: scaleX(1);
				}
			}
		`}

  ${props =>
		props.isDisabled &&
		css`
			cursor: default;
			pointer-events: none;
			&,
			&:hover,
			&:focus-within {
				background: inherit;
				opacity: 0.4;
			}
			&::after,
			&:hover::after {
				visibility: hidden;
				transform: scaleX(0);
			}
		`}

    ${props =>
		props.isError &&
		css`
			 {
				${props.activeID !== props.id &&
				css`
					color: ${props.theme.colors.red['500']};
				`}

				&::after {
					visibility: visible;
				}
			}
		`}
`;

StyledTabsTab.defaultProps = {
	alignItems: 'flex-start',
	color: 'neutral.600',
	flexGrow: { xs: 1, md: 0 },
	fontSize: 0,
	height: { xs: 36, md: 40 },
	justifyContent: 'center',
	mx: { xs: 3, md: 2 },
	px: 1,
	pt: '2px',
	transition: 'all 200ms ease-in-out',
	whiteSpace: 'nowrap'
};

export default React.memo(StyledTabsTab);
