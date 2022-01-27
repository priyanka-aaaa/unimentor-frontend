import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';

export default function AgentEvaluate() {
    // start for personal information



    return (
        <div id="page-top">
            {/*
    <!-- Page Wrapper --> */}
            <div id="wrapper">
                <Sidebar />
                {/* there will be come sidebar */}

                {/*
        <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/*
            <!-- Main Content --> */}
                    <div id="content">

                        {/* topbar will be come there */}
                        <Topbar />
                        {/*
                <!-- Begin Page Content --> */}
                        {/* the content of each page will be come there */}
                        {/*
                <ApplicationProfile /> */}
                        <div className="container">

                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Evaluate Profile</h1>


                            </div>


                            {/* <!-- Content Row --> */}

                            <div className="row">

                                {/* <!-- Area Chart --> */}
                                <div className="col-xl-12 col-lg-7">
                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div className="card shadow mb-4">
                                            <div id="accordion">
                                                <div className="card">
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                        Profile

                                                    </a>
                                                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <label className="form-label"><span>*</span>Country</label>
                                                                    <select className="form-select ">
                                                                        <option selected=""></option>
                                                                        <option >India</option>
                                                                        <option>Afghanistan</option>
                                                                        <option>Albania</option>
                                                                        <option>Algeria</option>
                                                                        <option>American Samoa</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label className="form-label"><span>*</span>State</label>
                                                                    <select className="form-select ">
                                                                        <option selected=""></option>
                                                                        <option >Haryana</option>
                                                                        <option >Punjab</option>
                                                                        <option>Arunachal Pradesh</option>
                                                                        <option>Assam</option>
                                                                        <option>Bihar</option>
                                                                        <option>Chhattisgarh</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label className="form-label"><span>*</span>Universities</label>
                                                                    <select className="form-select ">
                                                                        <option selected=""></option>
                                                                        <option>University of Cambridge Estd. ...</option>
                                                                        <option>University of Oxford Estd. ..</option>
                                                                        <option>Harvard University Estd. ..</option>
                                                                        <option>Stanford University Estd. ..</option>
                                                                        <option>California Institute of Technology Estd. ..</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="row mt-3">

                                                                <div className="col-md-4">
                                                                    <label className="form-label"><span>*</span>Education</label>
                                                                    <select className="form-select ">
                                                                        <option selected=""></option>
                                                                        <option>Engineering.</option>
                                                                        <option>Computer Science. ...</option>
                                                                        <option>Information Technology. </option>
                                                                        <option>Business Administration. ...</option>
                                                                        <option>Social Sciences. .</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label className="form-label"><span>*</span>Percentage</label>
                                                                    <input type="text" className="form-control" placeholder="" name="persent" />
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label className="form-label"><span>*</span>Passing Year</label>
                                                                    <input type="text" className="form-control" placeholder="" name="passing" />
                                                                </div>

                                                            </div>

                                                            <div className="row mt-3">
                                                                <div className="col-md-4">
                                                                    <label className="form-label"><span>*</span>English Requirement</label>
                                                                    <input type="text" className="form-control" placeholder="" name="engreq" />
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label className="form-label"><span>*</span>Overall</label>
                                                                    <input type="text" className="form-control" placeholder="" name="overall" />
                                                                </div>
                                                                <div className="col-md-4">
                                                                </div>
                                                            </div>

                                                            <div className="row mt-3">
                                                                <div className="col-md-3">
                                                                    <label className="form-label"><span>*</span>Reading</label>
                                                                    <input type="text" className="form-control" placeholder="" name="reading" />
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <label className="form-label"><span>*</span>Listening</label>
                                                                    <input type="text" className="form-control" placeholder="" name="listening" />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="form-label"><span>*</span>Speaking</label>
                                                                    <input type="text" className="form-control" placeholder="" name="speaking" />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="form-label"><span>*</span>Writing</label>
                                                                    <input type="text" className="form-control" placeholder="" name="writing" />
                                                                </div>
                                                            </div>


                                                            <div className="row mt-3">
                                                                <div className="col-md-12 text-right">
                                                                    <button type="button" className="btn btn-light">Clear</button>
                                                                    <button type="button" className="btn btn-success ">Apply</button>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Card Body --> */}

                                </div>
                            </div>


                        </div>


                    </div>
                    {/*
                <!-- /.container-fluid --> */}

                </div>
                {/*
            <!-- End of Main Content --> */}

                {/*
            <!-- Footer --> */}
                <Footer />
                {/*
            <!-- End of Footer --> */}

            </div>
            {/*
        <!-- End of Content Wrapper --> */}

        </div>

    );
}