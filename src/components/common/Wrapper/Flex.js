import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	width: ${({ width = 'auto' }) => width};
	height: ${({ height = 'auto' }) => height};
	flex-direction: ${({ column }) => (column ? 'column' : 'row')};
	justify-content: ${({ justifyContent = 'initial' }) => justifyContent};
	align-items: ${({ alignItems = 'initial' }) => alignItems};
	background-color: ${({ bgColor, theme }) => theme[bgColor] || 'initial'};
	color: ${({ color, theme }) => theme[color] || 'initial'};
	margin: ${({ margin }) => margin || 0};
	padding: ${({ padding }) => padding || 0};
`;
