import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from './Footer';

export default function AdminStudentApplication() {
    // start for personal information



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
                        {/* <!-- Begin Page Content --> */}
                        {/* the content of each page will be come there */}
                        {/* <ApplicationProfile /> */}
                        <div className="container">

                            {/* <!-- Page Heading --> */}
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">Student Application</h1>


                            </div>


                            {/* <!-- Content Row --> */}

                            <div class="row">

                                {/* <!-- Area Chart --> */}
                                <div class="col-xl-12 col-lg-7">
                                    <div class="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div class="card shadow mb-4">
                                            <div class="table-responsive-sm">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Student ID</th>
                                                          <th>Application Current Status</th>
                                                            <th> Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>University Name</th>
                                                            <th>CourseName</th>
                                                            <th>Session</th>
                                                            <th>Action</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1
                                                            <span class="badge badge-pill badge-primary">new</span>
                                                            </td>
                                                            <td>
                                                            Application Initiated
                                                            </td>
                                                            <td>priyanka</td>
                                                            <td>priyanka.calinfo500@gmail.com</td>
                                                            <td>9817961998</td>
                                                            <th>Kuruksetra University</th>
                                                            <th>Btech</th>
                                                            <th>2020</th>

                                                            <td>
                                                               
                                                                <Link to={'/AdminStudentApplicationView'} className="nav-link" href="personal-profile.html">
                         
                            <span><i className="fas fa-eye"></i></span></Link>

                            <button className="btn" ><i className="fas fa-trash-alt"></i></button>
                                                              
                                                              
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                                Result Declared

                                                            </td>
                                                            <td>priyanka</td>
                                                            <td>priyanka.calinfo500@gmail.com</td>
                                                            <td>9817961998</td>
                                                            <td>punjab university</td>
                                                            <td>MBA</td>
<td>2022</td>
                                                            <td>
                                                            
                                                                <button className="btn" ><i className="fas fa-eye"></i></button>
                                                                <button className="btn" ><i className="fas fa-trash-alt"></i></button>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3  <span class="badge badge-pill badge-primary">new</span></td>
                                                            <td>
                                                            Application Initiated
                                                                </td>
                                                            <td>ram</td>
                                                            <td>ram.calinfo500@gmail.com</td>
                                                            <td>9817961998</td>
                                                            <td>punjab university</td>
                                                            <td>MCA</td>
                                                            <td>2022</td>

                                                            <td>
                                                            
                                                                <button className="btn" ><i className="fas fa-eye"></i></button>
                                                                <button className="btn" ><i className="fas fa-trash-alt"></i></button>

                                                            </td>
                                                        </tr>
                                                      
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* <!-- Card Body --> */}

                                    </div>
                                </div>


                            </div>
                            {/* <!-- Card Body --> */}

                        </div>
                        {/* <!-- /.container-fluid --> */}

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

            {/* <!-- Logout Modal--> */}

        </div >
    );
}