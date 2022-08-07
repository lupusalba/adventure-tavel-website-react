import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Travel from './Pages/Travel'
import Error from './Pages/Error'
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/services" element={ <Services /> } />
          <Route path="/travel" element={ <Travel /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <Error /> } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
