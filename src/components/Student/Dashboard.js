import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import axios from 'axios';
function PersonalInformation(props) {
  const [data, setdata] = useState([]);
  const [mounted, setMounted] = useState();
  useEffect(() => {
    var mounted = localStorage.getItem("studentToken")
    setMounted(mounted)
    var myurl = process.env.REACT_APP_SERVER_URL;
    axios.get(process.env.REACT_APP_SERVER_URL + 'student/applications', { headers: { 'Authorization': mounted } })
      .then(function (res) {
        if (res.data.success === true) {
          setdata(res.data.studentApplications)
        }
      })
      .catch(error => {
      });
  }, [])
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">My Application</h1>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-7">
                  {data.map((object, i) => {
                    return (
                      <div className="card shadow mb-4 appblock" key={i}>
                        <div className="row">
                          <div className="col-md-10">
                            <div className="unv-name">
                              <span><i className="fas fa-university" /></span>
                              <h5>Unversity</h5>
                              <p>{object.universityName}</p>
                            </div>
                            <div className="course-name">
                              <span><i className="fas fa-graduation-cap" /></span>
                              <h5>Course</h5>
                              <p>{object.courseName}</p>
                            </div>
                            <div className="Session-name">
                              <span><i className="fas fa-calendar-week" /></span>
                              <h5>Session</h5>
                              <p>{object.session}</p>
                            </div>
                            <div className="apply-process">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="unv-name">
                                    <span><i className="fas fa-chart-line" /></span>
                                    <h5>Application Process</h5>
                                  </div>
                                </div>
                                <div className="col-md-6 text-right">
                                  <p>5 Documents Left</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-animated" style={{ width: '25%' }}>
                                      Application Intiated
                                    </div>
                                    <div className="progress-bar " style={{ width: '25%' }}>
                                      Approved For Submission
                                    </div>
                                    <div className="progress-bar " style={{ width: '25%' }}>
                                      Submitted
                                    </div>
                                    <div className="progress-bar " style={{ width: '25%' }}>
                                      Result Declared
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="btn-groups">
                              <button type="button" className="btn btn-primary" title="Upload Document">Upload Doc</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">To Do List</h6>
                    </div>
                    <div className="card-body">
                      <h4 className="small ">1 Visit our Facebook Profile <a href="#"
                        className="float-right">Visit</a></h4>

                      <h4 className="small">2 Download our latest E-book <a href="#"
                        className="float-right">Download</a></h4>

                      <h4 className="small">3 Link your Facebook profile <a href="#"
                        className="float-right">Update</a></h4>

                      <h4 className="small">4 Link your LinkedIn profile <a href="#"
                        className="float-right">Update</a></h4>

                      <h4 className="small">5 Write a short introduction about yourself <a
                        href="#" className="float-right">Write</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Important Dates</h6>
                    </div>
                    <div className="card-body">
                      <a className=" d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                          o4<br /> April
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncatex">Hi there! I am wondering if you can help me with
                            a
                            problem I've been having.</div>
                          <div className="small text-gray-500">01 : 00 AM - 06 : 00 PM</div>
                        </div>
                      </a>
                      <a className=" d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                          o1<br /> JAN
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncatex">Hi there! I am wondering if you can help me with
                            a
                            problem I've been having.</div>
                          <div className="small text-gray-500">03 : 00 pm - 05 : 00 PM</div>
                        </div>
                      </a>
                      <a className=" d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                          o4<br /> April
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncatex">Hi there! I am wondering if you can help me with
                            a
                            problem I've been having.</div>
                          <div className="small text-gray-500">10 : 00 AM - 04 : 00 PM</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default PersonalInformation;