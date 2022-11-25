import { createSlice } from '@reduxjs/toolkit';
import { getClient } from '../actions/client';

interface Client {
	id_client: number;
	name: string;
	lastname: string;
	dir: string;
	dui: string;
	id_gender: number;
	email: string;
	id_user: number;
}

interface State {
	client: Client | null;
}

const initialState: State = {
	client: null,
};

export const clientSlice = createSlice({
	name: 'client',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getClient.fulfilled, (state, action) => {
			state.client = action?.payload?.client;
		});
	},
});

export default clientSlice.reducer;
