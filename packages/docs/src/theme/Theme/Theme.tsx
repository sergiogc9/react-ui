import React from 'react';
import styled from 'styled-components';

import { Box } from '@sergiogc9/react-ui';

const LineBreak = styled.div`
	width: 100%;
	height: 15px;
`;

const StyledBox = styled(Box)`
	& > * {
		margin: 0 10px;
	}
`;

const StyledH1 = styled.h1`
	margin: 10px;
	color: #1ea7fd;
	&:not(:first-child) {
		margin-top: 20px;
	}
`;

const Boxes: React.FC = () => (
	<>
		<Box>Default box</Box>
		<Box color="blue">Coloured box</Box>
		<Box border="thin solid blue">Bordered box</Box>
		<LineBreak />
	</>
);

const Theme = () => (
	<Box width="95vw" display="block">
		<StyledH1>Boxes</StyledH1>
		<StyledBox alignItems="center" flexWrap="wrap">
			<Boxes />
		</StyledBox>
	</Box>
);

export default Theme;
