import React from 'react';
import Navigation from '../Navigation/Navigation';

const NotFound = () => {
  return (
    <div className="font-custom">
      <Navigation />
      <div className="flex flex-col self-center items-center gap-5">
        <div className="text-7xl">OOPS</div>
        <div className="text-4xl">404 - PAGE NOT FOUND</div>
        <div className="bg-fly-404 h-40 w-40 bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default NotFound;
