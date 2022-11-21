import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { login, whoami } from '../actions/auth.thunks';

export interface User {
	email: string;
	username: string;
	role: Role;
}
interface Role {
	id_role: number;
	role: string;
}
export interface AuthState {
	isAuth: boolean;
	user: User | null;
	error?: string;
	isError: boolean;
}

const initialState: AuthState = {
	isAuth: false,
	user: null,
	error: '',
	isError: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.isAuth = action.payload.isAuth;
			state.user = action.payload.user;
			state.error = action.payload.error;
			state.isError = action.payload.isError;
		});

		builder.addCase(whoami.fulfilled, (state, action) => {
			state.isAuth = action?.payload.isAuth;
			state.user = action?.payload.user;
			state.error = action?.payload.error;
			state.isError = action?.payload.isError;
		});
	},
});

export default authSlice.reducer;
