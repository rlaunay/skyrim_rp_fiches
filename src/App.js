import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from './config/config';

firebase.initializeApp(firebaseConfig);

const App = () => {
	return (
		<div>
			<h1>Work in progress !!</h1>
		</div>
	);
};

export default App;
