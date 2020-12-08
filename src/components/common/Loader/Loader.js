import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transorm: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.span`
	width: 100px;
	height: 100px;
	display: inline-block;
	position: relative;
	border-radius: 50px;
	border: 6px solid transparent;
	border-top-color: ${({ theme }) => theme.colorPrimary};
	animation: ${spin} 1s linear infinite;

	&:after {
		content: '';
		position: absolute;
		top: 10px;
		bottom: 10px;
		left: 10px;
		right: 10px;
		border-radius: 50px;
		border: 6px solid transparent;
		border-top-color: ${({ theme }) => theme.colorPrimary};
		opacity: 0.8;
		animation: ${spin} 4s linear infinite;
	}

	&:before {
		content: '';
		position: absolute;
		top: 24px;
		bottom: 24px;
		left: 24px;
		right: 24px;
		border-radius: 50px;
		border: 6px solid transparent;
		border-top-color: ${({ theme }) => theme.colorPrimary};
		opacity: 0.5;
		animation: ${spin} 2s linear infinite;
	}
`;
