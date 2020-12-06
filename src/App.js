import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import RouterOutlet from './router/RouterOutlet';
import { AuthProvider } from './contexts/authContext';
import { CharactersProvider } from './contexts/charactersContext';

import { firebaseConfig } from './config/config';
import { theme } from './theme/theme';

firebase.initializeApp(firebaseConfig);

const App = () => {
	return (
		<CharactersProvider>
			<AuthProvider>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Layout>
							<RouterOutlet />
						</Layout>
					</BrowserRouter>
				</ThemeProvider>
			</AuthProvider>
		</CharactersProvider>
	);
};

export default App;
