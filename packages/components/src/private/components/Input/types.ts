import React from 'react';
import { BoxProps } from 'components/Box';

export type InputProps = {
  /**
   * The size of the input
   */
  readonly aspectSize?: 's' | 'm' | 'l';

  /**
   * If true, the textField is marked as success
   */
  readonly isDisabled?: boolean;

  /**
   * If true, the textField is marked as error
   */
  readonly isError?: boolean;

  /**
   * If true, the textField is marked as success
   */
  readonly isSuccess?: boolean;
};

export type StyledInputProps<
  Attrs extends React.HTMLAttributes<any> = React.InputHTMLAttributes<HTMLInputElement>,
  Ref = HTMLInputElement
> = InputProps & BoxProps<Attrs, Ref>;

export type StyledTextAreaProps = InputProps &
  BoxProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
