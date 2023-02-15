import { SelectProps } from '@sergiogc9/react-ui';

type Props = {
	readonly name: string;
};

export type FormSelectProps = Props & Omit<SelectProps, 'multiple' | 'name' | 'onBlur' | 'onOptionChange'>;
