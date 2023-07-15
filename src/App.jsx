import React from 'react';
import Navigation from './components/Navigation/Navigation';
import HRISNavigation from './components/HRIS-Navigation/HRISNavigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Feature/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProtectedRoutes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function ProtectedRoutes() {
  return (
    <>
      <Navigation />
      <HRISNavigation />
      <div className="h-full">
        <Routes>{/* Add your protected routes here */}</Routes>
      </div>
    </>
  );
}

export default App;
