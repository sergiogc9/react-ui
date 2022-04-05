import { FlexProps, SwitchProps } from '@sergiogc9/react-ui';

export type SwitchBoxProps = SwitchProps;
export type SwitchBoxWrapperProps = FlexProps & Pick<SwitchBoxProps, 'isDisabled'>;
