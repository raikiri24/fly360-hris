import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import HRISPage from './pages/HRIS-Navigation/';
import 'rsuite/dist/rsuite-no-reset.min.css';
import LoginPage from './pages/Login/';
import NotFoundPage from './pages/NotFound';
import { LoginProvider } from './context/LoginContext';
import ChangePassword from './pages/ChangePassword';

function App() {
  return (
    <div className="App ">
      <LoginProvider>
        <Routes>
          <Route path="/" element={<HRISPage />} />
          <Route path="/hrms" element={<HRISPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/forgot-password" element={<ChangePassword />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </LoginProvider>
    </div>
  );
}

export default App;
