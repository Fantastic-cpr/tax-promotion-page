import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import TaxPromotionPage from "@/pages/TaxPromotionPage";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<TaxPromotionPage />} />
        <Route path="/tax-promotion" element={<TaxPromotionPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AuthContext.Provider>
  );
}
