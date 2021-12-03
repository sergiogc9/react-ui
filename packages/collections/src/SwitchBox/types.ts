import { BoxProps, SwitchProps } from '@sergiogc9/react-ui';

export type SwitchBoxProps = SwitchProps;
export type SwitchBoxWrapperProps = BoxProps & Pick<SwitchBoxProps, 'isDisabled'>;
