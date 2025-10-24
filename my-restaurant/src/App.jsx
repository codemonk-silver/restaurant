import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import CartItems from './pages/CartItems';
import Blog from './pages/Blog';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
          
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cartItems" element={<CartItems />} />
              <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />

    </div>
  )
}

export default App