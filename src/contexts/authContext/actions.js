export const LOGIN = 'LOGIN';
export const login = () => ({
	type: LOGIN,
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSucess = (user) => ({
	type: LOGIN_SUCCESS,
	payload: user,
});

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const loginFail = () => ({
	type: LOGIN_FAIL,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
	type: LOGOUT,
});
