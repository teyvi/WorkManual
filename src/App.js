import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layouts/dashboard";
import Dashboard from "./pages/dashboard";
import ExpressOrders from "./pages/ops/expressOrders";
import OfflineOrders from "./pages/ops/offlineOrders";
import Order from "./pages/ops/order";
import Reseller from "./pages/ops/reseller";
import Supplier from "./pages/ops/supplier";
import Shops from "./pages/ops/shops";
import Campaigns from "./pages/ops/campaigns";
import Marketing from "./pages/ops/marketing";
import Coupon from "./pages/ops/coupons";
import AppSection from "./pages/ops/appSection";
import ProductTemplate from "./pages/ops/productTemplate";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/account/marketing" element={<Marketing />} />

        <Route path="/account/coupon" element={<Coupon />} />

        <Route path="/account/appsection" element={<AppSection/>} />

        <Route path="/account/producttemplate" element={<ProductTemplate />} />

        <Route path="/account/reseller" element={<Reseller />} />
        <Route path="/account/shops" element={<Shops />} />
        <Route path="/account/supplier" element={<Supplier />} />
        <Route path="/account/campaigns" element={<Campaigns />} />
        <Route path="/expressorders" element={<ExpressOrders />} />
        <Route path="/offlineorders" element={<OfflineOrders />} />
        <Route path="/order" element={<Order />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
