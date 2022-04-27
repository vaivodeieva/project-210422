import './App.css';
import About from './Views/About';
import Home from './Views/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
