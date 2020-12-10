import { LOADING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './actions';

export const authReducer = (state, action) => {
	switch (action.type) {
		case LOADING:
			return { ...state, notFound: false, isLoading: true };
		case LOGIN_SUCCESS:
			return {
				notFound: false,
				isLoading: false,
				isLoggedIn: true,
				user: { ...action.payload },
			};
		case LOGIN_FAIL:
			return {
				...state,
				notFound: true,
				isLoading: false,
			};
		case LOGOUT:
			return {
				notFound: false,
				isLoading: false,
				isLoggedIn: false,
				user: null,
			};
		default:
			return state;
	}
};
