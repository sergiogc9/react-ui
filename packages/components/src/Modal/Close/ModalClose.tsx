import React from 'react';

import Icon from 'components/Icon';
import IconButton from 'components/IconButton';
import ModalContext from '../Context';
import { ModalCloseProps } from './types';

const ModalClose: React.FC<ModalCloseProps> = props => {
	const { onCloseModal } = React.useContext(ModalContext);

	return (
		<IconButton
			aspectSize="l"
			cursor="pointer"
			data-testid="modalCloseBtn"
			onClick={onCloseModal}
			position="absolute"
			right={{ xs: 2, md: 3 }}
			top={{ xs: 2, md: 3 }}
			{...props}
		>
			<Icon styling="outlined" icon="close" />
		</IconButton>
	);
};

export default React.memo(ModalClose);
