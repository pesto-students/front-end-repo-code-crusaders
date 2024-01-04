import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import productReducer from './products/productSlice';
import labReducer from './lab/labSlice';
import orderReducer from './order/orderSlice';
import { injectStore } from '../utils/axiosConfig';

const store = configureStore({
	reducer: {
		auth: authReducer,
		product: productReducer,
		lab: labReducer,
		order: orderReducer,
	}
});

injectStore(store);

export default store;
