import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { LoadingPage } from '../../pages';
import { Navbar } from '../navbar';

const PrivateRoute = ({ component: Component, ...props }) => {
	const { user } = useSelector((state) => state.auth);

	// if (loading) {
	// 	return <LoadingPage />;
	// }

	return (
		<>
			<Navbar visible={false} />
			{
				!user || !props?.allowedRoles?.includes(user?.role) ? (
					<Navigate
						to={{ pathname: '/login', state: { from: props.location, role: props.allowedRoles[0] } }}
						replace
					/>
				) : (
					<Component {...props} />
				)
			}
		</>
	);
};

export { PrivateRoute };
