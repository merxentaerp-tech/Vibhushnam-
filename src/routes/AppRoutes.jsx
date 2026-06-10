import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
         <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;