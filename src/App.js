import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layouts/pages/Home";
import ProductDetailPage from "./layouts/pages/ProductDetailsPage";
import Products from "./layouts/pages/Products";
import NoPage from "./layouts/pages/NoPage";
import Cart from "./layouts/pages/Cart";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
