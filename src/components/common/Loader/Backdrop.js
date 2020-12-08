import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
	opacity: 0.8;
	z-index: 10000;
`;
