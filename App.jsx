import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import About from './pages/about/About';
import Order from './pages/order/Order';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Login from './pages/login/Login';
import Product from './pages/product/Product';
import Collection from './pages/collection/Collection';
import Contact from './pages/contact/Contact';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/searchbar/SearchBar';
import Footer from './components/footer/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <ToastContainer />
    <Navbar />
    <SearchBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<Order />} />
      <Route path='/place-order' element={<PlaceOrder />} />
      <Route path='/product/:productId' element={<Product />} />
      <Route path='/login' element={<Login />} />
      <Route path='/collection' element={<Collection />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App