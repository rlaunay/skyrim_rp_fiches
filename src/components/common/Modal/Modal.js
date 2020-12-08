import styled from 'styled-components';
import { Backdrop } from '../Loader/Backdrop';
import { Flex } from '../Wrapper/Flex';

const ModalContainer = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 20px;
	background-color: ${({ theme }) => theme.colorWhite};
	overflow: hidden;
	border-radius: 15px;
`;

const ModalTitle = styled.h1`
	font-size: 20px;
	text-align: center;
	padding: 10px;
	width: 100%;
	color: ${({ theme }) => theme.colorPrimary};
	background-color: ${({ theme }) => theme.colorDark};
`;

const Modal = ({ children, title }) => (
	<Backdrop>
		<ModalContainer>
			<ModalTitle>{title}</ModalTitle>
			<Flex width="80%" bgColor="colorWhite" margin="20px 0">
				{children}
			</Flex>
		</ModalContainer>
	</Backdrop>
);

export default Modal;
