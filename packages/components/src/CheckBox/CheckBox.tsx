import React from 'react';

import InputCheck from 'components/private/components/InputCheck';
import { CheckBoxProps } from './types';

const CheckBox: React.FC<CheckBoxProps> = ({ ...props }) => {
	return <InputCheck type="checkbox" {...props} />;
};

export default React.memo(CheckBox);
