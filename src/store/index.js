import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import productReducer from './products/productSlice';
import labReducer from './lab/labSlice';
import { injectStore } from '../utils/axiosConfig';

const store = configureStore({
	reducer: {
		auth: authReducer,
		product: productReducer,
		lab: labReducer,
	}
});

injectStore(store);

export default store;
