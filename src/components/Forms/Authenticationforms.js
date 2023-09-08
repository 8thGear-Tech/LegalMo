//restpassword
//login
//signup
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Loginbtn,
  Nextbtn,
  ResetPasswordbtn,
} from "../Buttons/Authenticationbtns";
import { useState } from "react";

export function SignUpForm({ formTitle, fields, onSubmit, submitButtonLabel }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = {};

    fields.forEach((field) => {
      if (!formData[field.name]) {
        if (field.label === "Confirm password") {
          validationErrors[field.name] = "Please confirm password";
        } else {
          validationErrors[field.name] = `Please enter your ${field.label}`;
        }
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="login-card mt-lg-3">
      <div className="card p-5  m-auto">
        <div className="text-center mb-5">
          <h2 className="mb-2">{formTitle}</h2>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <span>
              <Link
                to="/login"
                className="text-decoration-none"
                style={{ color: "#032773" }}
              >
                Log in
              </Link>
            </span>
          </p>
        </div>

        <form onSubmit={handleNext}>
          {fields.map((field) => (
            <div
              className="mb-5"
              style={{ position: "relative" }}
              key={field.name}
            >
              <label htmlFor={field.name} className="form-label">
                {field.label}{" "}
                {field.required && (
                  <sup className="" style={{ color: "red" }}>
                    *
                  </sup>
                )}
              </label>
              <div className="input-group">
                <input
                  type={
                    field.type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : field.type
                  }
                  className="form-control py-2"
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                />
                {field.type === "password" && (
                  <span
                    className="input-group-text"
                    onClick={handleTogglePassword}
                    style={{ cursor: "pointer", background: "white" }}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye-slash"></i>
                    ) : (
                      <i className="bi bi-eye"></i>
                    )}
                  </span>
                )}
              </div>
              {errors[field.name] && (
                <div className="text-danger">{errors[field.name]}</div>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="btn btn-secondary"
            style={{ fontSize: "20px", width: "100%" }}
          >
            {submitButtonLabel}
          </button>
        </form>
      </div>
    </div>
  );
}

export const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const handlePasswordReset = (e) => {
    e.preventDefault();

    setEmailError("");

    let hasError = false;

    if (!email) {
      setEmailError("Please enter your email address");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    navigate("/otp");
  };

  return (
    <div className="login-card ">
      <div className="card p-5  m-auto">
        <div className="text-center mb-5">
          <h2 className="mb-2">Log in</h2>
        </div>

        <form onSubmit={handlePasswordReset}>
          <div className="mb-4" style={{ position: "relative" }}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control py-2"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="text-center mt-5">
            <ResetPasswordbtn text="Send OTP" />
          </div>
        </form>
      </div>
    </div>
  );
};

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [showSignUpButtons, setShowSignUpButtons] = useState(false);

  const toggleSignUpButtons = () => {
    setShowSignUpButtons(!showSignUpButtons);
  };

  const handleLogIn = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let hasError = false;

    if (!email) {
      setEmailError("Please enter your email address");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="login-card mt-lg-5">
      <div className="card p-5  m-auto">
        <div className="text-center mb-5">
          <h2 className="mb-2">Log in</h2>
          <p>Welcome back!</p>
        </div>

        <form onSubmit={handleLogIn}>
          <div className="mb-5" style={{ position: "relative" }}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control py-2"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="mb-2" style={{ position: "relative" }}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control py-2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordError && (
              <div className="text-danger">{passwordError}</div>
            )}
          </div>

          <Link
            to="/password-reset"
            className="d-flex mb-4 justify-content-end text-decoration-none text-secondary"
          >
            <h6>Forgot password?</h6>
          </Link>
          <Loginbtn />
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span>
            <Link
              onClick={toggleSignUpButtons}
              className="text-decoration-none"
              style={{ color: "#032773" }}
            >
              Sign up
            </Link>
          </span>
        </p>
        {showSignUpButtons && (
          <div
            role="group"
            aria-label="Basic example"
            className="btn-group form-sign-btn position-absolute gap-1"
          >
            <Link to="/company-signup" className="btn btn-primary">
              As a Company
            </Link>
            <div
              className="my-2"
              style={{ borderLeft: "1px solid white" }}
            ></div>
            <Link to="/lawyer-signup" type="button" className="btn btn-primary">
              As a Lawyer
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
