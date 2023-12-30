import { createSlice } from '@reduxjs/toolkit';
import {
	getProducts, createProduct
} from './productActions';

const initialState = {
	loading: false,
	labs: [],
	products: [],
	pagination: {
		totalResult: 0,
		totalPages: 0,
	},
	lab: {},
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
			console.log('action', action.payload);
			state.pagination = {
				totalPages: action.payload.totalPages,
				totalResult: action.payload.totalResults,
			};
			state.lab = action.payload.lab;
			state.products = action.payload.results;
			state.error = null;
		},
		[getProducts.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},

		[createProduct.pending]: (state) => {
			state.loading = true;
		},
		[createProduct.fulfilled]: (state, action) => {
			state.loading = false;
			state.success = true;
			state.error = null;
			state.products = [action.payload?.product, ...state.products];
			setTimeout(() => {
				state.success = false;
				state.error = null;
			}, 5000);
		},
		[createProduct.rejected]: (state, action) => {
			state.loading = false;
			state.success = false;
			state.error = action.payload?.error;
		}
	},
});

export default authSlice.reducer;

export const { setCredentials } = authSlice.actions;
