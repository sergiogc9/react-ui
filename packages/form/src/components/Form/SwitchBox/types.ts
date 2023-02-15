import { SwitchBoxProps } from '@sergiogc9/react-ui-collections';

type Props = {
	readonly name: string;
};

export type FormSwitchBoxProps = Props & Omit<SwitchBoxProps, 'isChecked' | 'onChange'>;
