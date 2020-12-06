import { NavFlex, Backdrop } from './Styles';
import StyledNavLink from './../../common/Link/StyledNavLink';
import { Flex } from '../../common/Wrapper/Flex';

const Navigation = ({ chars, toggleNav, toggleHandler }) => (
	<>
		<NavFlex
			as="nav"
			column
			alignItems="center"
			width="300px"
			bgColor="colorDark"
			height="100%"
			className={toggleNav ? 'active-nav' : ''}
		>
			<Flex column alignItems="center" width="100%">
				{chars.state.map((char) => (
					<StyledNavLink
						key={char.id}
						to={`/${char.id}`}
					>{`${char.prenom} ${char.nom}`}</StyledNavLink>
				))}
			</Flex>
		</NavFlex>
		<Backdrop
			onClick={toggleHandler}
			className={toggleNav ? 'active-nav' : ''}
		/>
	</>
);

export default Navigation;
