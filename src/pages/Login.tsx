import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../apis/auth';
import { useAuth } from '../auth/AuthContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { access_token } = await loginApi(username, password);
      console.log('Login successful:', access_token);
      login(access_token);
      navigate('/');
    } catch (e) {
      alert('Login gagal');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}