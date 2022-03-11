import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function AdminStudentApplicationView() {
    return (
        <div id="page-top">
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Student Application Details </h1>
                        </div>
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h6 className="h3 mb-0 text-gray-800">ApplicationId</h6>
                            <h6 className="h3 mb-0 text-gray-800">Application Initiated</h6>
                            <button type="button"

                                className="btn btn-outline-success"><span><i class="fa fa-download" aria-hidden="true"></i>
                                </span>Download Document</button>

                        </div>
                        {/* Content Row */}
                        <div className="row">
                            {/* Area Chart */}
                            <div className="col-xl-8 col-lg-7">
                                <div className="card shadow mb-4">

                                    {/* start for tab */}
                                    <div className="col-lg-12 mb-50">
                                        <div className="blog-item" id="ad-mission">
                                            <div className="blog-content">
                                                <h3 className="blog-title"><a href="#"> </a></h3>
                                                <div className="admission-list">
                                                    <ul className="nav nav-tabs" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" data-bs-toggle="tab"
                                                                href="#home">Application</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-bs-toggle="tab" href="#menu1">Documents</a>
                                                        </li>
                                                    </ul>

                                                    {/* <!-- Tab panes --> */}
                                                    <div className="tab-content">
                                                        <div id="home" className="container tab-pane active"><br />
                                                            <h5>Application</h5>
                                                            {/* start for fetching admission */}
                                                            <div className="card shadow mb-4">
                                                                <div id="accordion">
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                                            Personal Information
                                                                        </a>
                                                                        <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseTwo">
                                                                            Address & Contact
                                                                        </a>
                                                                        <div id="collapseTwo" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseThree">
                                                                            Family Information
                                                                        </a>
                                                                        <div id="collapseThree" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseFour">
                                                                            Education
                                                                        </a>
                                                                        <div id="collapseFour" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseFive">
                                                                            Test Scores
                                                                        </a>
                                                                        <div id="collapseFive" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseSix">
                                                                            Work Experience
                                                                        </a>
                                                                        <div id="collapseSix" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseSeven">
                                                                            Extra Curricular Activities
                                                                        </a>
                                                                        <div id="collapseSeven" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseEight">
                                                                            Recommendation
                                                                        </a>
                                                                        <div id="collapseEight" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div id="menu1" className="container tab-pane fade"><br />
                                                            <h5>Documents</h5>
                                                            {/* start for fetching admission */}
                                                            <div className="card shadow mb-4">
                                                                <div id="accordion">
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                                            Identity Documents
                                                                        </a>
                                                                        <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseTwo">
                                                                            Education Documents
                                                                        </a>
                                                                        <div id="collapseTwo" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseThree">
                                                                            Education Documents
                                                                        </a>
                                                                        <div id="collapseThree" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseFour">
                                                                            Education
                                                                        </a>
                                                                        <div id="collapseFour" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseFive">
                                                                            Test Scores
                                                                        </a>
                                                                        <div id="collapseFive" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseSix">
                                                                            Work Experience
                                                                        </a>
                                                                        <div id="collapseSix" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseSeven">
                                                                            Extra Curricular Activities
                                                                        </a>
                                                                        <div id="collapseSeven" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <a className="card-header" data-bs-toggle="collapse" href="#collapseEight">
                                                                            Recommendation
                                                                        </a>
                                                                        <div id="collapseEight" className="collapse show" data-bs-parent="#accordion">
                                                                            <div className="card-body">
                                                                                <div className="table-format">
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-success">4325</span></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Student Name</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Rishik</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application ID</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">15947</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Email</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Program Title</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Accounting &amp; Payroll Administrator</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Fees</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">11000</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Intake</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">January</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English Test</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">I don't have this</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">English 12Th Marks</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Education</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format"><span className="badge bg-secondary">Year 2019</span>
                                                                                                <span className="badge bg-secondary">71%</span>
                                                                                                <span className="badge bg-secondary">M 50</span>
                                                                                                <span className="badge bg-secondary">E 71</span>
                                                                                                XII
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Board/University</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Central Board of Secondary Education</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Applied On</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Application Level</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1-Year Post-Secondary Certificate</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-f
ormat">Institute</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">Academy of Learning</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Duration</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">1 year</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-sm-6">
                                                                                            <span className="th-format">Pendency</span>
                                                                                        </div>
                                                                                        <div className="col-sm-6">
                                                                                            <span className="td-format">71</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* start for fetching admission */}

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* end for tab */}



                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card shadow mb-4">
                                    <div className="profile-main">
                                        <div className="profile-box-main">
                                            <span className="ant-avatar ant-avatar-circle"><span className="ant-avatar-string">R</span>
                                            </span>
                                        </div>
                                        <div className="profile-box-inner">
                                            <h5>Priyanka</h5>
                                            <table class="table">

                                                <tbody>
                                                    <tr>
                                                        <td>Student Id</td>
                                                        <td>1</td>



                                                    </tr>
                                                    <tr>
                                                        <td>Name</td>
                                                        <td>priyanka</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Email</td>
                                                        <td>priyanka.calinfo500@gmail.com</td>

                                                    </tr>

                                                    <tr>
                                                        <td>Phone</td>
                                                        <td>+919817961998</td>

                                                    </tr>
                                                    <tr>
                                                        <td>University Name</td>
                                                        <td>Kurukshetra university</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Course Name</td>
                                                        <td>Btech</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Session</td>
                                                        <td>2022</td>

                                                    </tr>

                                                </tbody>
                                            </table>



                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="state" className="form-label">Application Current Status
                                        *</label>
                                    <select type="text" className="form-control" id="salutation"

                                        placeholder="Salutation" name="salutation">
                                        <option >Select</option>
                                        <option value="Ms.">Ms.</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Miss.">Miss.</option>
                                    </select>
                                    <button type="button">Submit</button>
                                </div>
                            </div>
                        </div>
                        {/* end for dummy */}
                        <div className="row">

                            <div className="applic-document">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Send Message</h4>
                                    </div>
                                    <div className="col-md-6 text-right"></div>
                                </div>
                                <form>
                                    <label>Messgae</label>
                                    <textarea>

                                    </textarea>

                                    <input type="submit"></input>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
        </div >
    );
}