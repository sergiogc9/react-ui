import React from 'react';
import styled from 'styled-components';
import { DecoratorFn } from '@storybook/react';

export const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5px;
	padding-top: 10px;
	min-width: 64px;
	margin: 0 10px;
	max-width: 64px;
	background: white;
	min-height: 64px;
`;

export const IconName = styled.span`
	display: flex;
	align-items: center;
	flex-grow: 1;
	padding-top: 10px;
	padding-bottom: 5px;
	font-size: 12px;
	text-align: center;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
		'Segoe UI Emoji', 'Segoe UI Symbol';
`;

const IconsDecorator: DecoratorFn = story => {
	const { icon } = story().props as any;
	const Icon = {
		...story(),
		props: { fill: 'primary.500', ...(story().props as any) }
	};

	return (
		<IconContainer>
			{Icon}
			<IconName>{icon}</IconName>
		</IconContainer>
	);
};

export default IconsDecorator;
