import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/hero';
import Products from './components/products';
import Feature from './components/feature';
import Footer from './components/footer';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/products/data';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose your favorite' data={productData}/>
      <Feature/>
      <Footer/>
    </Router>
  );
}

export default App;
