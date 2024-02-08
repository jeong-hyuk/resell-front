// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "@/App.jsx";
import MainPage from "@/components/pages/MainPage";
import AllProducts from "@/components/pages/AllProducts";
import ProductDetail from "@/components/pages/ProductDetail";
import NewProduct from "@/components/pages/NewProduct";
import MyCart from "@/components/pages/MyCart";
import LoginRequire from "@/components/pages/LoginRequire";
import LoginPage from "@/components/pages/LoginPage.jsx";
import RegisterPage from "@/components/pages/RegisterPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <LoginRequire />,
    children: [
      { index: true, path: "/", element: <MainPage /> },
      { path: "/products", element: <AllProducts /> },
      {
        path: "/products/new",
        element: <NewProduct />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/carts",
        element: <MyCart />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
