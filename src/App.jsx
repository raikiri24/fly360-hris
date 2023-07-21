import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import HRISPage from './pages/HRIS-Navigation/';
import 'rsuite/dist/rsuite-no-reset.min.css';
import LoginPage from './pages/Login/';
import NotFoundPage from './pages/NotFound';
import { LoginProvider } from './context/LoginContext';
import ReloadOnBack from './components/ReloadOnBack/ReloadOnBack';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<HRISPage />} />
        <Route path="/hrms" element={<HRISPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
