import React, { useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import HRISNavigation from './HRISNavigation';
import Footer from '../../components/Footer/Footer';
import { useLogin } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

const HRISPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useLogin();
  useEffect(() => {
    if (!isAuthenticated()) {
      return navigate('/login');
    }
  }, []);

  return (
    <>
      <Navigation />
      <HRISNavigation />
      <Footer />
    </>
  );
};

export default HRISPage;
