import React, { useState } from "react";
import GuestNavbar from "../../components/Navbar/GuestNavbar";
import UserNavbar from "../../components/Navbar/UserNavbar";
import HeroImage from "../../assets/images/landingheroimage.png";
import Footer from "../../components/Footer";

import Intellectual from "../../assets/images/intellectualpptyimage.svg";
import Contract from "../../assets/images/contractlawimage.svg";
import Employment from "../../assets/images/emoloymentlawimage.svg";
import Choose1 from "../../assets/images/chooseusimage.svg";
import Choose2 from "../../assets/images/choose3.svg";
import Choose3 from "../../assets/images/choose2.svg";
import Touch from "../../assets/images/intouchimage.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const select1 = [
  {
    id: 1,
    action: "01 / Sign up",
    detail: "Join us by signing up and giving us access to a few details",
  },
  {
    id: 2,
    action: "02 / Verification",
    detail: "Wait for an hour for your account to be verified",
  },
  {
    id: 3,
    action: "03 / Log in",
    detail:
      "Log in after verification with your username and password to get started",
  },
];

const select2 = [
  {
    id: 1,
    action: "04 / Click",
    detail: 'Click on the "Product" button to be directed to the product page',
  },
  {
    id: 2,
    action: "05 / Explore",
    detail: "Check out the several products we have",
  },
  {
    id: 3,
    action: "06 / Choose",
    detail:
      "Choose the products that best suits your business current legal need",
  },
];

const select3 = [
  {
    id: 1,
    action: "07 / Details",
    detail: "Give me more details and upload necessary documents",
  },
  {
    id: 2,
    action: "08 / Reserve",
    detail: "Reserve your preffered product for later",
  },
  {
    id: 3,
    action: "09 / Purchase",
    detail:
      "Purchase your preffered product and a professional will get to it right away",
  },
];

const carouselData = [
  {
    title: "Affordable Rates",
    description:
      "Our rates are designed to be affordable while providing the quality services you need. You can rest assured that you're getting the best value for your investment.",
    image: Choose1,
  },
  {
    title: "Experienced Professionals",
    description:
      "Our pool of lawyers consist of highly experienced legal professionals with diverse backgrounds and expertise in areas of law suited to meet the legal needs of SMEs and Startups. This diversity allows us provide comprehensive legal services to our clients across multiple practice areas.",
    image: Choose2,
  },
  {
    title: "Accessible Services",
    description:
      "Our services are designed to be easily accessible online, anytime, anywhere. This means that you can access our services from your computer, tablet, or smartphone, no matter where you are in the world.",
    image: Choose3,
  },
];

