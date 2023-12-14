import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { register } from '../../services/auth';

const Register = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = async (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = inputValues.username;
    const email = inputValues.email;
    const password = inputValues.password;

    const response = await register({ username, email, password });
    console.log('response register', response);

    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-title">Register</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="auth"
            value={inputValues.username}
            placeholder="username"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="auth"
            value={inputValues.email}
            placeholder="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="auth"
            value={inputValues.password}
            placeholder="password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            className="auth"
            value={inputValues.confirmPassword}
            placeholder="confirm password"
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-button">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
