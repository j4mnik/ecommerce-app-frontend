import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layouts/pages/Home";
import Products from "./layouts/pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
