import { createSlice } from '@reduxjs/toolkit';
import {
	getProducts
} from './productActions';

const initialState = {
	loading: false,
	labs: [],
	products: [],
	error: null,
	success: false,
};

const authSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {

	},
	extraReducers: {
		[getProducts.pending]: (state) => {
			state.loading = true;
		},
		[getProducts.fulfilled]: (state, action) => {
			state.loading = false;
			state.products = [...state.products, ...action.payload.products];
			state.error = null;
		},
		[getProducts.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	},
});

export default authSlice.reducer;

export const { setCredentials } = authSlice.actions;
