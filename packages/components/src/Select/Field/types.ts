import { SelectProps } from 'components/Select/types';
import { TextFieldProps } from 'components/TextField';
import { SelectContextData } from '../Context';

type Props = unknown;

export type SelectFieldProps = Props & Omit<TextFieldProps, 'type'>;
export type StyledSelectFieldProps = SelectFieldProps &
  Pick<SelectProps, 'isAutocomplete'> &
  Pick<SelectContextData, 'selectedOptions'>;
