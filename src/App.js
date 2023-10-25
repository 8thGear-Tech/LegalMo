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
import {Precart} from "./pages/Company/Precart";
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
import { useAppContext } from "./AppContext";


const ProtectedRoute = ({ children }) => {
  // const { authenticated } = useAppContext();
  const authenticatedToken = localStorage.getItem("userToken");

  return authenticatedToken ? children : <Navigate to="/login" />;
};


function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/*Website*/}
          {/* Public Routes */}
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
        
        {/* Public Routes */}
        <Route path="/signup/asacompany" element={<CompanySignUp/>} />
        {/* <Route path="/signup/nextcompany" element={<NextCompanySignUp/>} /> */}
        
        <Route path="/pre-cart/:productId"  element={<Precart/>} />
        <Route path="/cart" element={<Cart/>} />

        {/* Protected Routes */}
        <Route
          path="/company/dashboard"
          element={
            <ProtectedRoute>
              <CompanyDashboard />
            </ProtectedRoute>
          }/>

         <Route
          path="/company/profile"
          element={
            <ProtectedRoute>
              <CompanyProfile />
            </ProtectedRoute>
          }/>
     

        {/*Lawyer*/}
          {/* Public Routes */}
        <Route path="/signup/asalawyer" element={<LawyerSignUp/>} />
        {/* <Route path="/signup/nextlawyer" element={<NextLawyerSignUp/>} /> */}

         {/* Protected Routes */}
        <Route path="/lawyer/dashboard" element={<ProtectedRoute>
          <LawyerDashboard/>
        </ProtectedRoute>} />

        <Route path="/lawyer/get-paid" element={<ProtectedRoute>
          <GetPaid/>
        </ProtectedRoute>} />

          <Route path="/lawyer/profile" element={<ProtectedRoute>
            <LawyerProfile/>
          </ProtectedRoute>} />

          <Route path="/lawyer/otp" element={<ProtectedRoute>
            <LawyerOTP/>
          </ProtectedRoute>} />

      
          <Route path="/lawyer/available-jobs" element={<ProtectedRoute>
            <AvailableJobs/>
          </ProtectedRoute>} />

          <Route path="/lawyer/available-job-item/:jobId"  element={<ProtectedRoute>
            <AvailableJobItem/>
          </ProtectedRoute>} />


        {/*Admin*/}
       {/* Public Routes */}
        <Route path="/signup/asanadmin" element={<AdminSignUp/>} />
        
     {/* Protected Routes */}
        <Route path="/admin/dashboard" element={<ProtectedRoute>
          <AdminDashboard/>
        </ProtectedRoute>} />

        <Route path="/admin/ratings" element={<ProtectedRoute>
          <Ratings/>
        </ProtectedRoute>} />

        <Route path="/admin/jobs" element={<ProtectedRoute>
          <Jobs/>
        </ProtectedRoute>} />

        <Route path="/admin/lawyers" element={<ProtectedRoute>
          <Lawyers/>
        </ProtectedRoute>} />

        <Route path="/admin/companies" element={<ProtectedRoute>
          <Companies/>
        </ProtectedRoute>} />

          <Route path="/admin/new-product" element={<ProtectedRoute>
            <CreateProductPage/>
          </ProtectedRoute>} />

          <Route path="/admin/assign-job" element={<ProtectedRoute>
            <AssignedJobs/>
          </ProtectedRoute>} />

          <Route path="/admin/payment" element={<ProtectedRoute>
            <Payment/>
          </ProtectedRoute>} />

          <Route path="/admin/get-paid" element={<ProtectedRoute>
            <GetPaidAdmin/>
          </ProtectedRoute>} />
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
