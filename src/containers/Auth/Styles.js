import styled from 'styled-components';
import { Flex } from './../../components/common/Wrapper/Flex';
import { Title } from './../../components/common/Typogrphy/Title';

export const LoginTitle = styled(Title)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	width: 100%;
	background-color: ${({ theme }) => theme.colorDark};
`;

export const LoginCont = styled(Flex)`
	overflow: hidden;
	border-radius: 10px;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const Error = styled.p`
	font-size: 16px;
	color: ${({ theme }) => theme.colorError};
	margin: 0;
	margin-top: 10px;
`;
