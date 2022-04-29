import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Discover from './Views/Discover';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Discover />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
