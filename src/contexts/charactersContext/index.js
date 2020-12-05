import { createContext, useContext, useReducer } from 'react';
import { charactersReducer } from './reducer';

const initialState = [
	{ id: 0, prenom: 'Rémi', nom: 'Launay' },
	{ id: 1, prenom: 'Clémence', nom: 'Landais' },
];

const CharactersContext = createContext(initialState);

export const CharactersProvider = ({ children }) => {
	const [state, dispatch] = useReducer(charactersReducer, initialState);
	return (
		<CharactersContext.Provider value={{ state, dispatch }}>
			{children}
		</CharactersContext.Provider>
	);
};

export const useChars = () => {
	return useContext(CharactersContext);
};
