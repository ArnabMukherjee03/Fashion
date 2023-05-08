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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
  <CartProvider>
  <ProductProvider>
  <TypeProductProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </TypeProductProvider>
  </ProductProvider>
  </CartProvider>
  </SidebarProvider>
);

