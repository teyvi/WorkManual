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
import Products from "./pages/ops/products";
import DigitalProducts from "./pages/ops/digital-products";
import Discounts from "./pages/ops/discounts";
import Categories from "./pages/ops/categories";
import Collections from "./pages/ops/collections";
import DeliveryLocation from "./pages/ops/delivery-location";
import PickupLocations from "./pages/ops/pickup-locations";
import ForexRates from "./pages/ops/forex-rates";
import PayoutRequest from "./pages/ops/payout-Request";
import PaymentTransaction from "./pages/ops/payment-transaction";
import ProfitTransaction from "./pages/ops/profit-processing";
import ProfitProcessing from "./pages/ops/profit-processing";
import Plugins from "./pages/ops/plugins";
import Config from "./pages/ops/config";
import Status from "./pages/ops/status";
import ManageEmployees from "./pages/ops/manage-employees";

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
        <Route path="/digitalorders" element={<DigitalProducts />} />
        <Route path="/order" element={<Order />} />
        <Route path="/inventory/products" element={<Products/>}/>
        <Route path="/inventory/digital-products" element={<DigitalProducts/>}/>
        <Route path="/inventory/discounts" element={<Discounts/>}/>
        <Route path="/inventory/categories" element={<Categories/>}/>
        <Route path="/inventory/collections" element={<Collections/>}/>
        <Route path="/location/delivery-location" element={<DeliveryLocation/>}/>
        <Route path="/location/pickup-location" element={<PickupLocations/>}/>
        <Route path="/payment/forex" element={<ForexRates/>}/>
        <Route path="/payment/payouts" element={<PayoutRequest/>}/>
        <Route path="/payment/payment-transactions" element={<PaymentTransaction/>}/>
        <Route path="/payment/profit-processing" element={<ProfitProcessing/>}/>
        <Route path="/system/plugins" element={<Plugins/>}/>
        <Route path="/system/config" element={<Config/>}/>
        <Route path="/system/status" element={<Status/>}/>
        <Route path="/hr/employees" element={<ManageEmployees/>}/>

      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
