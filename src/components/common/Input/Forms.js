import styled from 'styled-components';
import { Flex } from './../Wrapper/Flex';

export const Input = styled.input`
	position: relative;
	width: 100%;
	font-size: 20px;
	padding: 7px;
	padding-left: 40px;
	border: none;
	outline: none;
	border-bottom: 1px solid ${({ theme }) => theme.colorDark};
	color: ${({ theme }) => theme.colorDark};

	transition: 0.3s;

	&:focus {
		border-bottom: 1px solid ${({ theme }) => theme.colorPrimary};
	}
	&:focus ~ svg {
		color: ${({ theme }) => theme.colorPrimary};
	}

	@media (max-width: 600px) {
		font-size: 16px;
		padding: 5px;
		padding-left: 35px;
	}
`;

export const Label = styled.label`
	color: ${({ theme }) => theme.colorDark};
	font-size: 20px;
	margin: 10px 0;
`;

export const InputIcon = styled(Flex)`
	position: relative;

	& svg {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 10px;
		height: 20px;
		width: 20px;
		color: ${({ theme }) => theme.colorDark};
		transition: 0.3s;

		@media (max-width: 600px) {
			height: 18px;
			width: 18px;
		}
	}

	&[data-error]:after {
		content: attr(data-error);
		position: absolute;
		top: 50px;
		left: 0;
		color: ${({ theme }) => theme.colorError};
		font-size: 16px;
	}

	&[data-error] input {
		border-bottom: 1px solid ${({ theme }) => theme.colorError};
	}
`;
