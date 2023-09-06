import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Landing from "./pages/Website/Landing";
import LegalRenumerationOrder from "./pages/document";
import About from "./pages/Website/About";
import Products from "./pages/Website/Products";
import {CompanySignUp, NextCompanySignUp} from "./pages/Company/CompanySignUp";
import {LawyerSignUp, NextLawyerSignUp} from "./pages/Lawyer/LawyerSignUp";
import AdminSignUp from "./pages/Admin/AdminSignUp";
import Login from "./pages/Website/Login";
import Dashboard from "./pages/Company/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/lawyer-signup" element={<LawyerSignUp/>} />
        <Route path="/next-lawyer-signup" element={<NextLawyerSignUp/>} />
        <Route path="/company-signup" element={<CompanySignUp/>} />
        <Route path="/next-company-signup" element={<NextCompanySignUp/>} />
        <Route path="/admin-signup" element={<AdminSignUp/>} />
        <Route path="/products" element={<Dashboard/>} />
        <Route
          path="Legal-Practitioners-Renumeration-Order-2023"
          element={<LegalRenumerationOrder />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
