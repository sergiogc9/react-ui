import styled, { css, keyframes } from 'styled-components';
import * as systemCSS from '@styled-system/css';

import { getColorFromTheme } from '@sergiogc9/react-ui-theme';
import InputBox from './collaborator/InputBox';
import StatusColor from './collaborator/StatusColor';
import { StyledInputProps, StyledTextAreaProps } from './types';

const commonStyles = css`
	${({ theme, ...props }) => {
		const statusColor = new StatusColor(props, theme);
		return systemCSS.css({
			WebkitAppearance: 'none',
			outline: 'none',
			'&:hover': {
				borderColor: statusColor.getStatusColorWithFallback('hover')
			},
			'&:focus': {
				borderColor: statusColor.getStatusColorWithFallback('information'),
				boxShadow: `inset 0px 0px 0px 1px ${getColorFromTheme(
					theme,
					statusColor.getStatusColorWithFallback('information')
				)}`
			},
			borderColor: statusColor.getStatusColorWithFallback('borderDefault'),
			borderRadius: 0,
			borderStyle: 'solid',
			borderWidth: '1px',
			fontSize: 2,
			position: 'relative',
			transition: 'all ease-in 0.2s, height 0s'
		});
	}}
`;

export const StyledInput: React.FC<StyledInputProps> = styled(InputBox)<StyledInputProps>`
	${commonStyles}

	${({ aspectSize, theme }) => {
		const { aspectSize: aspectSizeProp } = theme.components.input;

		return systemCSS.css({
			height: aspectSizeProp[aspectSize!].height
		});
	}}
`;

StyledInput.defaultProps = {
	color: 'neutral.900',
	fontSize: 2,
	pb: 0,
	pr: 3,
	pt: 0,
	width: '100%'
};

export const StyledTextArea: React.FC<StyledTextAreaProps> = styled(InputBox)<StyledTextAreaProps>`
	${commonStyles}
	resize: none;
`;

StyledTextArea.defaultProps = {
	as: 'textarea',
	color: 'currentColor',
	flexGrow: 1,
	overflow: 'hidden',
	paddingX: 3,
	paddingY: 2,
	width: '100%'
};

export const bottomInputContentAnimation = keyframes`
  from {
    margin-top: -24px;
    opacity: 0;
  }

  50% {
    margin-top: 0px;
    opacity: 0;
  }

  to {
    margin-top: 0px;
    opacity: 1;
  }
`;
