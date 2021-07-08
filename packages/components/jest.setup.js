class ResizeObserverFake {
	constructor(callback) {
		callback();
	}

	// eslint-disable-next-line class-methods-use-this
	observe() {}

	// eslint-disable-next-line class-methods-use-this
	disconnect() {}
}

global.ResizeObserver = ResizeObserverFake;
