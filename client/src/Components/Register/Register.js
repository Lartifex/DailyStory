import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

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
  const hasAllInputs = Object.values(inputValues).every(
    (input) => Boolean(input) === true
  );

  const handleChange = async (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValues.password != inputValues.confirmPassword) {
      toast.error('Passwords are different', { icon: '' });
      return;
    }

    const username = inputValues.username;
    const email = inputValues.email;
    const password = inputValues.password;

    const response = await register({ username, email, password });
    console.log('response register', response);

    if (response.success && response.sessionToken) {
      Cookies.set('sessionToken', response.sessionToken, { expires: 1 });
      Cookies.set('username', response.username, { expires: 1 });
      navigate('/');
    } else {
      console.error('Register failed:', response.message);
    }

    toast.success('Welcome on board!');
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
        <div className="redirect">
          Already have an account?
          <Link to="/login" className="auth-button">
            LOG IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
