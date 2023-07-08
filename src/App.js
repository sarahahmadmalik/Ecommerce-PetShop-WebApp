import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import VetenaryServices from './pages/VetenaryServices';
import Pharmacy from './pages/Pharmacy';
// import ProductInfo from './pages/ProductInfo';
import { Helmet } from 'react-helmet';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
       <Helmet>
        <title>PetCare | Quality Products</title>
        <link rel="icon" href="../assets/Logo.png" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/VetenaryServices" element={<VetenaryServices />} />
          {/* <Route path="/ProductInfo" element={<ProductInfo />} /> */}
          <Route path="/Pharmacy" element={<Pharmacy />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
