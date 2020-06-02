import React from 'react';
import Products from './components/ProductsPage/Products';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import about from './components/AboutUs/about';
import Navbar from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/about" component={about} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/Contact" component={Contact} />
      <Footer />
    </Router>
    
  )
}
export default App;

