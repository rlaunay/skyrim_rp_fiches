import { useParams } from 'react-router-dom';
import { Flex } from '../../../components/common/Wrapper/Flex';

const EditCharacter = () => {
	const { id } = useParams();
	return (
		<Flex column>
			<h1>Voici le perso avec l'id : {id}</h1>
			<input type="text" value="Rémi Launay" />
		</Flex>
	);
};

export default EditCharacter;
