import { useParams } from 'react-router-dom';
import { Flex } from '../../components/common/Wrapper/Flex';

const Character = () => {
	const { id } = useParams();

	return (
		<Flex column>
			<h1>Voici le perso avec l'id : {id}</h1>
			<h2>Rémi Launay</h2>
		</Flex>
	);
};

export default Character;
