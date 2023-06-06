import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';

import { AnimatePresence } from 'framer-motion';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Food from '../pages/Food';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';
import Product from '../pages/Product';

function RouterAnimate() {
  const location = useLocation();
  
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="food" element={<Food />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="fooddetail/:id" element={<Product />} />
      </Routes>
    </AnimatePresence>
  );
}

export default RouterAnimate;
