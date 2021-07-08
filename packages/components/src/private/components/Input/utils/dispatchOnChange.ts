function dispatchOnChange(ref: React.RefObject<HTMLInputElement>, newValue: string) {
	const currentElement = ref?.current;

	const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;

	nativeInputValueSetter?.call(currentElement, newValue);

	const inputEvent = new InputEvent('input', { bubbles: true });
	currentElement?.dispatchEvent(inputEvent);
	currentElement?.focus();
}

export default dispatchOnChange;
