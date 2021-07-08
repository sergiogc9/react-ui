import React from 'react';
import styled, { css } from 'styled-components';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import Content from 'components/Content';
import aspectSize from './variants/aspectSize';
import { ButtonTextProps } from './types';

const ButtonText: React.FC<ButtonTextProps> = styled(Content)<ButtonTextProps>`
	${props =>
		!props.isDisabled &&
		props.variant === 'link' &&
		css`
			&::after {
				background-color: ${getColorFromTheme(props.theme, props.theme.components.button.colors.link.text || '')};
				bottom: 1px;
				content: '';
				height: 1px;
				left: 0;
				opacity: 0;
				position: absolute;
				transition: all 0.2s ease;
				width: 100%;
			}

			&:hover {
				&::after {
					opacity: 0.8;
				}
			}
		`}

	${({ theme }) => aspectSize(theme)};
`;

ButtonText.defaultProps = {
	aspectSize: 'm',
	fontWeight: 'inherit',
	position: 'relative',
	textDecoration: 'none'
};

const MemoButtonText = React.memo(ButtonText);
MemoButtonText.displayName = 'ButtonText';

export default MemoButtonText;
