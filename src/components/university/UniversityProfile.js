import React, { useState, useEffect } from "react";


import Sidebar from './Sidebar';
import Topbar from './Topbar';



import Application from './profile/Application';
import CoursesFee from './profile/CoursesFee';
import PrimaryInfo from './profile/PrimaryInfo';
import Overview from './profile/Overview';
import Ranking from './profile/Ranking';
import ImageVideo from './profile/ImageVideo';
import Scholarship from './profile/Scholarship';
import Faq from './profile/Faq';
import Document from './profile/Document';
function UniversityProfile(props) {
    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
           
        }
    }, [])
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

                 
                    <Topbar />
                 
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
                                    <PrimaryInfo />
                                    <Overview />
                                    <CoursesFee />
                                    <Application />
                                  
                                    <Document />
                                    <Scholarship />
                                    <Ranking />

                                    <ImageVideo />
                                 
                                  
                                    <Faq />
                                   





                                    {/* <!-- -------------- --> */}
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}

                        </div>
                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                   
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

    );
}

export default UniversityProfile;