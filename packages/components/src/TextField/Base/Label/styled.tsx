import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import { InputLabel } from 'components/private/components/Input';
import aspectSize from './variants/aspectSize';
import { TextFieldLabelProps } from './types';

const TextFieldLabel: React.FC<TextFieldLabelProps> = styled(InputLabel)<TextFieldLabelProps>`
	${aspectSize}

	${({ placeholder, theme, value }) =>
		!value &&
		!placeholder &&
		css({
			color: theme.components.input.colors.default
		})}
`;

TextFieldLabel.defaultProps = {
	alignItems: 'center',
	flexGrow: 1,
	height: '100%',
	pl: '1px',
	width: 'inherit',
	zIndex: 1
};

export default React.memo(TextFieldLabel);
