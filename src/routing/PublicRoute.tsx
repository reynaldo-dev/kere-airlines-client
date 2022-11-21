import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigate } from 'react-router-dom';

interface Props {
	children: React.ReactNode;
}
export const Public = ({ children }: Props) => {
	const { isAuth } = useSelector((state: RootState) => state.auth);

	return isAuth ? <Navigate to="/" /> : <>{children}</>;
};
