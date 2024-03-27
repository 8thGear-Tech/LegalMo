import React, { useEffect, useState } from "react";
import { LawyerProfileForm } from "../../components/Forms/Lawyer";
import UserNavbar from "../../components/Navbar/UserNavbar";

import lawyerRoute from "../../services/lawyerRoute";
import { useParams } from "react-router-dom";
import adminRoute from "../../services/adminRoute";
import { useAppContext } from "../../AppContext";
import { LoginModal } from "../../components/Forms/Authenticationforms";
import Footer from "../../components/Footer";

function LawyerProfile() {
  const { userData } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState([]);
  const { getLawyerProfile, updateProfile } = lawyerRoute();
  const { getLawyer } = adminRoute();
  const { lawyerId } = useParams();

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    if (userType === "admin") {
      getLawyer(setMessage, setLoading, setIsSuccessful, lawyerId, setDetails);
    } else {
      getLawyerProfile(
        setMessage,
        setLoading,
        setIsSuccessful,
        setDetails,
        lawyerId
      );
    }
  }, []);

  const handleSave = (formData, imageFile, areasOfPractise) => {
    setIsEditing(false);
    const body = {
      profileImage: imageFile,
    };

    if (
      formData.officialEmail !== "" &&
      formData.officialEmail !== null &&
      formData.officialEmail !== undefined
    ) {
      body.officialEmail = formData.officialEmail;
    }
    if (
      formData.scn !== "" &&
      formData.scn !== null &&
      formData.scn !== undefined
    ) {
      body.scn = formData.scn;
    }
    if (
      formData.yourBio !== "" &&
      formData.yourBio !== null &&
      formData.yourBio !== undefined
    ) {
      body.yourBio = formData.yourBio;
    }
    if (
      formData.phoneNumber !== "" &&
      formData.phoneNumber !== null &&
      formData.phoneNumber !== undefined
    ) {
      body.phoneNumber = formData.phoneNumber;
    }
    if (
      formData.alternativeEmailAddress !== "" &&
      formData.alternativeEmailAddress !== null &&
      formData.alternativeEmailAddress !== undefined
    ) {
      body.alternativeEmailAddress = formData.alternativeEmailAddress;
    }
    if (
      formData.yearOfCall !== "" &&
      formData.yearOfCall !== null &&
      formData.yearOfCall !== undefined
    ) {
      body.yearOfCall = formData.yearOfCall;
    }

    if (
      formData.areasOfPractise !== "" &&
      formData.areasOfPractise !== null &&
      formData.areasOfPractise !== undefined
    ) {
      body.areasOfPractise = formData.areasOfPractise;
    }

    updateProfile(
      body,
      setMessage,
      setLoading,
      setIsSuccessful,
      setDetails,
      lawyerId,
      setShowModal
    );
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div
        className="justify-content-center align-items-center text-center my-5"
        style={{ paddingTop: "200px" }}
      >
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <UserNavbar />
      <section className="py-5 px-3 px-sm-5 mb-5">
        {isEditing ? (
          <LawyerProfileForm
            initialDetails={details}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <div className="px-lg-5">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between px-xl-5 mb-3">
              <div className="order-md-1 order-2 mt-5 mt-md-0">
                <h6 style={{ fontWeight: "600", color: "#373737" }}>
                  Expertise
                </h6>
                <div className="d-flex gap-3 flex-wrap mt-3">
                  {details.areasOfPractise?.length > 0 ? (
                    details.areasOfPractise.map((practise, index) => (
                      <button
                        key={index}
                        className="btn btn-outline-secondary me-5"
                      >
                        {practise}
                      </button>
                    ))
                  ) : (
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setIsEditing(true)}
                    >
                      Add Expertise
                    </button>
                  )}
                </div>
              </div>
              <div className="d-flex flex-column text-center order-md-2 order-1">
                <div>
                  <img
                    src={details?.profileImage?.url}
                    alt="lawyer"
                    className="profile-img"
                    style={{
                      background: "#FFF",
                      padding: "10px",
                      borderRadius: "200px",
                      boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  />
                </div>
                <div className="mt-3 d-flex flex-column text-align-center text-center action">
                  <h5 style={{ fontWeight: "500" }}>{details?.name}</h5>

                  <p
                    className="text-secondary"
                    style={{ color: "" }}
                    onClick={() => setIsEditing(true)}
                  >
                    Update your details{" "}
                    <span>
                      <i className="bi bi-pencil"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 ">
              <div
                className="py-3 row mb-3"
                style={{ borderBottom: "1px solid #CFCFCF" }}
              >
                <h6 className="col-12 col-md-3" style={{ fontWeight: "600" }}>
                  Email Address
                </h6>
                <div className="card pt-2 pb-1 px-md-2 col">
                  <p>{details?.officialEmail}</p>
                </div>
              </div>
              <div
                className="py-3 row mb-3"
                style={{ borderBottom: "1px solid #CFCFCF" }}
              >
                <h6 className="col-12 col-md-3" style={{ fontWeight: "600" }}>
                  SCN
                </h6>
                <div className="card pt-2 pb-1 px-md-2 col">
                  <p>{details?.scn}</p>
                </div>
              </div>
              <div
                className="py-3 row mb-3"
                style={{ borderBottom: "1px solid #CFCFCF" }}
              >
                <h6
                  className="col-12 col-md-3"
                  style={{ fontWeight: "600", width: "" }}
                >
                  Your Bio
                </h6>
                <div className="card pt-2 pb-1 px-md-2 col">
                  <p>{details?.yourBio}</p>
                </div>
              </div>
              <div
                className="py-3 row mb-3"
                style={{ borderBottom: "1px solid #CFCFCF" }}
              >
                <h6 className="col-12 col-md-3" style={{ fontWeight: "600" }}>
                  Year of Call
                </h6>
                <div className="card pt-2 pb-1 px-md-2 col">
                  <p>{details?.yearOfCall}</p>
                </div>
              </div>
              <div
                className="py-3 row mb-3"
                style={{ borderBottom: "1px solid #CFCFCF" }}
              >
                <h6 className="col-12 col-md-3" style={{ fontWeight: "600" }}>
                  Phone Number
                </h6>
                <div className="card pt-2 pb-1 px-md-2 col">
                  <p>{details?.phoneNumber}</p>
                </div>
              </div>
              <div
                className="py-3 row mb-3"
                style={{ borderBottom: "1px solid #CFCFCF" }}
              >
                <h6 className="col-12 col-md-3" style={{ fontWeight: "600" }}>
                  Alternate Email
                </h6>
                <div className="card pt-2 pb-1 px-md-2 col">
                  <p>{details?.alternativeEmailAddress}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
      <LoginModal
        showModal={showModal}
        isSuccess={isSuccessful}
        closeModal={() => setShowModal(false)}
        modalText={message}
      />
    </div>
  );
}

export default LawyerProfile;
