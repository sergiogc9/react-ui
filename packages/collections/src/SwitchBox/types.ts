import { FlexProps, SwitchProps } from '@sergiogc9/react-ui';

export interface SwitchBoxProps extends SwitchProps {}
export interface SwitchBoxWrapperProps extends FlexProps<'div'>, Pick<SwitchBoxProps, 'isDisabled'> {}
