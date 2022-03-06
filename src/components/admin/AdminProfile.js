import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import AdminApplication from './AdminApplication';
import AdminDocument from './AdminDocument';
import AdminScholarship from './AdminScholarship';

function AdminProfile(props) {
    return (
        <div>
            <div id="page-top">
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <div className="container">
                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">University/School </h1>

                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-7">
                                        <div id="accordion">
                                            <AdminApplication />
                                            <AdminDocument />
                                            <AdminScholarship />

                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                        </div>
                    </div>
                    <a className="scroll-to-top rounded" href="#page-top">
                        <i className="fas fa-angle-up"></i>
                    </a>
                </div >
            </div >
        </div>
    );
}

export default AdminProfile;