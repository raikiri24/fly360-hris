import { React } from 'react';
import Navigation from './components/Navigation/Navigation';
import HRISNavigation from './components/HRIS-Navigation/HRISNavigation';
import Footer from './components/Footer/Footer';
import 'rsuite/dist/rsuite-no-reset.min.css';
function App() {
  return (
    <div className="App ">
      <Navigation />
      <HRISNavigation />
      <Footer />
    </div>
  );
}

export default App;
