import { LOADING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './actions';

export const authReducer = (state, action) => {
	switch (action.type) {
		case LOADING:
			return { ...state, isLoading: true };
		case LOGIN_SUCCESS:
			return {
				isLoading: false,
				isLoggedIn: true,
				user: { ...action.payload },
			};
		case LOGIN_FAIL:
			return {
				...state,
				isLoading: false,
			};
		case LOGOUT:
			return {
				isLoading: false,
				isLoggedIn: false,
				user: null,
			};
		default:
			return state;
	}
};
