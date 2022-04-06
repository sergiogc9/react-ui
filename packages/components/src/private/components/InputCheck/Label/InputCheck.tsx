import React from 'react';

import { TextProps } from 'components/Text';

import StyledInputCheckLabel from './styled';
import { InputCheckLabelProps } from './types';

const InputCheckLabel: React.FC<InputCheckLabelProps> = ({ aspectSize = 'm', ...rest }) => {
	const labelAspectSize = React.useMemo(() => {
		const labelAspectSizes: Record<NonNullable<InputCheckLabelProps['aspectSize']>, TextProps['aspectSize']> = {
			m: 's',
			l: 'm'
		};

		return labelAspectSizes[aspectSize];
	}, [aspectSize]);

	return <StyledInputCheckLabel aspectSize={labelAspectSize} {...rest} />;
};

export default React.memo(InputCheckLabel);
