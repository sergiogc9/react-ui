import React from 'react';
import styled from 'styled-components';
import { system } from 'styled-system';

import Box from 'components/Box';
import composers from 'components/private/utils/composers';
import { GridBoxProps } from './types';

const gridItemComposers = system({
  columns: {
    property: 'gridColumnEnd',
    transform: (value) => `span ${value}`
  },
  initialColumn: {
    property: 'gridColumnStart',
    transform: (value) => value.toString()
  },
  initialRow: {
    property: 'gridRowStart',
    transform: (value) => value.toString()
  },
  rows: {
    property: 'gridRowEnd',
    transform: (value) => `span ${value}`
  }
});

const GridBox: React.FC<GridBoxProps> = styled(Box)<GridBoxProps>`
  ${gridItemComposers}
  ${composers.grid}
`;

GridBox.defaultProps = {
  columns: 1,
  rows: 1
};

export { GridBox };
