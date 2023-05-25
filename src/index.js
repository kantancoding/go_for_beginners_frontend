import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Layout from "./Layout";
import Product from "./Product";
import Checkout from "./Checkout";
import SuccessPage from "./SuccessPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const customerData = {};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="product" element={<Product customerData={customerData} />} />
      <Route path="checkout" element={<Checkout customerData={customerData} />} />
      <Route path="success" element={<SuccessPage customerData={customerData} />} />
    </Route>
  )
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={router} />);
