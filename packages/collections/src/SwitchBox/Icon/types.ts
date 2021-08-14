import { IconProps } from '@sergiogc9/react-ui';

type Props = Record<string, unknown>;

export type SwitchBoxIconProps = Props & Omit<IconProps, 'aspectSize'>;
