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
                                        <PrimaryInfo />
                                        <Overview />
                                        <CoursesFee />
                                        <Application />
                                        <Document />
                                        <Scholarship />
                                        <Ranking />
                                        <ImageVideo />
                                        <Faq />
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
  );
}
export default UniversityProfile;