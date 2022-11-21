import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { login, register } from '../actions/auth.thunks';

export interface userState {
	isError: boolean | undefined;
}

const initialState: userState = {
	isError: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(register.fulfilled, (state, action) => {
			state.isError = action?.payload?.isError;
		});
	},
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default userSlice.reducer;
