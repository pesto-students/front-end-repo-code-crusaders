import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../privateRoute';
import { PublicRoute } from '../publicRoute';
import {
	Labs, Login, Landing, Register, Home, NotFound, Lab
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
					<Route path='/lab' element={<Lab/>} />
					<Route path='/home' exact element={<PrivateRoute component={Home} allowedRoles={[ROLES.Doctor]} />} />
					<Route path='/labs' element={<PrivateRoute component={Labs} allowedRoles={[ROLES.Doctor]} />} >
					</Route>
					<Route path='/dashboard'
						element={<PrivateRoute component={Home} allowedRoles={[ROLES.Doctor]} />} />

					{/* public Route */}
					<Route exact path='/' element={<Landing />} />
					<Route
						path='/login' exact
						element={<PublicRoute restricted={true} component={Login} />}
					/>
					<Route
						path='/register/doctor' exact
						element={<PublicRoute restricted={true} component={Register} />}
					/>
					<Route
						path='/register/lab' exact
						element={<PublicRoute restricted={true} component={Register} />}
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
