import { createSlice } from '@reduxjs/toolkit';
import { Client, createTicket } from '../actions/ticket.client';

interface State {
	client: Client | null;
	destination: string;
	fromdate: string;
	todate: string;
	id_ticket: number;
	motive: string;
}
const initialState: State | null = {
	client: null,
	destination: '',
	fromdate: '',
	todate: '',
	id_ticket: 0,
	motive: '',
};

export const ticketSlice = createSlice({
	name: 'ticket-cliente',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(createTicket.fulfilled, (state, action) => {
			state.client = action?.payload?.client;
			state.destination = action?.payload?.destination;
			state.fromdate = action?.payload?.fromdate;
			state.todate = action?.payload?.todate;
			state.id_ticket = action?.payload?.id_ticket;
			state.motive = action?.payload?.motive;
		});
	},
});

export default ticketSlice.reducer;
