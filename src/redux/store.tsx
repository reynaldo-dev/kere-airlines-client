import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import userReducer from './slices/user.slice';
import clientReducer from './slices/client.slice';
import ticketReducer from './slices/ticket.slice';
import { adminApi } from './admin/queries';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		client: clientReducer,
		ticket: ticketReducer,
		[adminApi.reducerPath]: adminApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(adminApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
