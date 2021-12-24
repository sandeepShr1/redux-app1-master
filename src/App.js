import React from 'react'
import Products from './components/Products/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div >
      <Router  >
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
