import React from 'react';
import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Homepage from './containers/Homepage';
import { Routes, Route } from "react-router-dom";
import Cart from './containers/Cart/Cart';
import Wallet from './containers/Wallet/Wallet';
import { AuthProvider } from "./contexts/AuthProvider";
import { CartProvider } from './contexts/CartProvider';
import Login from './containers/Login';

function App() {

  return (
    <CartProvider>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/*' element={<Homepage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wallet' element={<Wallet />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </AuthProvider>
    </CartProvider>
  );
};

export default App;
