import React from 'react';
import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import StyledSpinner from './styled';
import { Circle } from './Circle';
import { Pulse } from './Pulse';
import { SpinnerProps } from './types';

const Spinner: React.FC<SpinnerProps> = React.memo(props => <StyledSpinner {...props} />);

const NamespacedSpinner = createNameSpacedComponent(Spinner, {
	Circle,
	Pulse
});

NamespacedSpinner.displayName = 'Spinner';
Circle.displayName = 'Spinner.Circle';
Pulse.displayName = 'Spinner.Pulse';

export default NamespacedSpinner;
