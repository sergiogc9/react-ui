import React from 'react';
import Icon from 'components/Icon';
import IconButton from 'components/IconButton';

import StyledRemoveButtonWrapper from './styled';
import { RemoveButtonProps } from './types';

const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick, ...props }) => {
	return (
		<StyledRemoveButtonWrapper id="textFieldRemoveWrapper" {...props}>
			<IconButton
				as="button"
				data-testid="textfield__remove-button"
				onClick={onClick}
				aspectSize="s"
				tabIndex={-1}
				type="button"
			>
				<Icon icon="close" styling="outlined" aspectSize="s" />
			</IconButton>
		</StyledRemoveButtonWrapper>
	);
};

export default React.memo(RemoveButton);
