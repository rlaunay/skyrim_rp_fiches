import styled from 'styled-components';

export const SubmitBtn = styled.input.attrs({
	type: 'submit',
})`
	background-color: ${({ theme }) => theme.colorDark};
	color: ${({ theme }) => theme.colorPrimary};
	outline: none;
	cursor: pointer;
	border: none;
	font-size: 20px;
	border-radius: 50px;
	padding: 10px 20px;
	margin: 20px 0;

	background-image: linear-gradient(
		120deg,
		transparent 0%,
		transparent 50%,
		${({ theme }) => theme.colorPrimary} 50%
	);
	background-size: 220%;

	transition: 0.3s;

	&:hover {
		background-position: 100%;
		color: ${({ theme }) => theme.colorDark};
		transform: translateY(-3px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
	}

	&:active {
		transform: translateY(-1px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
	}
`;
