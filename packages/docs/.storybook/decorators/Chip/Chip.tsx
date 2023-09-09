import React from 'react';
import styled from 'styled-components';
import { Decorator } from '@storybook/react';

export const ChipWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	> div,
	a {
		margin: 16px;
	}
`;

const ChipDecorator: Decorator = story => {
	return <ChipWrapper>{story()}</ChipWrapper>;
};

export default ChipDecorator;
