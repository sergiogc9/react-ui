import React from 'react';
import { useUpdateEffect } from '@sergiogc9/react-hooks';

import StyledLoadingBar, { StyledLoadingBarProgress } from './styled';
import { LoadingBarProps } from './types';

const LoadingBar: React.FC<LoadingBarProps> = ({ isVisible, ...rest }) => {
	const [isBarEnabled, setIsBarEnabled] = React.useState(isVisible);
	const [percentage, setPercentage] = React.useState(0);
	const [isOneSecondExceeded, setIsOneSecondExceeded] = React.useState(false);

	const oneSecondTimeoutRef = React.useRef<NodeJS.Timeout>();
	const timeoutRef = React.useRef<NodeJS.Timeout>();

	const changePercentage = React.useCallback((newPercentage: number, nextDelayMS: number) => {
		clearTimeout(timeoutRef.current!);
		setPercentage(newPercentage);
		timeoutRef.current = setTimeout(() => {
			if (newPercentage === 0) changePercentage(55, 200);
			else if (newPercentage <= 55) changePercentage(70, 300);
			else if (newPercentage <= 70) changePercentage(80, 4500);
			else if (newPercentage < 90) changePercentage(newPercentage + 1, 2000);
		}, nextDelayMS);
	}, []);

	const startBarAnimation = React.useCallback(() => {
		changePercentage(0, 0);
		setIsBarEnabled(true);
		setIsOneSecondExceeded(false);
		oneSecondTimeoutRef.current = setTimeout(() => setIsOneSecondExceeded(true), 1000);
	}, [changePercentage]);

	const finishBarAnimation = React.useCallback(() => {
		clearTimeout(timeoutRef.current!);
		setPercentage(100);
		timeoutRef.current = setTimeout(() => setIsBarEnabled(false), 200);
	}, []);

	useUpdateEffect(() => {
		if (isOneSecondExceeded && !isVisible) finishBarAnimation();
	}, [isOneSecondExceeded]); // eslint-disable-line react-hooks/exhaustive-deps

	React.useEffect(() => {
		if (isVisible) startBarAnimation();
		else if (isOneSecondExceeded) finishBarAnimation();
	}, [isVisible]); // eslint-disable-line react-hooks/exhaustive-deps

	React.useEffect(() => {
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			clearTimeout(timeoutRef.current!);
			clearTimeout(oneSecondTimeoutRef.current!);
		};
	}, []);

	return (
		<StyledLoadingBar data-testid="loadingBar" duration="0.1s" isVisible={isBarEnabled} {...rest}>
			<StyledLoadingBarProgress data-testid="loadingBarProgress" percentage={percentage} {...rest} />
		</StyledLoadingBar>
	);
};

export default React.memo(LoadingBar);
