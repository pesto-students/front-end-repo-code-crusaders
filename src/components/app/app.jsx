import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../privateRoute';
import { PublicRoute } from '../publicRoute';
import {
	Labs, Login, Landing, Register, Home, NotFound, Lab, Product
} from '../../pages';

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
					<Route path='/home' exact element={<PrivateRoute component={Home} allowedRoles={[ROLES.Doctor]} />} />
					<Route path='/labs' element={<PrivateRoute component={Labs} allowedRoles={[ROLES.Doctor]} />} />
					<Route path='/labs/:lab' element={<PrivateRoute component={Lab} allowedRoles={[ROLES.Doctor]} />} />
					<Route path='/product' element={<PrivateRoute component={Product} allowedRoles={[ROLES.Doctor]} />} />
					{/* </Route> */}
					<Route path='/dashboard'
						element={<PrivateRoute component={Home} allowedRoles={[ROLES.Doctor]} />} />

					{/* public Route */}
					<Route exact path='/' element={<Landing />} />
					<Route
						path='/login' exact
						element={<PublicRoute restricted={true} component={Login} />}
					/>
					<Route
						path='/lab/login' exact
						element={<PublicRoute role={ROLES.Lab} component={Login} />}
					/>
					<Route
						path='/register/doctor' exact
						element={<PublicRoute restricted={true} component={Register} />}
					/>
					<Route
						path='/register/lab' exact
						element={<PublicRoute role={ROLES.Lab} component={Register} />}
					/>
					<Route path='*' element={<NotFound />} />
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
