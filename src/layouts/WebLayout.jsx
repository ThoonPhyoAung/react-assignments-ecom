import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Create from "../products/Create";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Footer from "../components/Footer";

const WebLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default WebLayout;
