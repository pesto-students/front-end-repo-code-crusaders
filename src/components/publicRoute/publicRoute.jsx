/* eslint-disable no-nested-ternary */
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from '../navbar';
import { LoadingPage } from '../../pages';

export const PublicRoute = ({ component: Component, ...props }) => {
	const { user, loading } = useSelector((state) => state.auth);

	console.log('public route', user);

	// if (loading) {
	// 	return <LoadingPage />;
	// }

	// useEffect(() => {
	if (user && props.role !== user.role) {
		localStorage.removeItem('dentiUser');
	}
	// }, [user]);

	return (
		<>
			<Navbar visible={false} />

			{
				loading ? <LoadingPage />
					: (
						// user?.role === 'doctor' ? (
						// 	<Navigate to={{ pathname: '/home' }} />
						// ) : user?.role === 'lab' ? (
						// 	<Navigate to={{ pathname: '/lab/products' }} />
						// ) : (
						<>
							<Component {...props} />
							{/* <Outlet /> */}
						</>
						// )
					)
			}
		</>
	);
};
