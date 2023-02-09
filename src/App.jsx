import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Whatsnew from './components/WhatsNew/Whatsnew';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App bg-[#EEEEEE]">
      {/* <Login /> */}

      <Navigation />
      <div className="relative">
        <SideBar />
        <Whatsnew />
      </div>
    </div>
  );
}

export default App;
