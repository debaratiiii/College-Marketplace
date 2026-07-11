import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Marketplace from "./pages/Marketplace/Marketplace";
import Sell from "./pages/Sell/Sell";
import AI from "./pages/AI/AI";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;