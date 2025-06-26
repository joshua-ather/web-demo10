import { createContext, useContext, useEffect, useState } from "react";
import { setAccessToken } from "../apis/api";
import { refreshToken, logout as logoutApi } from '../apis/auth';
import { getUser } from '../apis/graphql';

interface AuthContextType {
  token: string | null;
  user: any;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!token;

  const login = async (token: string) => {
    setToken(token);
    setAccessToken(token);

    const user = await getUser();
    setUser(user);
  };

  const logout = async () => {
    if (!token) return;

    await logoutApi();

    setToken(null);
    setAccessToken(null);
    setUser(null);
  };

  useEffect(() => {
    const restore = async () => {
      try {
        const { access_token } = await refreshToken();
        login(access_token);
      } catch (err) {
        logout();
      } finally {
        setLoading(false);
      }
    };

    if (!token) {
      restore();
    }
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
