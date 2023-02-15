import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import variant from './variants/variant';
import { StyledChipIconProps } from './types';

const StyledChipIcon = styled(Icon)`
	${variant}
` as React.FC<StyledChipIconProps>;
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
