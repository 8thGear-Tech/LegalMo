import React from "react";
import { SignUpForm } from "../../components/Forms/Authenticationforms";
import { useNavigate } from "react-router-dom";
import GuestNavbar from "../../components/Navbar/GuestNavbar";
import Footer from "../../components/Footer";

function AdminSignUp() {
  const navigate = useNavigate();
  const handleAdminSignup = (formData) => {
    navigate("/dashboard");
  };

  const adminFields = [
    { name: "name", label: "Name", type: "text", required: true },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "number",
      required: true,
    },
    {
      name: "email",
      label: "Official Email Address",
      type: "email",
      required: true,
    },
    { name: "password", label: "Password", type: "password", required: true },
    {
      name: "confirmPassword",
      label: "Confirm password",
      type: "password",
      required: true,
    },
  ];

  return (
    <>
      <GuestNavbar />
      <div className="justify-content-center align-items-center text-align-center py-5 px-4 mb-5">
        <SignUpForm
          formTitle="Sign up as a Admin"
          fields={adminFields}
          onSubmit={handleAdminSignup}
          submitButtonLabel="Sign up"
        />
      </div>
    </>
  );
}

export default AdminSignUp;
