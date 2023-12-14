import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import { login } from '../../services/auth';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login({ email, password });

    if (response.success) {
      signIn({
        token: response.token,
        expiresIn: 60,
        tokenType: 'Bearer',
        authState: response.user,
      });
    } else {
      console.error('Login failed: ', response.message);
    }
    navigate('/');
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
