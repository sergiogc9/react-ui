import React from 'react';
import { DecoratorFn } from '@storybook/react';

const ImageDecorator: DecoratorFn = (story, context) => {
	const [isTimeoutFinished, setIsTimeoutFinished] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => setIsTimeoutFinished(true), 1500);
	}, []);

	const newContext = {
		...context,
		args: {
			...context.args,
			size: context.args.size ?? 200,
			src: isTimeoutFinished ? context.args.src : undefined
		}
	};

	return story(newContext);
};

export default ImageDecorator;
