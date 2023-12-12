import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Navbar } from '../navbar';
import { LoadingPage } from '../../pages';

export const PublicRoute = ({ component: Component, ...props }) => {
	const { user, loading } = useSelector((state) => state.auth);

	console.log('public route', user);

	if (loading) {
		return <LoadingPage />;
	}

	return (
		<>
			<Navbar visible={false} />

			{
				// eslint-disable-next-line no-nested-ternary
				user?.role === 'doctor' ? (
					<Navigate to={{ pathname: '/home' }} />
				) : user?.role === 'lab' ? (
					<Navigate to={{ pathname: '/dashboard' }} />
				) : (
					<Component {...props} />
				)}
		</>
	);
};

// import { useSelector } from "react-redux";
// // import { Navigate } from 'react-router-dom';
// // import { Navbar } from '../navbar';

// export const PublicRoute = ({ component: Component, ...props }) => {
//   const { user } = useSelector((state) => state.auth);

//   console.log("public route", user);
//   console.log(props);
//   return (
//     <>
//       {/* <Navbar /> */}
//       {
//         // eslint-disable-next-line no-nested-ternary
//         // user && user.role === 'doctor'
//         // 	? <Navigate to={{ pathname: '/home', state: { from: props.location } }} replace />
//         // 	: user && user.role === 'lab'
//        // ? <Navigate to={{ pathname: '/dashboard', state: { from: props.location } }} replace />
//         <Component {...props} />
//       }
//     </>
//   );
// };
