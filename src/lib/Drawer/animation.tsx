import { keyframes } from 'styled-components';

export const popLeft = keyframes`
        0% {
            transform: translateX(-100%);
        }

        100% {
            transform: translateX(0);

        }
`;

export const popRight = keyframes`
        0% {
            transform: translateX(100%);
        }

        100% {
            transform: translateX(0);

        }
`;

export const popTop = keyframes`
        0% {
            transform: translateY(-100%);
        }

        100% {
            transform: translateY(0);

        }
`;
export const popBottom = keyframes`
        0% {
            transform: translateY(100%);
        }

        100% {
            transform: translateY(0);

        }
`;

export const pushLeft = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
        }
`;

export const pushRight = keyframes`
0% {
        transform: translateX(0);
    }
    100% {
            transform: translateX(100%);
        }
`;

export const pushTop = keyframes`
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
        }
`;

export const pushBottom = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
        }
`;
