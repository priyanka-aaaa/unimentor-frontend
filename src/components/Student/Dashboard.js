import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';
class StudentDashboard extends Component {

    render() {





        return (
            <div id="page-top">


                {/* <!-- Page Wrapper --> */}
                <div id="wrapper">
                    <Sidebar />
                    {/* there will be come sidebar */}

                    {/* <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/* <!-- Main Content --> */}
                        <div id="content">

                            {/* topbar will be come there */}
                            <Topbar />
                            <div className="container">

                                {/* <!-- Page Heading --> */}
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

                                </div>



                                <div className="container">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">My Application</h1>
        </div>
        {/* Content Row */}
        <div className="row">
          {/* Area Chart */}
          <div className="col-xl-12 col-lg-7">
            <div className="card shadow mb-4">
              <div className="row">
                <div className="col-md-10">
                  <div className="unv-name">
                    <span><i className="fas fa-university" /></span>
                    <h5>Unversity</h5>
                    <p>Rimt University</p>
                  </div>
                  <div className="course-name">
                    <span><i className="fas fa-graduation-cap" /></span>
                    <h5>Course</h5>
                    <p>M.S In Business Analytics</p>
                  </div>
                  <div className="Session-name">
                    <span><i className="fas fa-calendar-week" /></span>
                    <h5>Session</h5>
                    <p>Sep 2022</p>
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
                          <div className="progress-bar bg-success progress-bar-animated" style={{width: '25%'}}>
                            Application Intiated
                          </div>
                          <div className="progress-bar " style={{width: '25%'}}>
                            Approved For Submission
                          </div>
                          <div className="progress-bar " style={{width: '25%'}}>
                            Submitted
                          </div>
                          <div className="progress-bar " style={{width: '25%'}}>
                            Result Declared
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="btn-groups">
                   
                    <button type="button" className="btn btn-primary">Upload Doc</button>
                  </div>
                </div>
              </div>
            </div>
            {/*-------*/}
            <div className="card shadow mb-4">
              <div className="row">
                <div className="col-md-10">
                  <div className="unv-name">
                    <span><i className="fas fa-university" /></span>
                    <h5>Unversity</h5>
                    <p>Rimt University</p>
                  </div>
                  <div className="course-name">
                    <span><i className="fas fa-graduation-cap" /></span>
                    <h5>Course</h5>
                    <p>M.S In Business Analytics</p>
                  </div>
                  <div className="Session-name">
                    <span><i className="fas fa-calendar-week" /></span>
                    <h5>Session</h5>
                    <p>Sep 2022</p>
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
                          <div className="progress-bar bg-success progress-bar-animated" style={{width: '25%'}}>
                            Application Intiated
                          </div>
                          <div className="progress-bar " style={{width: '25%'}}>
                            Approved For Submission
                          </div>
                          <div className="progress-bar " style={{width: '25%'}}>
                            Submitted
                          </div>
                          <div className="progress-bar " style={{width: '25%'}}>
                            Result Declared
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="btn-groups">
                   
                    <button type="button" className="btn btn-primary">Upload Doc</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow mb-4">
              <div className="row">
                <div className="col-md-10">
                  <div className="unv-name">
                    <span><i className="fas fa-university" /></span>
                    <h5>Unversity</h5>
                    <p>Rimt University</p>
                  </div>
                  <div className="course-name">
                    <span><i className="fas fa-graduation-cap" /></span>
                    <h5>Course</h5>
                    <p>M.S In Business Analytics</p>
                  </div>
                  <div className="Session-name">
                    <span><i className="fas fa-calendar-week" /></span>
                    <h5>Session</h5>
                    <p>Sep 2022</p>
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
                          <div className="progress-bar bg-success progress-bar-animated" style={{width: '25%'}}>
                            Application Intiated
                          </div>
                          <div className="progress-bar " style={{width: '25%'}}>
                            Approved For Submission
                          </div>
                          <div className="progress-bar " style={{width: '25%'}}>
                            Submitted
                          </div>
                          <div className="progress-bar " style={{width: '25%'}}>
                            Result Declared
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="btn-groups">
                   
                    <button type="button" className="btn btn-primary">Upload Doc</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  

                                {/* <!-- Content Row --> */}

                                {/* <!-- Content Row --> */}
                                <div className="row">

                                    {/* <!-- Content Column --> */}
                                    <div className="col-lg-6 mb-4">

                                        {/* <!-- Project Card Example --> */}
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">To Do List</h6>
                                            </div>
                                            <div className="card-body">
                                                <h4 className="small font-weight-bold">1 Visit our Facebook Profile <a href="#"
                                                    className="float-right">Visit</a></h4>

                                                <h4 className="small font-weight-bold">2 Download our latest E-book <a href="#"
                                                    className="float-right">Download</a></h4>

                                                <h4 className="small font-weight-bold">3 Link your Facebook profile <a href="#"
                                                    className="float-right">Update</a></h4>

                                                <h4 className="small font-weight-bold">4 Link your LinkedIn profile <a href="#"
                                                    className="float-right">Update</a></h4>

                                                <h4 className="small font-weight-bold">5 Write a short introduction about yourself <a
                                                    href="#" className="float-right">Write</a></h4>

                                            </div>
                                        </div>



                                    </div>

                                    <div className="col-lg-6 mb-4">

                                        {/* <!-- Illustrations --> */}
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
                        {/* <!-- End of Main Content --> */}

                        {/* <!-- Footer --> */}
                        <Footer />
                        {/* <!-- End of Footer --> */}

                    </div>
                    {/* <!-- End of Content Wrapper --> */}

                </div>
                {/* <!-- End of Page Wrapper --> */}

                {/* <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>






            </div>
        );
    }
}

export default StudentDashboard;