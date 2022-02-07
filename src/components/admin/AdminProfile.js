import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';
import AdminApplication from './AdminApplication';
import AdminDocument from './AdminDocument';
import AdminScholarship from './AdminScholarship';

function AdminProfile(props) {
    return (
        <div>
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
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">University/School </h1>


                </div>

                {/* <!-- Content Row --> */}

                <div className="row">

                    {/* <!-- Area Chart --> */}
                    <div className="col-xl-12 col-lg-7">

                        {/* <!-- Card Header - Dropdown --> */}
                        <div id="accordion">
                            <AdminApplication/>
                            <AdminDocument/>
                            <AdminScholarship/>
                            {/* <PrimaryInfo />
                            <Overview />
                            <CoursesFee />
                            <Application />
                          
                            <Document />
                            <Scholarship />
                            <Ranking />

                            <ImageVideo />
                         
                          
                            <Faq />
                            */}





                            {/* <!-- -------------- --> */}
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
</div > 
        </div>
    );
}

export default AdminProfile;