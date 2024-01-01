import { createSlice } from '@reduxjs/toolkit';
import {
	getProducts
} from './productActions';

const initialState = {
	loading: false,
	labs: [],
	product: {},
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
			state.labs = [...state.labs, ...action.payload.labs];
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
