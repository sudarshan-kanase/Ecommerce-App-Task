import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Signup from "../pages/Signup";

function AppRoutes() {
  return (
    <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/checkout" element={<Checkout />} />

    </Routes>
  );
}

export default AppRoutes;
