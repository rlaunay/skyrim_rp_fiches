import firebase from 'firebase';
import 'firebase/auth';

import { Flex } from './../../components/common/Wrapper/Flex';
import { Main, FlexGrow } from './Styles';

import Header from '../../components/Layout/Header/Header';
import Navigation from '../../components/Layout/Nav/Navigation';

import { useChars } from '../../contexts/charactersContext';
import { useAuth } from '../../contexts/authContext';
import { logout, loading } from '../../contexts/authContext/actions';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Layout = ({ children }) => {
	const chars = useChars();
	const auth = useAuth();
	const [toggleNav, setToggleNav] = useState(false);
	const history = useHistory();

	const toggleHandler = () => {
		setToggleNav((prevState) => !prevState);
	};

	const navigationHandler = () => {
		history.push('/create');
	};

	const logoutHandler = async () => {
		auth.dispatch(loading());
		try {
			await firebase.auth().signOut();
			auth.dispatch(logout());
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Flex column width="100%" height="100vh">
			<Header
				navigation={navigationHandler}
				logout={logoutHandler}
				toggleHandler={toggleHandler}
				auth={auth}
			/>
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
