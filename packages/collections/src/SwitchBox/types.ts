import { FlexProps, SwitchProps } from '@sergiogc9/react-ui';

export interface SwitchBoxProps extends SwitchProps {}
export interface SwitchBoxWrapperProps
	extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined>,
		Pick<SwitchBoxProps, 'isDisabled'> {}
