import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Master logo.svg";
import Insta from "../assets/images/Instagram.svg";
import FB from "../assets/images/Facebook.svg";
import Linked from "../assets/images/linkedIN.svg";
import Twitter from "../assets/images/twitter.svg";
import { useState } from "react";

const Footer = () => {
  const [showContactButtons, setShowContactButtons] = useState(false);

  const toggleContactButtons = () => {
    setShowContactButtons(!showContactButtons);
  };
  return (
    <div
      className="p-md-5 p-4 position-relative"
      style={{ background: "#878787" }}
    >
      <div className="px-lg-5 mx-xl-5">
        {/* <div className='general-footer  d-flex justify-content-between py-0 py-5 me-xl-5 pe-md-5'> */}
        <div className="general-footer row py-2 py-md-5 ">
          <div className="col">
            <img src={Logo} alt="logo" className="footer-image" />
          </div>
          <div className=" col d-flex  flex-column text-white gap-4 align-items-md-center ">
            <h4>Quick links</h4>
            <div className="d-flex flex-column gap-4">
              <Link to="/about-us" className="text-white text-decoration-none">
                About
              </Link>
              <Link
                className="text-white text-decoration-none"
                onClick={toggleContactButtons}
              >
                Contact
              </Link>
              {showContactButtons && (
                <div
                  role="group"
                  aria-label="Basic example"
                  className="btn-group position-absolute footer-btn"
                >
                  <button type="button" className="btn btn-primary">
                    Send an Email
                  </button>
                  <div
                    className="my-2"
                    style={{ borderLeft: "1px solid white" }}
                  ></div>
                  <button type="button" className="btn btn-primary">
                    Speak to an Agent
                  </button>
                </div>
              )}
              <Link
                to="/terms-of-use"
                className="text-white text-decoration-none"
              >
                Terms of use
              </Link>
              <Link
                to="/privacy-policy"
                className="text-white text-decoration-none"
              >
                Privacy policy
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 mt-5 mt-sm-0 d-flex align-items-center flex-column text-white gap-3 ">
            <h4 className="">Follow us</h4>
            <div className="d-flex gap-4">
              <img src={FB} alt="social" />
              <img src={Insta} alt="social" />
              <img src={Linked} alt="social" />
              <img src={Twitter} alt="social" />
            </div>
          </div>
        </div>
        

    </div>
    <p className='text-white mt-5'>©All rights reserved 2023, LegalMO.</p>
    </div>
    </div>
  );
};

export default Footer;
