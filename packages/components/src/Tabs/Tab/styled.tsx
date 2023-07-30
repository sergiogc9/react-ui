import React from 'react';
import styled, { css } from 'styled-components';
import systemCSS from '@styled-system/css';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import Flex from 'components/Flex';
import { StyledTabsTabProps } from './types';

const StyledTabsTab: React.FC<StyledTabsTabProps> = styled(Flex)<StyledTabsTabProps>`
	${props =>
		systemCSS({
			color: props.theme.components.tab.colors.default,
			flexBasis: props.flexBasis ?? props.tabsLayout === 'big-evenly' ? 0 : undefined,
			flexGrow: props.flexGrow ?? props.tabsLayout.startsWith('small') ? 0 : 1,
			flexShrink: props.flexShrink ?? props.tabsLayout === 'big-evenly' ? 0 : undefined
		})}
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
			${props => systemCSS({ color: props.theme.components.tab.colors.active })}
		}
	}

	&::after {
		background-color: ${props => getColorFromTheme(props.theme, props.theme.components.tab.colors.bar)};
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
				${systemCSS({ color: props.theme.components.tab.colors.active })}
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
					color: ${props.theme.colors.red[400]};
				`}

				&:hover {
					> span {
						${systemCSS({
							color: props.theme.colors.red[500]
						})}
					}
				}

				${props.activeID === props.id &&
				css`
					 {
						${systemCSS({ color: props.theme.colors.red[400] })}
					}
				`}

				&::after {
					visibility: visible;
					background-color: ${props.theme.colors.red[400]};
				}
			}
		`}
`;

StyledTabsTab.defaultProps = {
	alignItems: 'flex-start',
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
