import { LabelHTMLAttributes } from 'react';

import { FlexProps } from 'components/Flex';
import { ComposedTextProps } from 'components/private/utils/composers';
import { InputProps } from '../types';

export type InputLabelProps = InputProps &
	ComposedTextProps &
	FlexProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
