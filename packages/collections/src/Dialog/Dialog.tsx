import React from 'react';
import { Button, Modal, Text, Title } from '@sergiogc9/react-ui';

import { DialogProps } from './types';

const Dialog: React.FC<DialogProps> = ({
	cancelText,
	cancelBtnVariant = 'secondary',
	confirmText,
	confirmBtnVariant = 'default',
	content,
	onCancel,
	onConfirm,
	titleText,
	...rest
}) => {
	return (
		<Modal width={350} {...rest} onClose={onCancel}>
			<Modal.Header>
				<Title aspectSize="xs">{titleText}</Title>
			</Modal.Header>
			<Modal.Content px={4} py={0}>
				{typeof content === 'string' ? <Text aspectSize="s">{content}</Text> : content}
			</Modal.Content>
			<Modal.Footer>
				{confirmText && (
					<Button aspectSize="l" flexBasis="50%" flexGrow={1} onClick={onConfirm} variant={confirmBtnVariant}>
						{confirmText}
					</Button>
				)}
				{cancelText && (
					<Button
						aspectSize="l"
						flexBasis="50%"
						flexGrow={1}
						ml={confirmText ? 3 : 0}
						onClick={onCancel}
						variant={cancelBtnVariant}
					>
						{cancelText}
					</Button>
				)}
			</Modal.Footer>
		</Modal>
	);
};

export default React.memo(Dialog);
