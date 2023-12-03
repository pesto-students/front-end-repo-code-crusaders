import { createSlice } from '@reduxjs/toolkit';
import {
	loginUser, logoutUser, registerUser, verifyUserDetails
} from './authActions';

const userAccessToken = localStorage.getItem('userAccessToken')
	? localStorage.getItem('userAccessToken')
	: null;

const userRefreshToken = localStorage.getItem('userRefreshToken')
	? localStorage.getItem('userRefreshToken')
	: null;

const initialState = {
	loading: false,
	user: null,
	accessToken: userAccessToken,
	refreshToken: userRefreshToken,
	error: null,
	success: false,
	roles: [],
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.user = action.payload.user;
			state.accessToken = action.payload.tokens.access.token;
			state.refreshToken = action.payload.tokens.refresh.token;

			localStorage.setItem('userAccessToken', action.payload.tokens.access.token);
			localStorage.setItem('userRefreshToken', action.payload.tokens.refresh.token);
		}
	},
	extraReducers: {
		[registerUser.pending]: (state) => {
			state.loading = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload.user;
			state.roles = [action.payload.user.role];
			state.error = null;
			state.success = true;
		},
		[registerUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},

		[loginUser.pending]: (state) => {
			state.loading = true;
		},
		[loginUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload.user;
			state.accessToken = action.payload.tokens.access.token;
			state.refreshToken = action.payload.tokens.refresh.token;
			localStorage.setItem('userAccessToken', action.payload.tokens.access.token);
			localStorage.setItem('userRefreshToken', action.payload.tokens.refresh.token);
			state.error = null;
		},
		[loginUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},

		[logoutUser.pending]: (state) => {
			state.loading = true;
		},
		[logoutUser.fulfilled]: (state) => {
			state.loading = false;
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
			localStorage.removeItem('userAccessToken');
			localStorage.removeItem('userRefreshToken');
			state.success = true;
			state.error = null;
		},
		[logoutUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},

		[verifyUserDetails.pending]: (state) => {
			state.loading = true;
		},
		[verifyUserDetails.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload.user;
			state.error = null;
		},
		[verifyUserDetails.rejected]: (state) => {
			state.loading = false;
		}
	},
});

export default authSlice.reducer;

export const { setCredentials } = authSlice.actions;
