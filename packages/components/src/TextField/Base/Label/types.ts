import { InputLabelProps } from 'components/private/components/Input/Label';

import { TextFieldBaseProps } from '../types';

export type TextFieldLabelProps = InputLabelProps &
  Pick<
    TextFieldBaseProps,
    | 'isError'
    | 'isSuccess'
    | 'isDisabled'
    | 'labelPosition'
    | 'leftContent'
    | 'placeholder'
    | 'value'
  >;
