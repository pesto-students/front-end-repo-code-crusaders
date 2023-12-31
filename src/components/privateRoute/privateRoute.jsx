import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { LoadingPage } from '../../pages';
import { Navbar } from '../navbar';

const PrivateRoute = ({ component: Component, ...props }) => {
	const { user } = useSelector((state) => state.auth);

	console.log('Private route', user);

	// if (loading) {
	// 	return <LoadingPage />;
	// }

	return (
		<>
			<Navbar visible={false} />
			{
				!user || !props?.allowedRoles?.includes(user?.role) ? (
					<Navigate
						to={{ pathname: '/login', state: { from: props.location } }}
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