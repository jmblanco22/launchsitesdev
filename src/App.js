// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your main layout and all of your pages
import Layout from './Layout';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import ReadyToLaunch from './Pages/ReadytoLaunch';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* A Route for each page */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ready-to-launch" element={<ReadyToLaunch />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;