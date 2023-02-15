import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';
import aspectSize from './variants/aspectSize';
import aspectSizeFontAwesome from './variants/aspectSizeFontAwesome';
import { StyledButtonIconProps, StyledButtonIconFontAwesomeProps } from './types';

const StyledButtonIcon = styled(Icon)<StyledButtonIconProps>`
	fill: currentColor;

	${aspectSize};
` as React.FC<StyledButtonIconProps>;

StyledButtonIcon.defaultProps = {
	aspectSize: 'm'
};

const StyledButtonIconFontAwesome: React.FC<StyledButtonIconFontAwesomeProps> = styled(
	Icon.FontAwesome
)<StyledButtonIconFontAwesomeProps>`
	${aspectSizeFontAwesome};
`;

StyledButtonIcon.defaultProps = {
	aspectSize: 'm'
};

export { StyledButtonIcon, StyledButtonIconFontAwesome };
