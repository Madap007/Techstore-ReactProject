import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import SingleProductPage from './pages/SingleProductPage'
import CartPage from './pages/CartPage'
import DefaultPage from './pages/DefaultPage' 
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Sidecart from './components/Sidecart'
import Footer from './components/Footer'
 



class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <Sidecart/>
      {/*nav bar */}
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<ContactPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/products/:id" element={<SingleProductPage/>} />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route  path="*" element={<DefaultPage/>} />
      </Routes>

      <Footer/>

      </BrowserRouter>
    );
  }
  
}

export default App;
