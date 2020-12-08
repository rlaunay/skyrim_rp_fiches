const { default: styled } = require('styled-components');

export const Title = styled.h1`
	font-size: 24px;
	color: ${({ theme, primary }) =>
		primary ? theme.colorPrimary : theme.colorDark};
`;
