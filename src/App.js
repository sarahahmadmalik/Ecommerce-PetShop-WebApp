import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import VetenaryServices from './pages/VetenaryServices';
import Pharmacy from './pages/Pharmacy';
// import ProductInfo from './pages/ProductInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/VetenaryServices" element={<VetenaryServices />} />
          {/* <Route path="/ProductInfo" element={<ProductInfo />} /> */}
          <Route path="/Pharmacy" element={<Pharmacy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
