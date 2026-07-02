import Create from "./products/Create";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen overflow-hidden">
        <Navbar />
        {/* <Create /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};
export default App;
