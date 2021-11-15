import React from 'react';
import { Button, Content, Image, Title } from '@sergiogc9/react-ui';

import StyledUserFeedback from './styled';
import { UserFeedbackProps } from './types';

const UserFeedback: React.FC<UserFeedbackProps> = ({
	buttonText,
	imageSrc,
	onButtonClick,
	text,
	titleText,
	...rest
}) => {
	return (
		<StyledUserFeedback {...rest}>
			<Image src={imageSrc} size={{ xs: 180, md: 256 }} />
			<Title aspectSize="xs" marginY={3} textAlign="center">
				{titleText}
			</Title>
			{text && (
				<Content marginTop={2} textAlign="center">
					{text}
				</Content>
			)}
			{buttonText && (
				<Button marginTop={5} onClick={onButtonClick} width={{ xs: '100%', md: 'auto' }}>
					{buttonText}
				</Button>
			)}
		</StyledUserFeedback>
	);
};

export default React.memo(UserFeedback);
