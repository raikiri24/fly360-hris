import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import HRISPage from './pages/HRIS-Navigation/';
import 'rsuite/dist/rsuite-no-reset.min.css';
import Login from './pages/Login/Login';
import NotFoundPage from './pages/NotFound';
import { LoginProvider } from './context/LoginContext';

function App() {
  return (
    <div className="App ">
      <LoginProvider>
        <Routes>
          <Route path="/" element={<HRISPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </LoginProvider>
    </div>
  );
}

export default App;
