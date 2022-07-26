import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Saleprice from './components/pages/Saleprice';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/sales" element={<Saleprice />} />
    </Routes>
  </>
);
export default App;
