import React from 'react';
import styled from 'styled-components';

import Content from 'components/Content';

import { AlertTextProps } from './types';

const AlertText: React.FC<AlertTextProps> = styled(Content)<AlertTextProps>``;

AlertText.defaultProps = {
	aspectSize: 'm'
};

export default React.memo(AlertText);
