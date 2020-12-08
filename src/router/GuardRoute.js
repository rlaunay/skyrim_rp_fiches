import { Route } from 'react-router-dom';
import Error404 from '../components/Error/Error404';

const GuardRoute = (props) => {
	if (props.guard) {
		return <Route {...props} />;
	}
	return <Route {...props} component={Error404} />;
};

export default GuardRoute;
