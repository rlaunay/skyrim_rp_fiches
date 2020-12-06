import { Route, Switch } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

import Home from './../components/Home/Home';
import Character from './../containers/Character/Character';
import Auth from '../containers/Auth/Auth';

const RouterOutlet = () => {
	const auth = useAuth();

	return (
		<Switch>
			{auth.state.isLoggedIn ? (
				<>
					<Route exact path="/edit/:id([0-9]+)">
						route priver
					</Route>
					<Route exact path="/create">
						priver
					</Route>
				</>
			) : null}
			<Route exact path="/admin" component={Auth} />
			<Route exact path="/:id([0-9]+)" component={Character} />
			<Route exact path="/" component={Home} />
			<Route path="*">
				<h1>coné pa</h1>
			</Route>
		</Switch>
	);
};

export default RouterOutlet;
