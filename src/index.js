import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { AuthProvider } from './contexts/authContext';
import { CharactersProvider } from './contexts/charactersContext';

ReactDOM.render(
	<React.StrictMode>
		<CharactersProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</CharactersProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
