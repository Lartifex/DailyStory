import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../services/auth';
import toast from 'react-hot-toast';
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
      Cookies.set('username', response.username, { expires: 1 });
      navigate('/');
    } else {
      console.error('Login failed:', response.message);
    }

    toast.success('Welcome back!');
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
        <div className="redirect">
          Don't have an account?
          <Link to="/register" className="auth-button">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
