import { ADD_CHARACTER, EDIT_CHARACTER, REMOVE_CHARACTER } from './actions';

export const charactersReducer = (state, action) => {
	switch (action.type) {
		case ADD_CHARACTER:
			return [...state, { ...action.payload }];
		case EDIT_CHARACTER:
			return state.map((character) => {
				if (character.id === action.payload.id) {
					return { ...character, ...action.payload };
				} else {
					return { ...character };
				}
			});
		case REMOVE_CHARACTER:
			return state.filter((character) => character.id !== action.payload);
		default:
			return state;
	}
};
