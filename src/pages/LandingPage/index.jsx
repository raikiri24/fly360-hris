import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Landing from './Landing';
import Footer from '../../components/Footer/Footer';
const LandingPage = () => {
  return (
    <div className="bg-[#66A7A3] bg-opacity-70">
      <Navigation />
      <Landing />
      <Footer />
    </div>
  );
};

export default LandingPage;
