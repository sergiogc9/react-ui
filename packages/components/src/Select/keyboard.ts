import React from 'react';

import Keyboard from 'components/private/utils/keyboard';

import { SelectContextData } from './Context';

type OnKeyPressHelpers = {
	clearOptions: () => void;
	isAutocomplete: boolean;
	isOpen: boolean;
	listBoxElement: HTMLUListElement;
	onAlphanumericKeyPressed: (ev: React.KeyboardEvent) => void;
	setIsOpen: (isOpen: boolean) => void;
	textFieldInput: HTMLInputElement;
};

const focusSelectInput = (textFieldInput: HTMLInputElement) => {
	if (textFieldInput) setTimeout(() => textFieldInput.focus(), 0);
};

const focusFirstOption = (listBoxElement: HTMLUListElement) => {
	const firstOption = listBoxElement.querySelector('li');
	if (firstOption) setTimeout(() => firstOption.focus(), 0);
};

const focusLastOption = (listBoxElement: HTMLUListElement) => {
	const lastOption = listBoxElement.querySelector<HTMLLIElement>('li:last-child');
	if (lastOption) setTimeout(() => lastOption.focus(), 0);
};

const handleListBoxPressedKey = (ev: React.KeyboardEvent, helpers: OnKeyPressHelpers) => {
	const { onAlphanumericKeyPressed, setIsOpen, textFieldInput } = helpers;

	if (Keyboard.isTab(ev.key) || Keyboard.isEscape(ev.key)) {
		ev.preventDefault();

		setIsOpen(false);
		focusSelectInput(textFieldInput);
	} else if (Keyboard.isLetterOrNumber(ev.key)) {
		onAlphanumericKeyPressed(ev);
	}
};

const handleOptionPressedKey = (ev: React.KeyboardEvent, helpers: OnKeyPressHelpers) => {
	const { listBoxElement } = helpers;

	if (Keyboard.isArrowUp(ev.key)) {
		ev.preventDefault();

		const currentOption = ev.target as HTMLLIElement;
		const previousOption = currentOption.previousSibling;

		if (previousOption) (previousOption as HTMLLIElement).focus();
		else focusLastOption(listBoxElement);
	} else if (Keyboard.isArrowDown(ev.key)) {
		ev.preventDefault();

		const currentOption = ev.target as HTMLLIElement;
		const nextOption = currentOption.nextSibling;

		if (nextOption) (nextOption as HTMLLIElement).focus();
		else focusFirstOption(listBoxElement);
	} else if (Keyboard.isEnter(ev.key) || Keyboard.isSpace(ev.key)) {
		ev.preventDefault();

		const currentOption = ev.target as HTMLLIElement;
		currentOption.click();
	}
};

const handleTextFieldPressedKey = (ev: React.KeyboardEvent, helpers: OnKeyPressHelpers) => {
	const { clearOptions, isAutocomplete, isOpen, listBoxElement, onAlphanumericKeyPressed, setIsOpen } = helpers;

	if (Keyboard.isEnter(ev.key)) {
		ev.preventDefault();

		if (isOpen) {
			setIsOpen(false);
			return;
		}

		setIsOpen(true);
		focusFirstOption(listBoxElement);
	} else if (Keyboard.isEscape(ev.key)) {
		ev.preventDefault();

		setIsOpen(false);
	} else if (Keyboard.isBackSpace(ev.key)) {
		if (!isAutocomplete) {
			ev.preventDefault();

			clearOptions();
		}
	} else if (Keyboard.isArrowDown(ev.key)) {
		ev.preventDefault();

		setIsOpen(true);
		focusFirstOption(listBoxElement);
	} else if (Keyboard.isArrowUp(ev.key)) {
		ev.preventDefault();

		setIsOpen(true);
		focusLastOption(listBoxElement);
	} else if (Keyboard.isLetterOrNumber(ev.key)) {
		onAlphanumericKeyPressed(ev);
	}
};

const handlePressedKey = (
	source: Parameters<SelectContextData['onKeyPressed']>[0],
	ev: Parameters<SelectContextData['onKeyPressed']>[1],
	helpers: OnKeyPressHelpers
) => {
	if (source === 'textField') handleTextFieldPressedKey(ev, helpers);
	else if (source === 'listBox') handleListBoxPressedKey(ev, helpers);
	else handleOptionPressedKey(ev, helpers);
};

export { handlePressedKey };
