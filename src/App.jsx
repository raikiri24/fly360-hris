import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Whatsnew from './components/WhatsNew/Whatsnew';
Whatsnew;
function App() {
  return (
    <div className="App bg-[#F5F5F5]">
      {/* <Login /> */}
      <Navigation />
      <Whatsnew />
    </div>
  );
}

export default App;
