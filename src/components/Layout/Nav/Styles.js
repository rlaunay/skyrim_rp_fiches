import styled from 'styled-components';
import { Flex } from '../../common/Wrapper/Flex';

const activeNav = 'active-nav';

export const NavFlex = styled(Flex).attrs({ activeNav })`
	visibility: hidden;
	pointer-events: none;

	border-right: 2px solid ${({ theme }) => theme.colorPrimary};
	overflow-x: hidden;
	overflow-y: auto;
	scrollbar-color: ${({ theme }) => theme.colorPrimary}
		${({ theme }) => theme.colorDark};
	scrollbar-width: thin;

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colorDark};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colorPrimary};
		border-radius: 20px;
		border: 3px solid ${({ theme }) => theme.colorDark};
	}

	width: 0px;
	transition: 0.2s;

	&.${activeNav} {
		visibility: visible;
		pointer-events: auto;
		width: 300px;
	}

	@media (max-width: 1000px) {
		position: fixed;
		width: 0px;
		top: 50px;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 200;

		&.${activeNav} {
			right: 300px;
		}
	}
`;

export const Backdrop = styled.div.attrs({ activeNav })`
	display: none;

	@media (max-width: 1000px) {
		display: block;
		pointer-events: none;
		position: fixed;
		top: 50px;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: ${({ theme }) => theme.colorDark};
		opacity: 0;
		transition: 0.3s;
		z-index: -100;

		&.${activeNav} {
			pointer-events: auto;
			opacity: 0.6;
			z-index: 100;
		}
	}
`;
