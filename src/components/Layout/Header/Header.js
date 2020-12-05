import { FlexHeader } from './Style';
import { IconBtn } from './../../common/Btn/IconBtn/IconBtn';

import { ReactComponent as BurgerIcon } from './../../../static/icon/bars-solid.svg';

const Header = ({ toggleHandler }) => {
	return (
		<FlexHeader
			as="header"
			height="50px"
			alignItems="center"
			bgColor="colorDark"
			color="colorPrimary"
		>
			<IconBtn onClick={toggleHandler} size="40px">
				<BurgerIcon />
			</IconBtn>
			<h1>Skyrim Fiches</h1>
		</FlexHeader>
	);
};

export default Header;
