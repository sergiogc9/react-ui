import styled from 'styled-components';

import Icon from 'components/Icon';

import status from './variants/status';

const StyledAlertIcon = styled(Icon)`
	${status}
`;
StyledAlertIcon.defaultProps = {
	mr: 2
};

const StyledAlertIconFontAwesome = styled(Icon.FontAwesome as any)`
	${status}
`;
StyledAlertIconFontAwesome.defaultProps = {
	mr: 2
};

export { StyledAlertIcon, StyledAlertIconFontAwesome };
