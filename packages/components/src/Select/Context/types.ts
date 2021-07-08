import React from 'react';

import { SelectProps } from 'components/Select';

import { SelectedOption } from '../types';

type KeySource = 'textField' | 'listBox' | 'option';

export type SelectContextData = {
	readonly aspectSize: NonNullable<SelectProps['aspectSize']>;
	readonly inputValue: string;
	readonly isDisabled: NonNullable<SelectProps['isDisabled']>;
	readonly isError: NonNullable<SelectProps['isError']>;
	readonly isOpen: boolean;
	readonly isSuccess: NonNullable<SelectProps['isSuccess']>;
	readonly isAutocomplete: NonNullable<SelectProps['isAutocomplete']>;
	readonly isMultiSelect: NonNullable<SelectProps['isMultiSelect']>;
	readonly onClearOptions: () => void;
	readonly onKeyPressed: (from: KeySource, ev: React.KeyboardEvent) => void;
	readonly onOptionClicked: React.HTMLAttributes<HTMLLIElement>['onClick'];
	readonly onShowPopover: (show: boolean) => void;
	readonly selectedOptions: Record<string, SelectedOption>;
	readonly variant: NonNullable<SelectProps['variant']>;
};
