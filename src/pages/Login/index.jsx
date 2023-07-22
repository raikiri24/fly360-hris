import React, { useEffect } from 'react';
import Login from './Login';
import { useLogin } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useLogin();
  useEffect(() => {
    if (isAuthenticated()) {
      return navigate('/hrms');
    }
  }, []);
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
