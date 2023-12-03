import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from '../navbar';

const PrivateRoute = ({ component: Component, ...props }) => {
	const { user } = useSelector((state) => state.auth);

	return (
		<>
			<Navbar />
			{
				// eslint-disable-next-line no-nested-ternary
				user?.roles.find((role) => props?.allowedRoles?.includes(role))
					? <Outlet />
					: user?.id
						? <Navigate to={{ pathname: '/login', state: { from: props.location } }} replace />
						: <Component {...props} />
			}
		</>
	);
};

export { PrivateRoute };
