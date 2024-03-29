import styled, { css } from 'styled-components';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import Text from 'components/Text';

import aspectSize from './variants/aspectSize';
import { StyledButtonTextProps } from './types';

const StyledButtonText = styled(Text)<StyledButtonTextProps>`
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

	${aspectSize};
`;

StyledButtonText.defaultProps = {
	aspectSize: 'm',
	fontWeight: 'inherit',
	position: 'relative',
	textDecoration: 'none'
};

export default StyledButtonText;
