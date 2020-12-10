import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import RouterOutlet from './router/RouterOutlet';
import { Backdrop } from './components/common/Loader/Backdrop';
import { Loader } from './components/common/Loader/Loader';

import { firebaseConfig } from './config/config';
import { theme } from './theme/theme';

import { useAuth } from './contexts/authContext';
import { logout, loginSucess } from './contexts/authContext/actions';

firebase.initializeApp(firebaseConfig);

const App = () => {
	const auth = useAuth();

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user !== null) {
				auth.dispatch(loginSucess(user));
			} else {
				auth.dispatch(logout());
			}
		});
		// eslint-disable-next-line
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Layout>
					{auth.state.isLoading ? (
						<Backdrop>
							<Loader />
						</Backdrop>
					) : (
						<RouterOutlet />
					)}
				</Layout>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
