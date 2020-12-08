import { FlexHeader, HeadTitle } from './Style';
import { IconBtn } from './../../common/Btn/IconBtn/IconBtn';

import { ReactComponent as BurgerIcon } from './../../../static/icon/bars-solid.svg';
import { ReactComponent as PlusIcon } from './../../../static/icon/plus-solid.svg';
import { ReactComponent as LogoutIcon } from './../../../static/icon/sign-out-alt-solid.svg';

const Header = ({ toggleHandler, auth, logout, navigation }) => {
	let AdminIcon = null;
	if (auth.state.isLoggedIn) {
		AdminIcon = (
			<>
				<IconBtn onClick={navigation}>
					<PlusIcon />
				</IconBtn>
				<IconBtn onClick={logout}>
					<LogoutIcon />
				</IconBtn>
			</>
		);
	}
	return (
		<FlexHeader
			as="header"
			height="50px"
			alignItems="center"
			bgColor="colorDark"
			color="colorPrimary"
		>
			<IconBtn onClick={toggleHandler}>
				<BurgerIcon />
			</IconBtn>
			<HeadTitle>Skyrim Fiches</HeadTitle>
			{AdminIcon}
		</FlexHeader>
	);
};

export default Header;
