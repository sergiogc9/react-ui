import React from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';

import { Flex, Text, Title } from '@sergiogc9/react-ui';

const ColorWrapper = styled(Flex)`
	& {
		flex-direction: column;
		flex-wrap: wrap;
		margin: 0 10px;
	}
`;

const ColorBox = styled(Flex)`
	& {
		background: ${props => props.color};
		border: thin solid ${props => props.theme.colors.neutral[props.theme.mode === 'dark' ? '800' : '200']};
		border-radius: 8px;
		height: 90px;
		margin-top: 10px;
		width: 90px;
	}
`;

const getColorBox = (name: string, color: string) => (
	<ColorWrapper key={color}>
		<ColorBox color={color} />
		<Text aspectSize="s" pl="2px">
			{name}
		</Text>
		<Text aspectSize="xs" pl="2px">
			{color}
		</Text>
		{name === 'primary.500' && (
			<Text aspectSize="xs" pl="2px" color="primary.500">
				MAIN PRIMARY
			</Text>
		)}
	</ColorWrapper>
);

const getColorContent = (theme: DefaultTheme, colorKey: string) => {
	if (colorKey === 'modes') return null;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const colors = theme.colors[colorKey];
	let content;
	if (typeof colors === 'string') {
		content = getColorBox(colorKey, colors);
	} else {
		content = (
			<Flex flexWrap="wrap">
				{Object.keys(colors).map(color => getColorBox(`${colorKey}.${color}`, colors[color]))}
			</Flex>
		);
	}

	return (
		<Flex key={colorKey} flexDirection="column" mb="30px">
			<Title aspectSize="xs" mb="10px" pl="10px">
				{colorKey.toLocaleUpperCase()}
			</Title>
			{content}
		</Flex>
	);
};

const Colors = () => {
	const theme = useTheme();

	return <Flex flexDirection="column">{Object.keys(theme.colors).map(color => getColorContent(theme, color))}</Flex>;
};

export default Colors;
