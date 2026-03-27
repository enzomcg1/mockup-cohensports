/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CustomerLayout from "./components/CustomerLayout";
import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Catalog";
import Commercial from "./pages/Commercial";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Settings from "./pages/Settings";
import NewProduct from "./pages/NewProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Store from "./pages/Store";
import MyAccount from "./pages/MyAccount";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Customer Facing Routes */}
        <Route path="/store" element={<CustomerLayout><Store /></CustomerLayout>} />
        <Route path="/cart" element={<CustomerLayout><Cart /></CustomerLayout>} />
        <Route path="/checkout" element={<CustomerLayout><Checkout /></CustomerLayout>} />
        <Route path="/my-account" element={<CustomerLayout><MyAccount /></CustomerLayout>} />
        
        {/* Admin/Dashboard Routes */}
        <Route
          path="/admin/*"
          element={
            <Layout>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="commercial" element={<Commercial />} />
                <Route path="customers" element={<Customers />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="orders" element={<Orders />} />
                <Route path="orders/:orderId" element={<OrderDetails />} />
                <Route path="settings" element={<Settings />} />
                <Route path="new-product" element={<NewProduct />} />
              </Routes>
            </Layout>
          }
        />

        {/* Default Redirect to Store */}
        <Route path="/" element={<CustomerLayout><Store /></CustomerLayout>} />
      </Routes>
    </Router>
  );
}
