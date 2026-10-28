import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
  const token = Cookies.get('authtoken');
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}
