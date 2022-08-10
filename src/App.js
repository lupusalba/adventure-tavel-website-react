import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Travel from './Pages/Travel'
import Error from './Pages/Error'
import SafariPage from './Pages/DestinationPages/SafariPage';
import JunglePage from './Pages/DestinationPages/JunglePage'
import AncientRuinPage from './Pages/DestinationPages/AncientRuinPage';
import DemoPage from './Pages/DestinationPages/DemoDestinationPage';
import './App.css';
import './ResponsiveStyle.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destinations" element={<Travel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations/safari" element={<SafariPage />} />
        <Route path="/destinations/jungle" element={<JunglePage />} />
        <Route path="/destinations/ancient-ruin" element={<AncientRuinPage />} />
        <Route path="/destinations/demoPage" element={<DemoPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
