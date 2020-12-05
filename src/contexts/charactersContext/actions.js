export const ADD_CHARACTER = 'ADD_CHARACTER';
export const addCharacter = (newCharacter) => ({
	type: ADD_CHARACTER,
	payload: newCharacter,
});

export const EDIT_CHARACTER = 'EDIT_CHARACTER';
export const editCharacter = (character) => ({
	type: ADD_CHARACTER,
	payload: character,
});

export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export const removeCharacter = (id) => ({
	type: ADD_CHARACTER,
	payload: id,
});
