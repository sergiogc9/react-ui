import { CheckBoxProps } from '@sergiogc9/react-ui';

export type FormCheckBoxProps = Omit<CheckBoxProps, 'isDefaultSelected' | 'isSelected' | 'onChange'> &
	Required<Pick<CheckBoxProps, 'name'>>;
