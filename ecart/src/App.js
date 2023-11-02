import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Product from './Component/Product';
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Cart from './Component/Cart';
import RootLayout from './Component/RootLayout';
import Home from './Component/Home';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}/> 
      <Route path="/cart" element={<Cart/>} />
      <Route path="/home" element={<Home/>} />
    </Route>
    ))
  return (
     <div className="App">
    {/* <Product/> */}
    <RouterProvider router={router}/>
   </div>
  );
}

export default App;
