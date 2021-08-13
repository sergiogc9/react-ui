import React from 'react';
import styled, { css } from 'styled-components';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import Box from 'components/Box';
import { StyledTabsTabProps } from './types';

const StyledTabsTab = styled(Box)<StyledTabsTabProps>`
	cursor: pointer;
	text-transform: uppercase;

	> span {
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
		height: 3px;
		left: 0px;
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
			&,
			&:hover,
			&:focus-within {
				background: inherit;
				color: ${props.theme.colors.neutral['800']};
				opacity: 0.4;
			}
			&::after {
				background-color: ${props.theme.colors.neutral['500']};
				visibility: visible;
			}
		`}

    ${props =>
		props.isError &&
		css`
			 {
				color: ${props.theme.colors.red['900']};

				&::after {
					background-color: ${props.theme.colors.red['900']};
					visibility: visible;
				}
			}
		`}
`;

StyledTabsTab.defaultProps = {
	color: 'neutral.600',
	flexGrow: 0,
	fontSize: 0,
	justifyContent: 'center',
	marginRight: 2,
	padding: 1,
	paddingTop: 2,
	paddingBottom: 2,
	transition: 'all 200ms ease-in-out',
	whiteSpace: 'nowrap'
};

export default React.memo(StyledTabsTab);
