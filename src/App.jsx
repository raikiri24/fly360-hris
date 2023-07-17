import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import HRISNav from './components/HRIS-Navigation/';
import 'rsuite/dist/rsuite-no-reset.min.css';
import Login from './components/Login/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<HRISNav />} />
        <Route path="*" element={<NotFound />} />
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