const Landing = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const [showContactButtons, setShowContactButtons] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const userType = localStorage.getItem("userType");
    const token = localStorage.getItem("userToken");
    if (userType && token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    setIsLoading(false);
  }, []);

  const toggleContactButtons = () => {
    setShowContactButtons(!showContactButtons);
  };

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  if (isLoading) {
    return (
      <div
        className="justify-content-center align-items-center text-center"
        style={{ paddingTop: "300px" }}
      >
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoggedIn ? <UserNavbar /> : <GuestNavbar />}

      <div>
        <div className="card" style={{ border: "none", borderRadius: "0" }}>
          <img
            src={HeroImage}
            className="card-img"
            alt="heroImage"
            style={{ minHeight: "400px" }}
          />
          <div className="card-img-overlay landing-hero-card my-lg-5 my-md-0 my-3 py-xl-5 px-3 ps-lg-5 ms-md-2">
            <h1
              className="card-title mb-lg-4 mb-3 mt-xxl-5 pt-xl-5 pt-lg-0 pt-sm-3"
              style={{ color: "#021a4d", lineHeight: "74px" }}
            >
              Give Your Business
              <br />
              Adequate Legal Health Cover
            </h1>
            <h6
              className="card-text mb-lg-4 mb-3"
              style={{
                maxWidth: "37rem",
                lineHeight: "28px",
                fontWeight: "500",
              }}
            >
              We provide easy access to legal services tailored for your
              business needs.
            </h6>
            <a href="#" className="btn btn-primary mb-lg-4 mb-3">
              Learn More
            </a>
            <p className="card-text-small" style={{ lineHeight: "23px" }}>
              Start protecting your business today
            </p>
          </div>
        </div>
        <div className="container-fluid p-md-5 p-2 my-5">
          <section className="services-section">
            <div className="text-center mb-5">
              <h3 className="mb-4" style={{ lineHeight: "48px" }}>
                Our Services
              </h3>
              <h6 className="pb-4">Explore our wide range of legal services</h6>
            </div>
            <div className="row  mb-5 px-xl-5 px-lg-0 p-md-0 px-4">
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div className="card mx-xl-2 mb-4">
                  <div className="row g-2 py-3 px-3">
                    <div className="col-xxl-5 col-md-12">
                      <img
                        src={Contract}
                        className="img-fluid rounded-start my-auto"
                        alt="contract"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="col">
                      <div className="card-body">
                        <h6
                          className="mb-3"
                          style={{
                            fontWeight: "600",
                            color: "#5F5F5F",
                            lineHeight: "28px",
                          }}
                        >
                          Contract Law
                        </h6>
                        <p className="card-text"> Protect your business</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-6 col-sm-12">
                <div className="card mx-xl-2 mb-4">
                  <div className="row g-2 py-3 px-3">
                    <div className="col-xxl-5 col-md-12">
                      <img
                        src={Intellectual}
                        className="img-fluid rounded-start my-auto"
                        alt="contract"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="col">
                      <div className="card-body">
                        <h6
                          className="mb-3"
                          style={{
                            fontWeight: "600",
                            color: "#5F5F5F",
                            lineHeight: "28px",
                          }}
                        >
                          Intellectual Property
                        </h6>
                        <p className="card-text">Secure all your ideas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div className="card mx-xl-2 mb-3">
                  <div className="row g-2 py-3 px-3">
                    <div className="col-xxl-5 col-md-12">
                      <img
                        src={Employment}
                        className="img-fluid rounded-start my-auto"
                        alt="contract"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="col">
                      <div className="card-body">
                        <h6
                          className="mb-3"
                          style={{
                            fontWeight: "600",
                            color: "#5F5F5F",
                            lineHeight: "28px",
                          }}
                        >
                          Employment Law
                        </h6>
                        <p className="card-text">Ensure fair practices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/products"
                type="button"
                className="btn btn-outline-primary"
              >
                View all services
              </Link>
            </div>
          </section>
        </div>
        <div
          className="container-fluid p-md-5 p-2 "
          style={{ backgroundColor: "#EEF1F6" }}
        >
          <section className="choose-us-section my-3">
            <div className="text-center  mb-5 mb-xxl-5 mb-md-2">
              <h3 className="mb-4">Why Choose Us</h3>
              <h6 className="pb-xxl-4">
                We are committed to providing access to quality legal services
              </h6>
            </div>
            <div className=" ">
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
              >
                <div className="carousel-inner">
                  {carouselData.map((item, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="px-xxl-5 mx-xxl-5 px-4 px-md-0">
                        <div
                          className="card px-lg-5 mx-lg-5 mb-3 "
                          style={{
                            border: "none",
                            borderRadius: "0",
                            background: "none",
                            boxShadow: "none",
                          }}
                        >
                          <div className="row gap-xxl-4 gap-0 px-xl-5 d-none d-md-flex">
                            <div className="col">
                              <div className="card-body my-md-5 py-xl-5">
                                <h3 className="text-center mb-3 mb-md-4">
                                  {item.title}
                                </h3>
                                <h6 className="">{item.description}</h6>
                                <div className="pt-xxl-5 mt-4 mt-md-5 text-center">
                                  <Link
                                    to="/signup/asacompany"
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Join us
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <img
                                src={item.image}
                                className="img-fluid rounded-start"
                                alt="choose"
                                style={{ height: "100%", width: "100%" }}
                              />
                            </div>
                          </div>
                          <div className="row gap-xxl-4 gap-0 px-xl-5 d-md-none d-flex">
                            <div className="col-12 col-md-6 text-center">
                              <img
                                src={item.image}
                                className="img-fluid rounded-start"
                                alt="choose"
                                style={{ height: "300px", width: "300px" }}
                              />
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="card-body my-md-5 py-xl-5">
                                <h3 className="text-center mb-3 mb-md-4">
                                  {item.title}
                                </h3>
                                <h6 className="">{item.description}</h6>
                                <div className="pt-xxl-5 mt-4 mt-md-5 text-center">
                                  <Link
                                    to="/signup/asacompany"
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Join us
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="carousel-controls-container">
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid p-md-5 p-2 my-md-5 my-2">
          <section className="py-5 px-xxl-5 px-md-0 px-4 works-section">
            <div className="row gap-4">
              <div className="col-12 col-lg-4">
                <h2 className="mb-4" style={{ fontWeight: "500" }}>
                  How it Works
                </h2>
                <h5>
                  Understand how to easily navigate through our site in order to
                  get the best service.
                </h5>
              </div>
              <div className="col-12 col-xl-7 col-lg-7 mt-4 mt-lg-0">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                  style={{ width: "100%" }}
                >
                  <button
                    type="button"
                    className={
                      selectedButton === 0
                        ? "active-btn-outline btn btn-outline-primary"
                        : " btn btn-outline-primary"
                    }
                    onClick={() => handleButtonClick(0)}
                  >
                    Join us
                  </button>
                  <button
                    type="button"
                    className={
                      selectedButton === 1
                        ? "active-btn-outline btn btn-outline-primary"
                        : " btn btn-outline-primary"
                    }
                    onClick={() => handleButtonClick(1)}
                  >
                    Choose a product
                  </button>
                  <button
                    type="button"
                    className={
                      selectedButton === 2
                        ? "active-btn-outline btn btn-outline-primary"
                        : " btn btn-outline-primary"
                    }
                    onClick={() => handleButtonClick(2)}
                  >
                    Purchase or reserve
                  </button>
                </div>
                <div className="mt-xxl-5 mt-3">
                  {selectedButton === 0 && (
                    <div>
                      {select1.map((select) => {
                        const { id, action, detail } = select;
                        return (
                          <div key={id}>
                            <div className="row gap-sm-4 gap-3 px-sm-4 px-2 py-4 py-sm-4">
                              <div className="col-sm-7 col-4  d-flex align-items-center">
                                <h4> {action}</h4>
                              </div>
                              <div className="col">
                                <p style={{ color: "#545454" }}>{detail}</p>
                              </div>
                            </div>
                            <div className="line"></div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {selectedButton === 1 && (
                    <div>
                      {select2.map((select) => {
                        const { id, action, detail } = select;
                        return (
                          <div key={id}>
                            <div className="row gap-sm-4 gap-3 px-sm-4 px-2 py-4 py-sm-4">
                              <div className="col-sm-7 col-4  d-flex align-items-center">
                                <h4> {action}</h4>
                              </div>
                              <div className="col">
                                <p style={{ color: "#545454" }}>{detail}</p>
                              </div>
                            </div>
                            <div className="line"></div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {selectedButton === 2 && (
                    <div>
                      {select3.map((select) => {
                        const { id, action, detail } = select;
                        return (
                          <div key={id}>
                            <div
                              className="row gap-sm-4 gap-3 px-sm-4 px-2 py-4 py-sm-4"
                              key={id}
                            >
                              <div className="col-sm-7 col-4  d-flex align-items-center">
                                <h4> {action}</h4>
                              </div>
                              <div className="col">
                                <p style={{ color: "#545454" }}>{detail}</p>
                              </div>
                            </div>
                            <div className="line"></div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="card in-touch-card"
          style={{ border: "none", borderRadius: "0" }}
        >
          <img
            src={Touch}
            className="card-img"
            alt="heroImage"
            style={{ minHeight: "350px" }}
          />
          <div className="card-img-overlay text-align-center text-center justify-content-center py-5">
            <h2 className="text-white mb-4 mt-xxl-5 mt-xl-3 pt-xl-5 pt-lg-3">
              Ready to protect your business?
            </h2>
            <p className="card-text mb-5 text-white">
              Get in touch with us today
            </p>
            <div className="position-relative">
              <a
                onClick={toggleContactButtons}
                className="btn btn-outline-light mt-sm-5 mt-4"
              >
                Contact us
              </a>
              {showContactButtons && (
                <div
                  role="group"
                  aria-label="Basic example"
                  className="btn-group position-absolute landing-contact-btn"
                >
                  {/* <button type="button" className="btn btn-primary">
                    Send an Email
                  </button> */}
                  <a href="mailto:info@legalmo.biz" className="btn btn-primary">
                    Send an Email
                  </a>
                  <div
                    className="my-2"
                    style={{ borderLeft: "1px solid white" }}
                  ></div>
                  {/* <button type="button" className="btn btn-primary">
                    Speak to an Agent
                  </button> */}
                  <a href="tel:+2348094818884" className="btn btn-primary">
                    Speak to an Agent
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
