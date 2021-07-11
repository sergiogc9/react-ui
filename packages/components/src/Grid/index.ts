import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import { GridBox } from './Box';
import { GridBoxProps } from './Box/types';
import { GridRow } from './Row';
import { GridRowProps } from './Row/types';
import { Grid } from './styled';
import { GridProps } from './types';

export { GridProps, GridBoxProps, GridRowProps };
export default createNameSpacedComponent(Grid, {
	Box: GridBox,
	Row: GridRow
});
