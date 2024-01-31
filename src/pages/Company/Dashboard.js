import React, { useRef, useState, useEffect } from "react";
import UserNavbar from "../../components/Navbar/UserNavbar";
import Footer from "../../components/Footer";

import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";
import companyRoute from "../../services/companyRoute";

const CompanyDashboard = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  const [statusFilter, setStatusFilter] = useState("Pending jobs");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [options, setOptions] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const { getPendingJobs, getCompletedJobs, editJobDetail } = companyRoute();
  const [selectedButton, setSelectedButton] = useState(0);

  const [newDetails, setNewDetails] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showMoreDetailsModal, setShowMoreDetailsModal] = useState(false);
  const [jobDetails, setJobDetails] = useState({});
  const [jobFiles, setJobFiles] = useState({});
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileUrl, setSelectedFileUrl] = useState(null);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    if (statusFilter === "Pending") {
      getPendingJobs(setJobs, setMessage, setLoading, setIsSuccessful);
    } else if (statusFilter === "Completed") {
      getCompletedJobs(setJobs, setMessage, setLoading, setIsSuccessful);
    }
  }, [statusFilter]);

  useEffect(() => {
    getPendingJobs(setJobs, setMessage, setLoading, setIsSuccessful);
  }, []);

  const renderPendingNotifications = () => {
    const pendingJobsWithDetails = jobs.filter(
      (job) => job.status === "pending" && job.lawyerRequestedDetail
    );

    // Sort pending jobs by updatedAt in descending order
    const sortedPendingJobs = pendingJobsWithDetails.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );

    return (
      <div className="card px-sm-5 py-5 px-3 gap-5 my-5">
        <h4 className="text-center">Notifications</h4>
        {sortedPendingJobs.length === 0 ? (
          <p className="text-center mt-4 mb-3">No notifications</p>
        ) : (
          <div>
            {sortedPendingJobs.map((job) => (
              <div
                className="d-block d-md-flex justify-content-between align-items-center mb-5 mb-md-3"
                key={job?._id}
              >
                <div className="d-flex flex-column gap-2 gap-md-3">
                  <h6>{job?.productId?.productName}</h6>
                  <p style={{ color: "#5F5F5F" }}>
                    {job?.productId?.productDescription
                      .split(" ")
                      .slice(0, 17)
                      .join(" ")}
                    {job?.productId?.productDescription.split(" ").length > 17
                      ? "..."
                      : ""}
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    style={{ width: "180px" }}
                    onClick={() => handleMoreDetailsShow(job)}
                  >
                    Give more details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  const handleStatusFilterChange = (newStatus) => {
    setStatusFilter(newStatus);
  };

  const openUploadWidget = () => {
    if (window.cloudinary) {
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName: "do03u50qn",
          uploadPreset: "LegalMoUpload",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            const fileName = result.info.original_filename || "";
            setSelectedFile(fileName);

            const fileUrl = result.info.url || "";
            setSelectedFileUrl(fileUrl);
          }
        }
      );

      if (widgetRef.current) {
        widgetRef.current.open();
      }
    }
  };

  const handleDeleteClick = () => {
    setSelectedFileUrl((prevUrl) => {
      return null;
    });
  };

  const handleMoreDetailsShow = (job) => {
    setSelectedJob(job);
    setNewDetails(job?.companyDetail);
    setShowMoreDetailsModal(true);
    setSelectedFileUrl(job?.companyFile);
    setSelectedFile(job?.companyFileName);
  };

  const handleMoreDetailsClose = () => {
    setSelectedJob(null);
    setShowMoreDetailsModal(false);
  };

  const handleMoreDetailsSend = () => {
    if (newDetails === "") {
      alert("Kindly add/edit details");
      return;
    }

    const jobId = selectedJob?._id;

    const body = {
      detail: newDetails,
    };

    if (
      selectedFileUrl !== "" &&
      selectedFileUrl !== null &&
      selectedFileUrl !== undefined
    ) {
      body.file = selectedFileUrl;
    }

    if (
      selectedFile !== "" &&
      selectedFile !== null &&
      selectedFile !== undefined
    ) {
      body.fileName = selectedFile;
    }

    editJobDetail(
      body,
      setMessage,
      setLoading,
      setIsSuccessful,
      jobId,
      setJobs
    );

    setShowMoreDetailsModal(false);
  };
  if (loading) {
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
    <div>
      <UserNavbar />
      <div className="p-3 p-sm-5 ">
        <div className="card">
          <div
            className="d-flex gap-5 py-3 px-lg-5 px-1 "
            style={{ borderBottom: "1px solid #CFCFCF" }}
          >
            <p
              className={
                statusFilter === "Pending" ? "active-p-text" : " p-text"
              }
              onClick={() => handleStatusFilterChange("Pending")}
            >
              Pending{" "}
            </p>

            <p
              className={
                statusFilter === "Completed" ? "active-p-text" : "p-text"
              }
              onClick={() => handleStatusFilterChange("Completed")}
            >
              Completed{" "}
            </p>
          </div>
          <div>
            {jobs.length === 0 ? (
              <p className="justify-content-center text-center py-5">No jobs</p>
            ) : (
              <div>
                {jobs.map((job) => {
                  return (
                    <div
                      className="d-block d-sm-flex justify-content-between align-items-center gap-md-3 gap-sm-3 px-lg-5 px-3 pt-3 pb-2"
                      key={job?._id}
                      style={{ borderBottom: "1px solid #CFCFCF" }}
                    >
                      <div className="d-flex flex-column gap-4">
                        <h6>{job?.productId?.productName}</h6>
                        <p style={{ color: "#5F5F5F" }}>
                          Amount: ₦
                          {job?.productId?.productPrice.toLocaleString()}
                        </p>
                      </div>
                      <div className="d-block d-sm-flex gap-5">
                        <div className="d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action">
                          {/* <p>Schedule a call</p> */}
                          <p>
                            {" "}
                            <a
                              href="tel:+2348094818884"
                              className="text-decoration-none p"
                              style={{ color: "#000000" }}
                            >
                              Schedule a call
                            </a>
                          </p>

                          <i className="bi bi-telephone mb-3"></i>
                        </div>
                        <div className="d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action">
                          {/* <p>Chat with a lawyer</p> */}
                          <p>
                            <a
                              href="mailto:info@legalmo.biz"
                              className="text-decoration-none"
                              style={{ color: "#000000" }}
                            >
                              Email
                            </a>
                          </p>

                          {/* <p>Chat with a lawyer</p> */}

                          <i className="bi bi-chat mb-3"></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {renderPendingNotifications()}
      </div>

      <Footer />

      {/* More details modal      */}
      {selectedJob && (
        <div>
          <div
            className={`modal fade px-2 ${showMoreDetailsModal ? "show" : ""}`}
            style={{ display: showMoreDetailsModal ? "block" : "none" }}
            tabIndex="-1"
            role="dialog"
            aria-labelledby=""
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              role="document"
            >
              <div className="modal-content gap-3 p-3 p-sm-5">
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    id="editPaymentModal"
                    style={{ fontWeight: "600" }}
                  >
                    {selectedJob?.productId?.productName}
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleMoreDetailsClose}
                  ></button>
                </div>
                <div className="modal-body ">
                  <h6 className="mb-4" style={{ color: "#5F5F5F" }}>
                    {selectedJob?.productId?.productDescription}
                  </h6>
                  <h6 className="mb-2" style={{ color: "#032773" }}>
                    Requested Details: {selectedJob?.lawyerRequestedDetail}
                  </h6>

                  <div className="form-group gap-2 mt-5">
                    <h6
                      name="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Give more details
                    </h6>
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Start typing..."
                      id="newDetails"
                      value={newDetails}
                      onChange={(e) => setNewDetails(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="d-flex flex-column mt-4">
                    <div>
                      {(!selectedFileUrl || !selectedFile) && (
                        <button
                          className="d-flex gap-2 btn btn-outline-primary justify-content-center"
                          onClick={openUploadWidget}
                          style={{ width: "250px" }}
                        >
                          Upload Document <i className="bi bi-cloud-upload"></i>
                        </button>
                      )}

                      {selectedFileUrl && selectedFile && (
                        <div
                          className="d-flex my-2"
                          style={{ flexWrap: "wrap" }}
                        >
                          <p className="p-small">
                            <i
                              className="bi bi-file-earmark-text-fill"
                              style={{ color: "wine" }}
                            ></i>{" "}
                            &nbsp;
                            <a href={selectedFileUrl}>{selectedFile}</a>
                            <button
                              className="btn btn-danger"
                              onClick={handleDeleteClick}
                              style={{
                                border: "none",
                                backgroundColor: "transparent",
                              }}
                            >
                              <i
                                className="bi bi-trash"
                                style={{ color: "red", fill: "red" }}
                              ></i>
                            </button>
                          </p>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      style={{ width: "250px" }}
                      className="btn btn-primary mt-3 px-5"
                      onClick={handleMoreDetailsSend}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`modal-backdrop fade ${
              showMoreDetailsModal ? "show" : ""
            }`}
            style={{ display: showMoreDetailsModal ? "block" : "none" }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CompanyDashboard;
