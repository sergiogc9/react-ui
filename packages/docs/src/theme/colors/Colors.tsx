import React from 'react';
import styled from 'styled-components';

import { Box, Content, Title } from '@sergiogc9/react-ui';
import theme from '@sergiogc9/react-ui-theme';

const ColorWrapper = styled(Box)`
  & {
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 10px;
  }
`;

const ColorBox = styled(Box)`
  & {
    width: 90px;
    height: 90px;
    margin-top: 10px;
    border-radius: 8px;
    border: thin solid ${(props) => props.theme.colors.neutral['200']};
    background: ${(props) => props.color};
  }
`;

const getColorBox = (name: string, color: string) => (
  <ColorWrapper key={color}>
    <ColorBox color={color} />
    <Content aspectSize="s" pl="2px">
      {name}
    </Content>
    <Content aspectSize="xs" pl="2px">
      {color}
    </Content>
    {name === 'primary.500' && (
      <Content aspectSize="xs" pl="2px" color="primary.500">
        MAIN PRIMARY
      </Content>
    )}
  </ColorWrapper>
);

const getColorContent = (colorKey: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const colors = theme.colors[colorKey];
  let content;
  if (typeof colors === 'string') {
    content = getColorBox(colorKey, colors);
  } else {
    content = (
      <Box flexWrap="wrap">
        {Object.keys(colors).map((color) =>
          getColorBox(`${colorKey}.${color}`, colors[color])
        )}
      </Box>
    );
  }

  return (
    <Box key={colorKey} flexDirection="column" mb="30px">
      <Title aspectSize="xs" mb="10px" pl="10px">
        {colorKey.toLocaleUpperCase()}
      </Title>
      {content}
    </Box>
  );
};

const Colors = () => {
  return (
    <Box flexDirection="column">
      {Object.keys(theme.colors).map(getColorContent)}
    </Box>
  );
};

export default Colors;
