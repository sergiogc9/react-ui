import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import variant from './variants/variant';
import { StyledChipIconProps } from './types';

// TODO! remove any
// const StyledChipIcon: React.FC<StyledChipIconProps> = styled(Icon)`
const StyledChipIcon: React.FC<any> = styled(Icon)`
	${variant}
`;
StyledChipIcon.defaultProps = {
	aspectSize: 's',
	position: 'relative'
};

const StyledChipIconFontAwesome = styled(Icon.FontAwesome as any)`
	${variant}
`;
StyledChipIconFontAwesome.defaultProps = {
	aspectSize: 's'
};

export { StyledChipIcon, StyledChipIconFontAwesome };
