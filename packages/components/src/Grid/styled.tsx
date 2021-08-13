import React from 'react';
import styled from 'styled-components';
import { ConfigStyle, Scale, system } from 'styled-system';

import { shouldStyledComponentForwardProp } from 'components/private/utils/components';
import composers from 'components/private/utils/composers';
import { GridProps } from './types';

const gridCustomComposers = system({
	columns: {
		property: 'gridTemplateColumns',
		transform: ((value: number, scale: Scale, props: GridProps) =>
			`repeat(${value}, ${props.hasEqualColumns ? '1fr' : 'auto'})`) as ConfigStyle['transform']
	},
	hasEqualColumns: {
		property: 'gridAutoColumns',
		transform: value => (value ? '1fr' : 'auto')
	},
	rows: {
		property: 'gridTemplateRows',
		transform: value => `repeat(${value}, auto)`
	}
});

const Grid: React.FC<GridProps> = React.memo(styled.div.withConfig<GridProps>({
	shouldForwardProp: shouldStyledComponentForwardProp
})`
	${gridCustomComposers}
	${composers.grid};
`);

Grid.defaultProps = {
	columns: 12,
	columnGap: { xs: 3, lg: 4 },
	display: 'grid',
	hasEqualColumns: true,
	position: 'relative',
	rowGap: { xs: 3, lg: 4 },
	rows: 1
};

export { Grid };
