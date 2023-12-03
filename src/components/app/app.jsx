import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/home';
import { Landing } from '../../pages/landing';
import { Login } from '../../pages/login';
import { Register } from '../../pages/register';
import { PrivateRoute } from '../privateRoute';
import { PublicRoute } from '../publicRoute';

const ROLES = {
	Doctor: 'doctor',
	Lab: 'lab'
};

function App() {
	return (
		<div>
			<Layout>
				<Routes>
					{/* private Route */}
					<Route path='/home' element={<PrivateRoute component={Home} allowedRoles={[ROLES.Doctor]} />} />

					{/* public Route */}
					<Route path='/' element={<PublicRoute component={Landing} />} />
					<Route
						path='/login'
						element={<PublicRoute restricted={true} component={Login} />}
					/>
					<Route
						path='/register/doctor'
						element={<PublicRoute restricted={true} component={Register} />}
					/>
					<Route
						path='/register/lab'
						element={<PublicRoute restricted={true} component={Register} />}
					/>
				</Routes>
			</Layout>
		</div>
	);
}

const Layout = ({ children }) => (
	<div className="">
		<div className="">{children}</div>
	</div>
);

export { App };
