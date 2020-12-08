import styled from 'styled-components';
import { Flex } from './../../common/Wrapper/Flex';

export const FlexHeader = styled(Flex)`
	border-bottom: 2px solid ${({ theme }) => theme.colorPrimary};
	padding: 0 10px;

	& > * {
		margin: 0 10px;
	}
`;

export const HeadTitle = styled.h1`
	margin-right: auto;
`;
