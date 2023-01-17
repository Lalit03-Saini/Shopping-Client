import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import About from './pages/about';
import Blogs from './pages/blogs';
import CompareProduct from './pages/compareProduct';
import Contact from './pages/contact';
import Home from './pages/home';
import OurStore from './pages/ourStore';
import Wishlist from './pages/wishlist';
import Login from './pages/login';
import SignUp from './pages/signup';
import ForgotPassword from './pages/forgotpassword';
import Resetpassword from './pages/resetpassword';
import Singleblog from './pages/singleblog';
import PrivacyPolicy from './pages/privacyPolicy';
import RefundPolicy from './pages/refundPolicy';
import ShippingPolicy from './pages/shippingPolicy';
import TermAndContion from './pages/termAndContion';
import SingleProduct from './pages/singleProduct';
import Cart from './pages/cart';
import CheckOut from './pages/checkOut';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/ourStore' element={<OurStore />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog/:id' element={<Singleblog />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/compareproduct' element={<CompareProduct />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/login' element={<Login />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
            <Route path='resetpassword' element={<Resetpassword />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
            <Route path='/refundPolicy' element={<RefundPolicy />} />
            <Route path='/shippingPolicy' element={<ShippingPolicy />} />
            <Route path='Term-condtion' element={<TermAndContion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
