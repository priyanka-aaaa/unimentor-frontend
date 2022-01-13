import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';

export default function UniversityCourses() {
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
                            <h1 class="h3 mb-0 text-gray-800">Coures</h1>


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
                                                        <th>ID</th>
                                                        <th>Course Name</th>
                                                        <th>Duration</th>
                                                        <th>Course Fees</th>
                                                        <th>Start Date</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>BA-037</td>
                                                        <td>Bachelor Of Nursing</td>
                                                        <td>3 Weeks</td>
                                                        <td>15,000</td>
                                                        <td>July 24, 2019</td>
                                                        <td><button type="button" class="btn btn-success btn-sm">Edit</button>
                                                            <button type="button" class="btn btn-danger btn-sm">Delet</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>BA-037</td>
                                                        <td>Bachelor Of Nursing</td>
                                                        <td>3 Weeks</td>
                                                        <td>15,000</td>
                                                        <td>July 24, 2019</td>
                                                        <td><button type="button" class="btn btn-success btn-sm">Edit</button>
                                                            <button type="button" class="btn btn-danger btn-sm">Delet</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>BA-037</td>
                                                        <td>Bachelor Of Nursing</td>
                                                        <td>3 Weeks</td>
                                                        <td>15,000</td>
                                                        <td>July 24, 2019</td>
                                                        <td><button type="button" class="btn btn-success btn-sm">Edit</button>
                                                            <button type="button" class="btn btn-danger btn-sm">Delet</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>BA-037</td>
                                                        <td>Bachelor Of Nursing</td>
                                                        <td>3 Weeks</td>
                                                        <td>15,000</td>
                                                        <td>July 24, 2019</td>
                                                        <td><button type="button" class="btn btn-success btn-sm">Edit</button>
                                                            <button type="button" class="btn btn-danger btn-sm">Delet</button>
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