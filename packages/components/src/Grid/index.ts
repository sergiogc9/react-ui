import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import { GridBox } from './Box';
import { GridBoxProps } from './Box/types';
import { GridRow } from './Row';
import { GridRowProps } from './Row/types';
import { Grid } from './styled';
import { GridProps } from './types';

const NamespacedGrid = createNameSpacedComponent(Grid, {
	Box: GridBox,
	Row: GridRow
});

NamespacedGrid.displayName = 'Grid';
GridBox.displayName = 'Grid.Box';
GridRow.displayName = 'Grid.Row';

export type { GridProps, GridBoxProps, GridRowProps };
export default NamespacedGrid;
