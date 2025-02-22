import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'select2/dist/js/select2.min.js';
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />

      <Routes>
        <Route exact path="/" element={<HomePageOne />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/product-details" element={<ProductDetailsPageOne />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="*" element={<HomePageOne />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
