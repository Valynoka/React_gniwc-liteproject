import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Catalog from '../routes/Catalog';
import Home from '../routes/Home';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
  </Routes>
);

export default AppRouter;
