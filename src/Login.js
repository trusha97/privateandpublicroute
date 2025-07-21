import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const onSubmit = () => {
    localStorage.setItem('token', 'randomValue');

    navigate(from, { replace: true });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <div>
        <div>Email</div>
        <div><input type='email' placeholder="Enter your email" /></div>
      </div>
      <div>
        <div>Password</div>
        <div><input type='password' placeholder="Enter your password" /></div>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Link to='/register'>Register</Link>
        &nbsp;&nbsp;
        <button onClick={onSubmit}>Submit</button>
      </div>
      {/* <h5>login</h5> */}
    </div>
  );
};

export default Login;
