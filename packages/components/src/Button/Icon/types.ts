import { IconProps } from 'components/Icon/types';
import { ButtonProps } from 'components/Button/types';

type Props = {
	readonly aspectSize?: ButtonProps['aspectSize'];
};

export type ButtonIconProps = Props & Omit<IconProps, 'aspectSize'>;
