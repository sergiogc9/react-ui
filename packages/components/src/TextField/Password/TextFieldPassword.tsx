import React from 'react';

import Icon from 'components/Icon';
import TextFieldBase, { TextFieldBaseProps } from '../Base';

const TextFieldPassword: React.FC<TextFieldBaseProps> = React.forwardRef<HTMLInputElement, TextFieldBaseProps>(
	(props, ref) => {
		const [isTextVisible, setIsTextVisible] = React.useState(false);

		const icon = (
			<Icon
				cursor="pointer"
				data-testid="text-field__password_icon"
				icon={isTextVisible ? 'eye-off' : 'eye'}
				onClick={() => setIsTextVisible(visible => !visible)}
				pointerEvents="auto"
				styling="filled"
			/>
		);

		return <TextFieldBase {...props} ref={ref} type={isTextVisible ? 'text' : 'password'} rightContent={icon} />;
	}
);

export default React.memo(TextFieldPassword);
