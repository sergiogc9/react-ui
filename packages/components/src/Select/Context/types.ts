import React from 'react';

import { SelectProps } from 'components/Select';

import { SelectedOption } from '../types';

type KeySource = 'listBox' | 'option' | 'textField';

export type SelectContextData = {
	readonly areExternalOptionsValid: NonNullable<SelectProps['areExternalOptionsValid']>;
	readonly aspectSize: NonNullable<SelectProps['aspectSize']>;
	readonly inputValue: string;
	readonly isAutocomplete: NonNullable<SelectProps['isAutocomplete']>;
	readonly isDisabled: NonNullable<SelectProps['isDisabled']>;
	readonly isError: NonNullable<SelectProps['isError']>;
	readonly isOpen: boolean;
	readonly isSuccess: NonNullable<SelectProps['isSuccess']>;
	readonly isExternalFiltered: NonNullable<SelectProps['isExternalFiltered']>;
	readonly isMultiSelect: NonNullable<SelectProps['isMultiSelect']>;
	readonly onClearOptions: () => void;
	readonly onKeyPressed: (from: KeySource, ev: React.KeyboardEvent) => void;
	readonly onOptionClicked: React.HTMLAttributes<HTMLLIElement>['onClick'];
	readonly onShowPopover: (show: boolean) => void;
	readonly selectedOptions: Record<string, SelectedOption>;
	readonly variant: NonNullable<SelectProps['variant']>;
};
