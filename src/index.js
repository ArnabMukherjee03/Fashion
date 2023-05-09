import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Import ProdyctContext
import ProductProvider from './Context/ProductContext';
// Import SideBarContext
import SidebarProvider from './Context/SidebarContext';
import CartProvider from './Context/cartContext';
import TypeProductProvider from './Context/TypeProductContext';
import FirebaseProvider from './Context/FirebaseContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <FirebaseProvider>
  <SidebarProvider>
  <CartProvider>
  <ProductProvider>
  <TypeProductProvider>
    <App />
  </TypeProductProvider>
  </ProductProvider>
  </CartProvider>
  </SidebarProvider>
  </FirebaseProvider>
  </BrowserRouter>
);

