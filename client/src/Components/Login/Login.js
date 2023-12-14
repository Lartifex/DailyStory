import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth';
import Cookies from 'js-cookie';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login({ email, password });
    if (response.success && response.sessionToken) {
      Cookies.set('sessionToken', response.sessionToken, { expires: 1 });
      navigate('/');
    } else {
      console.error('Login failed:', response.message);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-title">Welcome back!</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="auth-button">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
