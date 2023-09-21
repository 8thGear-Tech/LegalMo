import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Landing from "./pages/Website/Landing";
import LegalRenumerationOrder from "./pages/document";
import About from "./pages/Website/About";
import Products from "./pages/Website/Products";
import {
  CompanySignUp,
  NextCompanySignUp,
} from "./pages/Company/CompanySignUp";
import { LawyerSignUp, NextLawyerSignUp } from "./pages/Lawyer/LawyerSignUp";
import AdminSignUp from "./pages/Admin/AdminSignUp";
import Login from "./pages/Website/Login";

import PasswordReset from "./pages/Website/PasswordReset";
import NewPassword from "./pages/Website/NewPassword";
import OTP from "./pages/Website/OTP";
import {Precart} from "./pages/Company/Precart";
import Cart from "./pages/Company/Cart";
import CompanyDashboard from "./pages/Company/Dashboard";
import LawyerDashboard from "./pages/Lawyer/Dashboard";
import CompanyProfile from "./pages/Company/CompanyProfile";
import LawyerProfile from "./pages/Lawyer/LawyerProfile";
import AdminNavbar from "./components/Navbar/AdminNavbar";
import AdminDashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
     


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup/asalawyer" element={<LawyerSignUp/>} />
        <Route path="/signup/nextlawyer" element={<NextLawyerSignUp/>} />
        <Route path="/signup/asacompany" element={<CompanySignUp/>} />
        <Route path="/signup/nextcompany" element={<NextCompanySignUp/>} />
        <Route path="/signup/asanadmin" element={<AdminSignUp/>} />
        <Route path="/password-reset" element={<PasswordReset/>} />
        <Route path="/otp" element={<OTP/>} />
        <Route path="/new-password" element={<NewPassword/>} />
       
        <Route path="/pre-cart/:productId"  element={<Precart/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/company/dashboard" element={<CompanyDashboard/>} />
        <Route path="/company/profile" element={<CompanyProfile/>} />
        <Route path="/lawyer/dashboard" element={<LawyerDashboard/>} />
        <Route path="/lawyer/profile" element={<LawyerProfile/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
          {/* <Route path="/admin/companies" element={Companies} />
          <Route path="/admin/lawyers" element={Lawyers} />
          <Route path="/admin/jobs" element={Jobs} />
          <Route path="/admin/payment" element={Payment} />
          <Route path="/admin/ratings" element={Ratings} /> */}
        <Route
          path="Legal-Practitioners-Renumeration-Order-2023"
          element={<LegalRenumerationOrder />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
