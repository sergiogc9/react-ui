import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Decorator } from '@storybook/react';

export const RippleWrapper = styled.div`
	${props =>
		css({
			color: props.theme.mode === 'dark' ? 'neutral.700' : 'neutral.50'
		})}
`;

const RippleDecorator: Decorator = story => {
	return <RippleWrapper>{story()}</RippleWrapper>;
};

export default RippleDecorator;
