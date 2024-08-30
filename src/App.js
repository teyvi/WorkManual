import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layouts/dashboard";
import Dashboard from "./pages/dashboard";
import Account from "./pages/ops/account";
import ExpressOrders from "./pages/ops/expressOrders";
import OfflineOrders from "./pages/ops/offlineOrders";
import Order from "./pages/ops/order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/expressorders" element={<ExpressOrders/>}></Route>
          <Route  path="/offlineorders" element={<OfflineOrders/>}></Route>
          <Route path= "/order" element={<Order/>}> </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} replace/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
