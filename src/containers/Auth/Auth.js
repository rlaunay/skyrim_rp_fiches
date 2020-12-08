import firebase from 'firebase';
import 'firebase/auth';

import { Flex } from './../../components/common/Wrapper/Flex';
import { LoginTitle, LoginCont, Error } from './Styles';
import LogInput from './../../components/common/Input/LogInput';
import { SubmitBtn } from './../../components/common/Btn/SubmitBtn';

import {
	loading,
	loginFail,
	loginSucess,
} from '../../contexts/authContext/actions';
import { useAuth } from '../../contexts/authContext';

import { ReactComponent as UserIcon } from './../../static/icon/user-solid.svg';
import { ReactComponent as PasswordIcon } from './../../static/icon/lock-solid.svg';
import { useState } from 'react';
import { isEmail, isNotEmpty } from '../../utils/form/formCheck';
import { useHistory } from 'react-router-dom';

const Auth = () => {
	const auth = useAuth();
	const history = useHistory();
	const [formData, setFormData] = useState({
		email: { value: '', error: null },
		password: { value: '', error: null },
	});
	const [notFound, setNotFound] = useState(false);

	const loginHandler = async (mail, pwd) => {
		auth.dispatch(loading());
		try {
			const { user } = await firebase
				.auth()
				.signInWithEmailAndPassword(mail, pwd);

			if (user !== null) {
				auth.dispatch(loginSucess(user));
				history.push('/');
			} else {
				auth.dispatch(loginFail());
				firebase.auth().signOut();
				setNotFound(true);
			}
		} catch (error) {
			auth.dispatch(loginFail());
			if (
				error.code === 'auth/user-not-found' ||
				error.code === 'auth/wrong-password'
			) {
				setNotFound(true);
			} else {
				console.log(error.message);
			}
		}
	};

	const submitHandler = (event) => {
		event.preventDefault();
		setNotFound(false);
		const email = formData.email.value;
		const password = formData.password.value;

		const emailValidity = isEmail(email);
		const passwordValidity = isNotEmpty(password);

		const updatedFormData = { ...formData };
		const updatedEmail = { ...updatedFormData['email'] };
		const updatedPassword = { ...updatedFormData['password'] };

		if (!emailValidity) {
			updatedEmail.error = 'Entrez un mail valide !';
		} else {
			updatedEmail.error = null;
		}

		if (passwordValidity) {
			updatedPassword.error = 'Entrez votre mot de passe !';
		} else {
			updatedPassword.error = null;
		}

		updatedFormData['email'] = updatedEmail;
		updatedFormData['password'] = updatedPassword;
		setFormData(updatedFormData);

		if (emailValidity && !passwordValidity) {
			loginHandler(email, password);
		}
	};

	const inputHandler = (event, inputType) => {
		const updatedFormData = { ...formData };
		const updatedInput = { ...updatedFormData[inputType] };
		updatedInput.value = event.target.value;
		updatedFormData[inputType] = updatedInput;
		setFormData(updatedFormData);
	};

	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			height="100%"
			width="100%"
		>
			<form onSubmit={submitHandler}>
				<LoginCont
					column
					width="500px"
					alignItems="center"
					bgColor="colorWhite"
				>
					<LoginTitle primary>Skyrim administration</LoginTitle>
					{notFound ? (
						<Error>Identifiant ou mot de passe incorect !</Error>
					) : null}
					<LogInput
						name="email"
						label="Email"
						placeholder="Tapez votre email"
						icon={<UserIcon />}
						changed={(event) => inputHandler(event, 'email')}
						error={formData.email.error}
					/>
					<LogInput
						name="password"
						label="Mot de passe"
						placeholder="Tapez votre mot de passe"
						icon={<PasswordIcon />}
						changed={(event) => inputHandler(event, 'password')}
						error={formData.password.error}
					/>
					<SubmitBtn value="Connexion" />
				</LoginCont>
			</form>
		</Flex>
	);
};

export default Auth;
