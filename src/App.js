import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Landing from "./pages/Website/Landing";
import LegalRenumerationOrder from "./pages/document";
import About from "./pages/Website/About";
import Products from "./pages/Website/Products";
import CompanySignUp from "./pages/Company/CompanySignUp";
import LawyerSignUp from "./pages/Lawyer/LawyerSignUp";
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
import Lawyers from "./pages/Admin/Lawyers";
import Jobs from "./pages/Admin/Jobs";
import GetPaidAdmin from "./pages/Admin/GetPaid";
import AssignedJobs from "./pages/Admin/AssignedJobs";
import LawyerOTP from "./pages/Lawyer/OTP";
import LawyerProfile from "./pages/Lawyer/LawyerProfile";
import AvailableJobs from "./pages/Lawyer/AvailableJobs";
import AvailableJobItem from "./pages/Lawyer/AvailableJobItem";
import ResendConfirm from "./pages/Website/ResendConfirm";

import { useState, useEffect } from "react";

// const ProtectedRoute = ({ children }) => {

//   const authenticatedToken = localStorage.getItem("userToken");

//   return authenticatedToken ? children : <Navigate to="/login" />;
// };
// const authenticatedUserRole = localStorage.getItem("userType");
// const authenticatedToken = localStorage.getItem("userToken");

const ProtectedRoute = ({ children, allowedRoles }) => {
  const authenticatedUserRole = localStorage.getItem("userType");
  const authenticatedToken = localStorage.getItem("userToken");

  if (authenticatedUserRole === null) {
    return <Navigate to="/" />;
  }

  if (
    (authenticatedToken && authenticatedUserRole === "admin") ||
    allowedRoles.includes(authenticatedUserRole)
  ) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {/*Website*/}
        {/* Public Routes */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* <Route path="/home" element={<Landing />} /> */}
        <Route path="/" element={<Landing />} />

        <Route path="/products" element={<Products />} />

        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resend-confirm" element={<ResendConfirm />} />

        <Route
          path="/password-reset"
          element={<PasswordReset setEmailSubmitted={setEmailSubmitted} />}
        />

        <Route
          path="/otp/:userEmail"
          element={
            emailSubmitted ? (
              <OTP setOtpVerified={setOtpVerified} />
            ) : (
              <Navigate to="/password-reset" />
            )
          }
        />

        <Route
          path="/new-password/:token/:userEmail"
          element={
            otpVerified ? <NewPassword /> : <Navigate to="/otp/:userEmail" />
          }
        />

        <Route
          path="/Legal-Practitioners-Renumeration-Order-2023"
          element={<LegalRenumerationOrder />}
        />

        {/*Company*/}

        {/* Public Routes */}
        <Route path="/signup/asacompany" element={<CompanySignUp />} />
        {/* <Route path="/signup/nextcompany" element={<NextCompanySignUp/>} /> */}

        <Route path="/pre-cart/:productId" element={<Precart />} />
        <Route path="/cart" element={<Cart />} />

        {/* Protected Routes */}
        <Route
          path="/company/dashboard"
          element={
            <ProtectedRoute allowedRoles={["company"]}>
              <CompanyDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/company/profile/:companyId"
          element={
            <ProtectedRoute allowedRoles={["company"]}>
              <CompanyProfile />
            </ProtectedRoute>
          }
        />

        {/*Lawyer*/}
        {/* Public Routes */}
        <>
          <Route path="/signup/asalawyer" element={<LawyerSignUp />} />
          {/* <Route path="/signup/nextlawyer" element={<NextLawyerSignUp/>} /> */}

          {/* Protected Routes */}
          <Route
            path="/lawyer/dashboard"
            element={
              <ProtectedRoute allowedRoles={["lawyer"]}>
                <LawyerDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/lawyer/get-paid"
            element={
              <ProtectedRoute allowedRoles={["lawyer"]}>
                <GetPaid />
              </ProtectedRoute>
            }
          />

          <Route
            path="/lawyer/profile/:lawyerId"
            element={
              <ProtectedRoute allowedRoles={["lawyer"]}>
                <LawyerProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/lawyer/otp"
            element={
              <ProtectedRoute allowedRoles={["lawyer"]}>
                <LawyerOTP />
              </ProtectedRoute>
            }
          />

          <Route
            path="/lawyer/available-jobs/:lawyerId"
            element={
              <ProtectedRoute allowedRoles={["lawyer"]}>
                <AvailableJobs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/lawyer/available-job-item/:jobId"
            element={
              <ProtectedRoute allowedRoles={["lawyer"]}>
                <AvailableJobItem />
              </ProtectedRoute>
            }
          />
        </>

        {/*Admin*/}
        {/* Public Routes */}
        <Route path="/signup/asanadmin" element={<AdminSignUp />} />

        {/* Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/ratings"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Ratings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/jobs"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Jobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/lawyers"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Lawyers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/companies"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Companies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/new-product"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CreateProductPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/assign-job/:jobId"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AssignedJobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/get-paid"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <GetPaidAdmin />
            </ProtectedRoute>
          }
        />

        {/* * */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/2348094818884"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="bi bi-whatsapp whatsapp-icon"></i>
      </a>
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
