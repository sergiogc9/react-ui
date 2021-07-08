import React from 'react';
import styled from 'styled-components';
import { DecoratorFn } from '@storybook/react';

export const ChipWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	> span,
	a {
		margin: 16px;
	}
`;

const ChipDecorator: DecoratorFn = story => {
	return <ChipWrapper>{story()}</ChipWrapper>;
};

export default ChipDecorator;
