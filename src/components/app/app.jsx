import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../privateRoute';
import { PublicRoute } from '../publicRoute';
import {
	// eslint-disable-next-line max-len
	Labs, Login, Landing, Register, LabRegister, Home, NotFound, Lab, Product, CreateProduct, LabOrder, LabProducts
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
					<Route path='/product/create' element={<PrivateRoute component={CreateProduct} allowedRoles={[ROLES.Lab]} />} />
					<Route path='/lab/products' element={<PrivateRoute component={LabProducts} allowedRoles={[ROLES.Lab]} />} />
					{/* </Route> */}
					<Route path='/dashboard'
						element={<PrivateRoute component={Home} allowedRoles={[ROLES.Lab]} />} />

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
						path ='/lab/orders' exact
						element={<PublicRoute restricted={true} component={LabOrder} /> }
					/>
					<Route
						path='/register/lab' exact
						element={<PublicRoute role={ROLES.Lab} component={LabRegister} />}
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