import { keyframes } from 'styled-components';

import { ToastsProps } from '../types';

const getToastAnimation = (placement: ToastsProps['placement']) => {
	if (placement === 'bottom') {
		return keyframes`
            0% {
                max-height: 0;
                transform: translateY(100vh);
            }
            50% {
                transform: translateY(100vh);
            }
            80% {
                max-height: 100px;
            }
            100% {
                max-height: 500px;
                transform: translateY(0);
            }
    `;
	}

	if (placement === 'bottom-left' || placement === 'top-left') {
		return keyframes`
            0% {
                max-height: 0;
                transform: translateX(-200%);
            }
            50% {
                transform: translateX(-200%);
            }
            80% {
                max-height: 100px;
            }
            100% {
                max-height: 500px;
                transform: translateX(0);
            }
    `;
	}

	if (placement === 'bottom-right' || placement === 'top-right') {
		return keyframes`
            0% {
                max-height: 0;
                transform: translateX(200%);
            }
            50% {
                transform: translateX(200%);
            }
            80% {
                max-height: 100px;
            }
            100% {
                max-height: 500px;
                transform: translateX(0);
            }
    `;
	}

	return keyframes`
        0% {
            max-height: 0;
            transform: translateY(-100vh);
        }
        50% {
            transform: translateY(-100vh);
        }
        80% {
            max-height: 100px;
        }
        100% {
            max-height: 500px;
            transform: translateY(0);
        }
    `;
};

export { getToastAnimation };
