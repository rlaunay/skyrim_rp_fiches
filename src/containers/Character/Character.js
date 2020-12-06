import { useParams } from 'react-router-dom';

const Character = () => {
	const { id } = useParams();

	return <h1>Voici le perso avec l'id : {id}</h1>;
};

export default Character;
