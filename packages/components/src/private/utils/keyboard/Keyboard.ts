import { ArrowDown, ArrowUp, BackSpace, End, Enter, Escape, Home, Space, Tab } from './keys/index';

type Key = number | string;

const Keyboard = {
	isArrowDown(code: Key) {
		return new ArrowDown().isKey(code);
	},
	isArrowUp(code: Key) {
		return new ArrowUp().isKey(code);
	},
	isBackSpace(code: Key) {
		return new BackSpace().isKey(code);
	},
	isEnd(code: Key) {
		return new End().isKey(code);
	},
	isEnter(code: Key) {
		return new Enter().isKey(code);
	},
	isEscape(code: Key) {
		return new Escape().isKey(code);
	},
	isHome(code: Key) {
		return new Home().isKey(code);
	},
	isLetterOrNumber(keyValue: string) {
		const regex = /^[A-Za-z0-9]+$/;

		return keyValue.length === 1 && !!keyValue.match(regex);
	},
	isSpace(code: Key) {
		return new Space().isKey(code);
	},
	isTab(code: Key) {
		return new Tab().isKey(code);
	}
};

export default Keyboard;
