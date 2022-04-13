import { IconProps } from 'components/Icon/types';

import { ButtonProps } from '../types';

type Props = Omit<IconProps, 'aspectSize'>;

export type ButtonIconProps = Props;

export type StyledButtonIconProps = ButtonIconProps & Pick<ButtonProps, 'aspectSize'>;
