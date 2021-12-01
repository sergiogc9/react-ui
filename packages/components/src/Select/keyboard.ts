import React from 'react';
import { Keyboard } from '@sergiogc9/react-utils';

import { SelectContextData } from './Context';

type OnKeyPressHelpers = {
	clearOptions: () => void;
	isAutocomplete: boolean;
	isOpen: boolean;
	listBoxRef: React.RefObject<HTMLUListElement>;
	onAlphanumericKeyPressed: (ev: React.KeyboardEvent) => void;
	setIsOpen: (isOpen: boolean) => void;
	textFieldInput: HTMLInputElement;
};

const delayKeyboardActionFn = (fn: (ref: React.RefObject<HTMLUListElement>) => void) => {
	const newFn = (ref: React.RefObject<HTMLUListElement>) => {
		if (ref.current) return fn(ref);

		setTimeout(() => {
			newFn(ref);
		}, 50);

		return undefined;
	};

	return newFn;
};

const focusSelectInput = (textFieldInput: HTMLInputElement) => {
	if (textFieldInput) setTimeout(() => textFieldInput.focus(), 0);
};

const focusFirstOption = delayKeyboardActionFn((listBoxRef: React.RefObject<HTMLUListElement>) => {
	const firstOption = listBoxRef.current?.querySelector('li');
	if (firstOption) setTimeout(() => firstOption.focus(), 0);
});

const focusLastOption = delayKeyboardActionFn((listBoxRef: React.RefObject<HTMLUListElement>) => {
	const lastOption = listBoxRef.current?.querySelector<HTMLLIElement>('li:last-child');
	if (lastOption) setTimeout(() => lastOption.focus(), 0);
});

const handleListBoxPressedKey = (ev: React.KeyboardEvent, helpers: OnKeyPressHelpers) => {
	const { onAlphanumericKeyPressed, setIsOpen, textFieldInput } = helpers;

	if (Keyboard.isKey('Tab', ev.key) || Keyboard.isKey('Escape', ev.key)) {
		ev.preventDefault();

		setIsOpen(false);
		focusSelectInput(textFieldInput);
	} else if (Keyboard.isLetterOrNumber(ev.key)) {
		onAlphanumericKeyPressed(ev);
	}
};

const handleOptionPressedKey = (ev: React.KeyboardEvent, helpers: OnKeyPressHelpers) => {
	const { listBoxRef } = helpers;

	if (Keyboard.isKey('ArrowUp', ev.key)) {
		ev.preventDefault();

		const currentOption = ev.target as HTMLLIElement;
		const previousOption = currentOption.previousSibling;

		if (previousOption) (previousOption as HTMLLIElement).focus();
		else focusLastOption(listBoxRef);
	} else if (Keyboard.isKey('ArrowDown', ev.key)) {
		ev.preventDefault();

		const currentOption = ev.target as HTMLLIElement;
		const nextOption = currentOption.nextSibling;

		if (nextOption) (nextOption as HTMLLIElement).focus();
		else focusFirstOption(listBoxRef);
	} else if (Keyboard.isKey('Enter', ev.key) || Keyboard.isKey('Space', ev.key)) {
		ev.preventDefault();

		const currentOption = ev.target as HTMLLIElement;
		currentOption.click();
	}
};

const handleTextFieldPressedKey = (ev: React.KeyboardEvent, helpers: OnKeyPressHelpers) => {
	const { clearOptions, isAutocomplete, isOpen, listBoxRef, onAlphanumericKeyPressed, setIsOpen } = helpers;

	if (Keyboard.isKey('Enter', ev.key)) {
		ev.preventDefault();

		if (isOpen) {
			setIsOpen(false);
			return;
		}

		setIsOpen(true);
		focusFirstOption(listBoxRef);
	} else if (Keyboard.isKey('Escape', ev.key)) {
		ev.preventDefault();

		setIsOpen(false);
	} else if (Keyboard.isKey('Backspace', ev.key)) {
		if (!isAutocomplete) {
			ev.preventDefault();

			clearOptions();
		}
	} else if (Keyboard.isKey('ArrowDown', ev.key)) {
		ev.preventDefault();

		setIsOpen(true);
		focusFirstOption(listBoxRef);
	} else if (Keyboard.isKey('ArrowUp', ev.key)) {
		ev.preventDefault();

		setIsOpen(true);
		focusLastOption(listBoxRef);
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
