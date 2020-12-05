import { Flex } from './../../components/common/Wrapper/Flex';
import { Main, FlexGrow } from './Styles';

import Header from '../../components/Layout/Header/Header';
import Navigation from '../../components/Layout/Nav/Navigation';
import { useChars } from '../../contexts/charactersContext';
import { useState } from 'react';

const Layout = ({ children }) => {
	const chars = useChars();
	const [toggleNav, setToggleNav] = useState(false);

	const toggleHandler = () => {
		setToggleNav((prevState) => !prevState);
	};

	return (
		<Flex column width="100%" height="100vh">
			<Header toggleHandler={toggleHandler} />
			<FlexGrow>
				<Navigation
					chars={chars}
					toggleNav={toggleNav}
					toggleHandler={toggleHandler}
				/>
				<Main
					as="main"
					column
					alignItems="center"
					bgColor="colorSecondary"
				>
					{children}
				</Main>
			</FlexGrow>
		</Flex>
	);
};

export default Layout;
