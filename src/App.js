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
import { Precart } from "./pages/Company/Precart";
import Cart from "./pages/Company/Cart";
import CompanyDashboard from "./pages/Company/Dashboard";
import LawyerDashboard from "./pages/Lawyer/Dashboard";
import CompanyProfile from "./pages/Company/CompanyProfile";

import AdminNavbar from "./components/Navbar/AdminNavbar";
import AdminDashboard from "./pages/Admin/Dashboard";
import Payment from "./pages/Admin/Payment";
import Footer from "./components/Footer";
import CreateProductPage from "./pages/Admin/CreateProductPage";
import GetPaid from "./pages/Lawyer/GetPaid";
import Ratings from "./pages/Admin/Ratings";
import Companies from "./pages/Admin/Companies";
import Lawyers from "./pages/Admin/UnverifiedLawyers";
import Jobs from "./pages/Admin/Jobs";
import GetPaidAdmin from "./pages/Admin/GetPaid";
import AssignedJobs from "./pages/Admin/AssignedJobs";
import LawyerOTP from "./pages/Lawyer/OTP";
import LawyerProfile from "./pages/Lawyer/LawyerProfile";
import AvailableJobs from "./pages/Lawyer/AvailableJobs";
import AvailableJobItem from "./pages/Lawyer/AvailableJobItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Website*/}
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/password-reset" element={<PasswordReset/>} />
        <Route path="/otp" element={<OTP/>} />
        <Route path="/new-password" element={<NewPassword/>} />
        <Route
          path="Legal-Practitioners-Renumeration-Order-2023"
          element={<LegalRenumerationOrder />}
        />

        {/*Company*/}
        <Route path="/signup/asacompany" element={<CompanySignUp/>} />
        <Route path="/signup/nextcompany" element={<NextCompanySignUp/>} />
        
        <Route path="/pre-cart/:productId"  element={<Precart/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/company/dashboard" element={<CompanyDashboard/>} />
        <Route path="/company/profile" element={<CompanyProfile/>} />


        {/*Lawyer*/}
        <Route path="/signup/asalawyer" element={<LawyerSignUp/>} />
        <Route path="/signup/nextlawyer" element={<NextLawyerSignUp/>} />
        <Route path="/lawyer/dashboard" element={<LawyerDashboard/>} />
        <Route path="/lawyer/get-paid" element={<GetPaid/>} />
          <Route path="/lawyer/profile" element={<LawyerProfile/>} />
          <Route path="/lawyer/otp" element={<LawyerOTP/>} />
          <Route path="/lawyer/available-jobs" element={<AvailableJobs/>} />
          <Route path="/lawyer/available-job-item/:jobId"  element={<AvailableJobItem/>} />


        {/*Admin*/}
       
        <Route path="/signup/asanadmin" element={<AdminSignUp/>} />
    
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/ratings" element={<Ratings/>} />
        <Route path="/admin/jobs" element={<Jobs/>} />
        <Route path="/admin/lawyers" element={<Lawyers/>} />
        <Route path="/admin/companies" element={<Companies/>} />
          <Route path="/admin/new-product" element={<CreateProductPage/>} />
          <Route path="/admin/assign-job" element={<AssignedJobs/>} />
          <Route path="/admin/payment" element={<Payment/>} />
          <Route path="/admin/get-paid" element={<GetPaidAdmin/>} />
          
        
      </Routes>
    </BrowserRouter>
  );
}

//  <Route path="/login" element={<Login />} />
//         {/* <Route path="/lawyer-signup" element={<LawyerSignUp/>} />
//         <Route path="/next-lawyer-signup" element={<NextLawyerSignUp/>} />
//         <Route path="/company-signup" element={<CompanySignUp/>} />
//         <Route path="/next-company-signup" element={<NextCompanySignUp/>} />
//         <Route path="/admin-signup" element={<AdminSignUp/>} />

export default App;
