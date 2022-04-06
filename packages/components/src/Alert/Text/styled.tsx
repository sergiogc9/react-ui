import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

import { AlertTextProps } from './types';

const AlertText: React.FC<AlertTextProps> = styled(Text)<AlertTextProps>``;

AlertText.defaultProps = {
	aspectSize: 'm'
};

export default React.memo(AlertText);
