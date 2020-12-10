import styled from 'styled-components';
import { Flex } from '../../components/common/Wrapper/Flex';

export const Main = styled(Flex)`
	padding: 25px 0;
	overflow-y: auto;
	flex-grow: 1;

	@media (max-width: 1000px) {
		padding: 0;
	}
`;

export const FlexGrow = styled(Flex)`
	flex-grow: 1;
`;
