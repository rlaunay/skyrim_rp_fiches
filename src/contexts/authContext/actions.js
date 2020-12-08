export const LOADING = 'LOADING';
export const loading = () => ({
	type: LOADING,
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
