import { createContext, useContext, useReducer } from 'react';
import { authReducer } from './reducer';

const initialState = {
	isLoggedIn: false,
	isLoading: true,
	user: null,
};

const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);
	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
