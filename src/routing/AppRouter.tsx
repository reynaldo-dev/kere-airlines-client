import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Clients } from '../screens/admin/Clients';
import { DashBoard } from '../screens/admin/DashBoard';
import { Tickets } from '../screens/admin/Tickets';
import { Auth } from '../screens/Auth';
import { Client } from '../screens/client/Client';
import { Main } from '../screens/client/Main';
import { Ticket } from '../screens/client/Ticket';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Public } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useEffect } from 'react';
import { whoami } from '../redux/actions/auth.thunks';

export const AppRouter = () => {
	const { user } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(whoami());
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="auth"
					element={
						<Public>
							<Auth />
						</Public>
					}
				>
					<Route
						index
						element={
							<Public>
								<Login />
							</Public>
						}
					/>
					<Route
						path="register"
						element={
							<Public>
								<Register />
							</Public>
						}
					/>
				</Route>
				{user?.role?.role === 'admin' ? (
					<Route
						path="/"
						element={
							<PrivateRoute>
								<DashBoard />
							</PrivateRoute>
						}
					>
						<Route
							path="clients"
							element={
								<PrivateRoute>
									<Clients />
								</PrivateRoute>
							}
						/>
						<Route
							path="tickets"
							element={
								<PrivateRoute>
									<Tickets />
								</PrivateRoute>
							}
						/>
					</Route>
				) : (
					<Route
						path="/"
						element={
							<PrivateRoute>
								<Main />
							</PrivateRoute>
						}
					>
						<Route
							path="/"
							element={
								<PrivateRoute>
									<Client />
								</PrivateRoute>
							}
						/>
						<Route
							path="ticket"
							element={
								<PrivateRoute>
									<Ticket />
								</PrivateRoute>
							}
						/>
					</Route>
				)}
			</Routes>
		</BrowserRouter>
	);
};
