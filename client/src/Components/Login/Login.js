import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome back!</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="auth"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="auth"
            required
          />
          <button type="submit" className="login-button">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
