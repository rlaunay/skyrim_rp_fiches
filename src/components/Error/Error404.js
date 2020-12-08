import { NavLink } from 'react-router-dom';
import { Flex } from '../common/Wrapper/Flex';

const Error404 = () => (
	<Flex column justifyContent="center" width="60%">
		<h1>Oups</h1>
		<h2>La page que vous chercher semble inexistante</h2>
		<h3>
			Vous pouvez revenir à l'<NavLink to="/">Accueil</NavLink>
		</h3>
	</Flex>
);

export default Error404;
