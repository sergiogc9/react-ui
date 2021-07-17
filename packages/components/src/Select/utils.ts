import React from 'react';

import { SelectedOption, SelectProps } from './types';

const getInputLabelFromSelectedOptions = (selectedOptions: Record<string, SelectedOption>) => {
	const values = Object.keys(selectedOptions);
	if (values.length === 1) return selectedOptions[values[0]].label;
	return '';
};

const getElementText = (element: React.ReactElement): string => {
	if (typeof element === 'string') return element;

	if (Array.isArray(element.props.children)) return element.props.children.map(getElementText).join('');

	if (React.isValidElement(element.props.children)) return getElementText(element.props.children);

	return element.props.children;
};

const getOptionsData = (children: React.ReactNode): Record<string, string> => {
	const optionsDataArray =
		React.Children.map(children, element => {
			if (!React.isValidElement(element)) return {};

			return {
				label: getElementText(element) || '',
				value: element.props.id
			};
		}) || [];

	const optionsData = optionsDataArray.reduce<Record<string, string>>((prev, current) => {
		const newObj = { ...prev };
		if (current.value) newObj[current.value] = current.label || '';

		return newObj;
	}, {});

	return optionsData;
};

const getSelectOptions = (
	defaultValue: SelectProps['defaultValue'],
	value: SelectProps['value'],
	children: React.ReactNode
): Record<string, SelectedOption> => {
	const optionsData = getOptionsData(children);

	let finalValues: string[] = [];
	if (value) {
		if (Array.isArray(value)) finalValues = value;
		else finalValues = [value];
	} else if (defaultValue) {
		if (Array.isArray(defaultValue)) finalValues = defaultValue;
		else finalValues = [defaultValue];
	}

	return finalValues.reduce<Record<string, SelectedOption>>((prev, current) => {
		const newObj = { ...prev };
		newObj[current] = { label: optionsData[current] || '' };
		return newObj;
	}, {});
};

const getSelectedIds = (selectedOptions: Record<string, SelectedOption>, isMultiSelect: boolean) => {
	if (isMultiSelect) return Object.keys(selectedOptions);

	return Object.keys(selectedOptions).length ? Object.keys(selectedOptions)[0] : null;
};

const isStringIncluded = (baseString: string, lookupString: string) =>
	baseString.toLowerCase().includes(lookupString.toLowerCase());

export { getSelectOptions, getElementText, getInputLabelFromSelectedOptions, getSelectedIds, isStringIncluded };
