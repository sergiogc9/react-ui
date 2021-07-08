import React from 'react';
import styled from 'styled-components';
import { DecoratorFn } from '@storybook/react';

import { Box } from '@sergiogc9/react-ui';

const BlurContainer = styled(Box)`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  position: relative;
  margin: -1px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    filter: blur(50px);
    background: #1ea7fd;
  }
  & > div {
    overflow: hidden;
    background: white;
  }
`;

export const PageContainer: React.FC = (props) => (
  <BlurContainer justifyContent="center" alignItems="center">
    <Box
      width="90%"
      height="90%"
      padding="30px"
      display="block"
      border="thin solid lightgray"
    >
      {props.children}
    </Box>
  </BlurContainer>
);

const BlurDecorator: DecoratorFn = (story) => {
  return <PageContainer>{story()}</PageContainer>;
};

export default BlurDecorator;
