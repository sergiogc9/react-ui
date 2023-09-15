import React from 'react';
import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

export interface InputProps {
	/**
	 * The size of the input
	 */
	readonly aspectSize?: 'xs' | 's' | 'm' | 'l';

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
}

type StyledInputProps<T extends React.ElementType = 'input'> = ExtendedFlexProps<InputProps, T>;

type StyledInputComponent = ExtendedFlexComponent<InputProps>;

type StyledTextAreaProps<T extends React.ElementType = 'textarea'> = ExtendedFlexProps<InputProps, T>;

type StyledTextAreaComponent = ExtendedFlexComponent<InputProps>;

export { StyledInputComponent, StyledInputProps, StyledTextAreaComponent, StyledTextAreaProps };
