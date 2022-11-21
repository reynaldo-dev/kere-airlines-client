import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigate } from 'react-router-dom';

interface Props {
	children: React.ReactNode;
}
export const PrivateRoute = ({ children }: Props) => {
	const { isAuth } = useSelector((state: RootState) => state.auth);

	return isAuth ? <>{children}</> : <Navigate to="/auth" />;
};
