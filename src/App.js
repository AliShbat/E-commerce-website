import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Header, Footer } from "./components/index";
import {  createHashRouter, Outlet, RouterProvider , ScrollRestoration } from "react-router-dom";
import { productsData } from "./Api/app";
import Product from "./pages/Product";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration/>
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader : productsData
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path:"/Product/:id",
        element: <Product/>
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
