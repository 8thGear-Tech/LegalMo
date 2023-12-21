import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/Navbar/UserNavbar";
import Footer from "../../components/Footer";
import lawyerRoute from "../../services/lawyerRoute";

const LawyerDashboard = () => {
  const [jobs, setJobs] = useState([]);

  const [statusFilter, setStatusFilter] = useState("Pending projects");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [options, setOptions] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const { getPendingJobs, getCompletedJobs } = lawyerRoute();

  useEffect(() => {
    if (statusFilter === "Pending projects") {
      getPendingJobs(setJobs, setMessage, setLoading, setIsSuccessful);
    } else if (statusFilter === "Completed projects") {
      getCompletedJobs(setJobs, setMessage, setLoading, setIsSuccessful);
    }
  }, [statusFilter]);

  const handleStatusFilterChange = (newStatus) => {
    setStatusFilter(newStatus);
  };

  return (
    <div>
      <UserNavbar />
      <div className="p-3 p-sm-5 ">
        <div className="card">
          <div
            className="py-3 px-lg-5 px-1 "
            style={{ borderBottom: "1px solid #CFCFCF" }}
          >
            <div className="d-none d-md-flex gap-5">
              <p
                className={
                  statusFilter === "Pending projects"
                    ? "active-p-text"
                    : " p-text"
                }
                onClick={() => handleStatusFilterChange("Pending projects")}
              >
                Pending projects
              </p>

              <p
                className={
                  statusFilter === "Completed projects"
                    ? "active-p-text"
                    : "p-text"
                }
                onClick={() => handleStatusFilterChange("Completed projects")}
              >
                Completed projects
              </p>
            </div>
            <div className="d-flex d-md-none px-2">
              <div className="dropdown">
                <select
                  value={statusFilter}
                  onChange={(e) => handleStatusFilterChange(e.target.value)}
                  className="p-2"
                >
                  <option value="Pending projects">Pending project</option>
                  <option value="Completed projects">Completed Project</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            {jobs.length === 0 ? (
              <p className="justify-content-center text-center py-5">
                No projects
              </p>
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
                      <div className="d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action">
                        {/* <p>Schedule a call</p> */}
                        <p>
                          <a href="tel:+2348094818884"> Schedule a call</a>
                        </p>
                        <i className="bi bi-telephone mb-3"></i>
                      </div>
                      <div className="d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action">
                        <p>Chat with a client</p>
                        <i className="bi bi-chat mb-3"></i>
                      </div>
                      <div className="d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action">
                        <p>Upload</p>
                        <i className="bi bi-cloud-upload mb-3"></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="card px-sm-5 py-5 px-3 gap-5 my-5">
          <h4 className="text-center">Notifications</h4>
          <div className="d-block d-md-flex gap-5 align-items-center">
            <div className="d-flex flex-column gap-3">
              <h6>Contract Drafting and Review</h6>
              <p style={{ color: "#5F5F5F" }}>
                We are looking for an employment law expert who will prepare and
                employment contract stating lorem ipsom lorem ipsom.....
              </p>
            </div>
            <div
              className="
    "
            >
              <button
                type="submit"
                className="btn btn-outline-primary"
                style={{ width: "180px" }}
              >
                View more details
              </button>
            </div>
          </div>
          <div className="d-block d-md-flex gap-5 align-items-center">
            <div className="d-flex flex-column gap-3">
              <h6>Contract Drafting and Review</h6>
              <p style={{ color: "#5F5F5F" }}>
                We are looking for an employment law expert who will prepare and
                employment contract stating lorem ipsom lorem ipsom.....
              </p>
            </div>
            <div
              className="
    "
            >
              <button
                type="submit"
                className="btn btn-outline-primary"
                style={{ width: "195px" }}
              >
                Scheduled Client call
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LawyerDashboard;
