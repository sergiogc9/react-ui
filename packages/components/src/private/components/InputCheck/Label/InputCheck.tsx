import React from 'react';

import { ContentProps } from 'components/Content';
import StyledInputCheckLabel from './styled';
import { InputCheckLabelProps } from './types';

const InputCheckLabel: React.FC<InputCheckLabelProps> = ({ aspectSize = 'm', ...rest }) => {
	const labelAspectSize = React.useMemo(() => {
		const labelAspectSizes: Record<NonNullable<InputCheckLabelProps['aspectSize']>, ContentProps['aspectSize']> = {
			m: 's',
			l: 'm'
		};

		return labelAspectSizes[aspectSize];
	}, [aspectSize]);

	return <StyledInputCheckLabel aspectSize={labelAspectSize} {...rest} />;
};

export default React.memo(InputCheckLabel);
