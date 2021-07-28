import React from 'react';
import { useIsMounted } from '@sergiogc9/react-hooks';

import Alert from 'components/Alert';
import Box from 'components/Box';
import IconButton from 'components/IconButton';
import Icon from 'components/Icon';

import ToastsContext from '../Context';
import StyledToast, { AnimatedToastWrapper } from './styled';
import { getToastAnimation } from './utils';
import { ToastProps } from './types';

const Toast: React.FC<ToastProps> = ({ children, toastOptions, visibleStatus, ...rest }) => {
	const {
		actionContent,
		duration = 5000,
		hasCloseBtn = false,
		hasIcon = true,
		key,
		message,
		onClose,
		status = 'info'
	} = toastOptions;

	const closeTimeoutRef = React.useRef<number>();
	const isMounted = useIsMounted();

	const { onCloseToast, onToastClosed, placement } = React.useContext(ToastsContext);

	const closeToast = React.useCallback(() => {
		clearTimeout(closeTimeoutRef.current);

		if (isMounted()) onCloseToast(key);
	}, [isMounted, key, onCloseToast]);

	React.useEffect(() => {
		if (typeof duration === 'number') {
			closeTimeoutRef.current = setTimeout(closeToast, [duration]);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const onToastAnimationEnded = React.useCallback(() => {
		if (visibleStatus === 'closing') {
			onToastClosed(key);
			if (onClose) onClose();
		}
	}, [key, onClose, onToastClosed, visibleStatus]);

	const animation = React.useMemo(() => getToastAnimation(placement), [placement]);

	return (
		<AnimatedToastWrapper
			animation={animation}
			data-testid="toast"
			duration="0.5s"
			isVisible={visibleStatus === 'open'}
			onAnimationEnd={onToastAnimationEnded}
		>
			<StyledToast status={status} {...rest}>
				{hasIcon && <Alert.Icon />}
				<Alert.Text mr="auto">{message}</Alert.Text>
				{actionContent && <Box ml={2}>{actionContent}</Box>}
				{hasCloseBtn && (
					<IconButton
						aspectSize="s"
						bg="transparent"
						color="currentColor"
						justifySelf="flex-end"
						ml={2}
						onClick={closeToast}
					>
						<Icon aspectSize="s" icon="close" styling="outlined" />
					</IconButton>
				)}
			</StyledToast>
		</AnimatedToastWrapper>
	);
};

export default React.memo(Toast);
