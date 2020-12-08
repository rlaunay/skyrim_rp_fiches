import { Route, Switch } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import GuardRoute from './GuardRoute';

import Home from './../components/Home/Home';
import Character from './../containers/Character/Character';
import Auth from '../containers/Auth/Auth';
import NewCharacter from '../containers/NewCharacter/NewCharacter';
import EditCharacter from '../containers/Character/Edit/Edit';
import Error404 from '../components/Error/Error404';

const RouterOutlet = () => {
	const auth = useAuth();

	return (
		<Switch>
			<GuardRoute
				guard={auth.state.isLoggedIn}
				exact
				path="/edit/:id([0-9]+)"
				component={EditCharacter}
			/>
			<GuardRoute
				guard={auth.state.isLoggedIn}
				exact
				path="/create"
				component={NewCharacter}
			/>
			<GuardRoute
				guard={!auth.state.isLoggedIn}
				exact
				path="/admin"
				component={Auth}
			/>
			<Route exact path="/:id([0-9]+)" component={Character} />
			<Route exact path="/" component={Home} />
			<Route path="*" component={Error404} />
		</Switch>
	);
};

export default RouterOutlet;
