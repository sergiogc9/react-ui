import styled, { css } from 'styled-components';
import systemCSS from '@styled-system/css';

import Flex from 'components/Flex';
import { TextFieldBaseProps } from './types';

const StyledTextFieldBaseWrapper: React.FC<TextFieldBaseProps> = styled(Flex)<TextFieldBaseProps>`
	${props => props.isDisabled && 'opacity: 0.4;'}
`;

StyledTextFieldBaseWrapper.defaultProps = {
	boxSizing: 'border-box',
	flexDirection: 'column',
	height: 'auto',
	transition: 'opacity ease-in 0.2s',
	width: '100%'
};

const StyledTextFieldIconContent = styled(Flex)`
	${({ theme }) =>
		systemCSS({
			color: theme.components.input.colors.default
		})}
`;

StyledTextFieldIconContent.defaultProps = {
	alignItems: 'center',
	as: 'span',
	flexShrink: 0,
	justifyContent: 'center',
	pointerEvents: 'none',
	transition: 'color ease-in 0.2s',
	zIndex: 1
};

const StyledTextFieldBase: React.FC<TextFieldBaseProps> = styled(Flex)<TextFieldBaseProps>`
	&:hover #textFieldRemoveWrapper,
	&:focus-within #textFieldRemoveWrapper {
		display: flex;
		opacity: 1;
	}

	${props =>
		props.labelPosition === 'outside' &&
		css`
			margin-top: 20px;
		`}

	&:hover ${StyledTextFieldIconContent} {
		${props => systemCSS({ color: props.theme.components.input.colors.hover })}
	}
`;

StyledTextFieldBase.defaultProps = {
	alignItems: 'center',
	boxSizing: 'border-box',
	position: 'relative',
	width: '100%'
};

export { StyledTextFieldBaseWrapper, StyledTextFieldIconContent };
export default StyledTextFieldBase;
