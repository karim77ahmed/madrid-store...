import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Product from './Product';
import BuyNow from './BuyNow';
import About from './About';
import Footer from './Footer';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>

      <BrowserRouter>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/Buy-Now" element={<BuyNow />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
