import { FlexProps } from 'components/Flex';
import { ComposedTextProps } from 'components/private/utils/composers';

export interface InputBoxProps
	extends ComposedTextProps,
		FlexProps<React.HTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
