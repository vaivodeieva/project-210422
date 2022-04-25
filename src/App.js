import './App.css';

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
