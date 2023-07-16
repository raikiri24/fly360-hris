import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HRISNavigation from './components/HRIS-Navigation/HRISNavigation';
import Footer from './components/Footer/Footer';
import 'rsuite/dist/rsuite-no-reset.min.css';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<ProtectedRoutes />} />
        <Route path="/" element={<HRISNavigation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

function ProtectedRoutes() {
  return (
    <>
      <Navigation />
      <HRISNavigation />
      <div className="h-full">
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
