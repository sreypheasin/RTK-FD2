import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Count from "./pages/counte/Count.jsx";
import ProductDetail from "./pages/product-detail/ProductDetail.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Register from "./pages/auth/Register.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/count",
        element: <Count />
      },
      {
        path: "/count",
        element: <App />
      },
      {
        path: "/product/:id",
        element: <ProductDetail />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
