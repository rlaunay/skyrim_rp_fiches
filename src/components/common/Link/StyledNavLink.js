import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'active';

export default styled(NavLink).attrs({ activeClassName })`
	width: 85%;
	text-decoration: none;
	color: ${({ theme }) => theme.colorPrimary};
	box-sizing: border-box;
	font-size: 2rem;
	padding: 1.5rem 3rem;
	border-radius: 10px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	margin: 1rem 0;

	background-image: linear-gradient(
		120deg,
		transparent 0%,
		transparent 50%,
		${({ theme }) => theme.colorPrimary} 50%
	);
	background-size: 220%;

	transition: 0.5s;

	&.${activeClassName}, &:hover {
		background-position: 100%;
		color: ${({ theme }) => theme.colorDark};
		transform: translateX(10px);
	}
`;
