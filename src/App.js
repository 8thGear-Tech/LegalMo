// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/home";
// import LegalRenumerationOrder from "./pages/document";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="Legal-Practitioners-Renumeration-Order-2023"
//           element={<LegalRenumerationOrder />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Website/Home"
import Login from "./pages/Website/Login"
import PasswordReset from './pages/Website/PasswordReset'
import About from './pages/Website/About'
import Contact from './pages/Website/Contact'
import Landing from './pages/Website/Landing'
import NewPassword from './pages/Website/NewPassword'
import Products from './pages/Website/Products'
import AdminSignUp from './pages/Admin/AdminSignUp';
import OTP from './pages/Website/OTP';
import LawyerProfile from './pages/Lawyer/LawyerProfile'
import CompanyProfile from './pages/Company/CompanyProfile';
import CreateProductPage from './pages/Admin/CreateProductPage';
import Ratings from './pages/Admin/Ratings';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/ratings' element={<Ratings />} />
          <Route path='/new-product' element={<CreateProductPage />} />
          <Route path="/lawyer-profile" element={<LawyerProfile />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin-sign-up" element={<AdminSignUp/>} />
          <Route path="/password-reset" element={<PasswordReset/>} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Landing />} />
          <Route path="/new-password" element={<NewPassword/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/otp" element={<OTP />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
