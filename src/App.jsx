import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Products from './components/Products';
import HowItWorks from './components/How-it-works';
import About from './components/About';
import Faqs from './components/Faqs';
import Login from './components/Login';
import StartSelling from './components/Start-selling';
import FirstProduct from './components/First-Product';
import Catalog from './components/Catalog';
import Pricing from './components/Pricing';
import ShippingGuide from './components/Shipping-guide';
import DesignTips from './components/Design-tips';
import PartnerProgram from './components/Partner-program';
import ApplyProgram from './components/Apply-program';

function App() {
  return (
    <BrowserRouter basename="/PrintStore">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/start-selling" element={<StartSelling />} />
        <Route path="/first-product" element={<FirstProduct />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/shipping-guide" element={<ShippingGuide />} />
        <Route path="/design-tips" element={<DesignTips />} />
        <Route path="/partner-program" element={<PartnerProgram />} />
        <Route path="/apply-program" element={<ApplyProgram />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;