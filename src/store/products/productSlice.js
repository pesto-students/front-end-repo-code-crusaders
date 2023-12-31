import { createSlice } from '@reduxjs/toolkit';
import {
	getProducts, createProduct, updateProduct, getProductCount, getProduct
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
	tabsCount: {},
	error: null,
	success: false,
	successNewEntry: false,
	product: null
};

const authSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		// setProductCount: (state, action) => {
		// 	console.log('why not update tabs balues ,,,,', action);
		// 	state.tabsCount = action.payload;
		// }
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

		// Fetch single Product
		[getProduct.pending]: (state) => {
			state.loading = true;
		},
		[getProduct.fulfilled]: (state, action) => {
			state.loading = false;
			state.product = action.payload;
		},
		[getProduct.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},

		[getProductCount.fulfilled]: (state, action) => {
			const count = action.payload;
			state.tabsCount = {
				All: count.All,
				Active: count.Active,
				Inactive: count.Inactive
			};
		},

		[createProduct.pending]: (state) => {
			state.loading = true;
			state.successNewEntry = false;
		},
		[createProduct.fulfilled]: (state, action) => {
			state.loading = false;
			state.error = null;
			state.successNewEntry = true;
			state.products = [action.payload?.product, ...state.products];
			// setTimeout(() => {
			// 	state.success = false;
			// 	state.error = null;
			// }, 3000);
		},
		[createProduct.rejected]: (state, action) => {
			state.loading = false;
			state.successNewEntry = false;
			state.error = action.payload?.error;
		},

		[updateProduct.pending]: (state) => {
			state.loading = true;
		},
		[updateProduct.fulfilled]: (state, action) => {
			state.loading = false;
			state.success = true;
			state.error = null;
			state.products = [action.payload?.product, ...state.products];
			// setTimeout(() => {
			// 	state.success = false;
			// 	state.error = null;
			// }, 3000);
		},
		[updateProduct.rejected]: (state, action) => {
			state.loading = false;
			state.success = false;
			state.error = action.payload?.error;
		}

	},
});

export default authSlice.reducer;

// export const { setProductCount } = authSlice.actions;
