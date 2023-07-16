import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const NotFound = () => {
  return (
    <div className="font-custom">
      <Navigation />
      <div className="flex flex-col items-center justify-center gap-5 h-96 ">
        <div className="text-7xl self-center">OOPS</div>
        <div className="text-4xl">404 - PAGE NOT FOUND</div>
        <div className="bg-fly-404 h-40 w-40 bg-contain bg-no-repeat"></div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
