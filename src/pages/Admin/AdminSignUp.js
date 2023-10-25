import React, { useState } from "react";
import {
  SignUpForm,
  LoginModal,
} from "../../components/Forms/Authenticationforms";
import { useNavigate } from "react-router-dom";
import GuestNavbar from "../../components/Navbar/GuestNavbar";
import Footer from "../../components/Footer";
// import axios from "axios";
import loginRoute from "../../services/authRoute";
import authRoute from "../../services/authRoute";

const adminFields = [
  { name: "firstName", label: "Name", type: "text", required: true },
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

function AdminSignUp() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [userData, setUserData] = useState({});
  const { signupAsAdmin } = authRoute();

  const handleAdminSignup = (formData) => {
    const body = {
      name: formData.firstName,
      phoneNumber: formData.phoneNumber,
      officialEmail: formData.email,
      password: formData.password,
      passwordConfirm: formData.confirmPassword,
    };

    signupAsAdmin(
      body,
      setMessage,
      setLoading,
      setIsSuccessful,
      setUserData,
      setShowModal
    );
  };

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
      <LoginModal
        showModal={showModal}
        isSuccess={isSuccessful}
        closeModal={() => setShowModal(false)}
        modalText={message}
        subText="Kindly click on the link sent to your email address for verification"
      />
    </>
  );
}

export default AdminSignUp;
