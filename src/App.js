import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dealsdetails from './components/pages/Deals';
import Storehome from './components/pages/Stores';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Storehome />} />
      <Route exact path="/games/:id" element={<Dealsdetails />} />
    </Routes>
  </>
);
export default App;
