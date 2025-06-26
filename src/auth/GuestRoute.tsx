import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function GuestRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // atau loading spinner

  return isAuthenticated ? <Navigate to="/" replace /> : children;
}
