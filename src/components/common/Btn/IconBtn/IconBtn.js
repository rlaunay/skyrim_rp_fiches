import styled from 'styled-components';

export const IconBtn = styled.button`
	width: ${({ size }) => size || '40px'};
	height: ${({ size }) => size || '40px'};
	background-color: ${({ theme }) => theme.colorPrimary};
	border-radius: 50%;
	padding: 5px;
	margin: 2px;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	cursor: pointer;
	border: none;
	transition: filter 300ms;

	&:hover {
		filter: brightness(1.2);
	}

	& svg {
		fill: ${({ theme }) => theme.colorDark};
		width: ${({ iconSize }) => iconSize || '20px'};
		height: ${({ iconSize }) => iconSize || '20px'};
	}
`;
