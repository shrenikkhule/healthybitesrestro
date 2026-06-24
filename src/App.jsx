import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { CartDrawer } from "./components/CartDrawer";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/Homepage/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { AboutPage } from "./pages/AboutPage";

function AppLayout() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </Router>
  );
}

export default App;
