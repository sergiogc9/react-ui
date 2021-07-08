import React from 'react';

import { createNameSpacedComponent } from 'components/private/utils/components';
import StyledSpinner from './styled';
import { Pulse } from './Pulse';
import { SpinnerProps } from './types';

const Spinner: React.FC<SpinnerProps> = React.memo((props) => (
  <StyledSpinner {...props} />
));

export default createNameSpacedComponent(Spinner, {
  Pulse
});
