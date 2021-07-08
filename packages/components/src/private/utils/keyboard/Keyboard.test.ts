import Keyboard from '.';

describe('Testing Keyboard class', () => {
	it('should return true if key which or key code are the ones for the Enter key', () => {
		expect(Keyboard.isEnter(13)).toBe(true);
		expect(Keyboard.isEnter('Enter')).toBe(true);
	});

	it('should return false when key which or key code are not the ones for the Enter key', () => {
		expect(Keyboard.isEnter(5)).toBe(false);
		expect(Keyboard.isEnter('515')).toBe(false);
	});

	it('should return true if key which or key code are the ones for the Escape key', () => {
		expect(Keyboard.isEscape(27)).toBe(true);
		expect(Keyboard.isEscape('Escape')).toBe(true);
	});

	it('should return false when key which or key code are not the ones for the Escape key', () => {
		expect(Keyboard.isEscape(54)).toBe(false);
		expect(Keyboard.isEscape('sknk')).toBe(false);
	});

	it('should return true if key which or key code are the ones for the ArrowDown key', () => {
		expect(Keyboard.isArrowDown(40)).toBe(true);
		expect(Keyboard.isArrowDown('ArrowDown')).toBe(true);
	});

	it('should return false if key which or key code are the ones for the ArrowDown key', () => {
		expect(Keyboard.isArrowDown(70)).toBe(false);
		expect(Keyboard.isArrowDown('Ar54n')).toBe(false);
	});

	it('should return true if key which or key code are the ones for the ArrowUp key', () => {
		expect(Keyboard.isArrowUp(38)).toBe(true);
		expect(Keyboard.isArrowUp('ArrowUp')).toBe(true);
	});

	it('should return false if key which or key code are the ones for the ArrowUp key', () => {
		expect(Keyboard.isArrowUp(70)).toBe(false);
		expect(Keyboard.isArrowUp('Ar54n')).toBe(false);
	});

	it('should return true if key which or key code are the ones for the Tab key', () => {
		expect(Keyboard.isTab(9)).toBe(true);
		expect(Keyboard.isTab('Tab')).toBe(true);
	});

	it('should return false if key which or key code are the ones for the Tab key', () => {
		expect(Keyboard.isTab(70)).toBe(false);
		expect(Keyboard.isTab('Ar54n')).toBe(false);
	});

	it('should return true if key which or key code are the ones for the End key', () => {
		expect(Keyboard.isEnd(8)).toBe(true);
		expect(Keyboard.isEnd('End')).toBe(true);
	});

	it('should return false if key which or key code are the ones for the End key', () => {
		expect(Keyboard.isEnd(70)).toBe(false);
		expect(Keyboard.isEnd('Ar54n')).toBe(false);
	});

	it('should return true if key which or key code are the ones for the Home key', () => {
		expect(Keyboard.isHome(36)).toBe(true);
		expect(Keyboard.isHome('Home')).toBe(true);
	});

	it('should return false if key which or key code are the ones for the Home key', () => {
		expect(Keyboard.isHome(70)).toBe(false);
		expect(Keyboard.isHome('Ar54n')).toBe(false);
	});

	it('should return true if key which or key code are the ones for the Backspace key', () => {
		expect(Keyboard.isBackSpace(8)).toBe(true);
		expect(Keyboard.isBackSpace('Backspace')).toBe(true);
	});

	it('should return false if key which or key code are the ones for the Backspace key', () => {
		expect(Keyboard.isBackSpace(70)).toBe(false);
		expect(Keyboard.isBackSpace('Ar54n')).toBe(false);
	});

	it('should return true if key which or key code are the ones for the Space key', () => {
		expect(Keyboard.isSpace(32)).toBe(true);
		expect(Keyboard.isSpace(' ')).toBe(true);
	});

	it('should return false if key which or key code are the ones for the Space key', () => {
		expect(Keyboard.isSpace(70)).toBe(false);
		expect(Keyboard.isSpace('Ar54n')).toBe(false);
	});

	it('should return true if key value is a letter or number', () => {
		expect(Keyboard.isLetterOrNumber('s')).toBe(true);
		expect(Keyboard.isLetterOrNumber('g')).toBe(true);
		expect(Keyboard.isLetterOrNumber('o')).toBe(true);
		expect(Keyboard.isLetterOrNumber('4')).toBe(true);
		expect(Keyboard.isLetterOrNumber('0')).toBe(true);
		expect(Keyboard.isLetterOrNumber('7')).toBe(true);
	});

	it('should return false if key value is not a letter nor number', () => {
		expect(Keyboard.isLetterOrNumber('Meta')).toBe(false);
		expect(Keyboard.isLetterOrNumber('Escape')).toBe(false);
		expect(Keyboard.isLetterOrNumber('Tab')).toBe(false);
		expect(Keyboard.isLetterOrNumber('Backspace')).toBe(false);
	});
});
