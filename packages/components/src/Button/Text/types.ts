import { ContentProps } from 'components/Content/types';
import { ButtonProps } from 'components/Button/types';

type Props = Omit<ContentProps, 'aspectSize'> & {
	readonly aspectSize?: ButtonProps['aspectSize'];
	readonly isDisabled?: ButtonProps['isDisabled'];
	readonly variant?: ButtonProps['variant'];
};

export type ButtonTextProps = Props & Omit<ContentProps, 'aspectSize'>;
