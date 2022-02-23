import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import PersonalInfoProfile from './ApplicationProfile/PersonalInfoProfile';
import AddressProfile from './ApplicationProfile/AddressProfile';
import FamilyProfile from './ApplicationProfile/FamilyProfile';
import EducationProfile from './ApplicationProfile/EducationProfile';

import TestScoreProfile from './ApplicationProfile/TestScoreProfile';
import WorkExperienceProfile from './ApplicationProfile/WorkExperienceProfile';
import ExtraCurricultarActivityProfile from './ApplicationProfile/ExtraCurricultarActivityProfile';
import RecommendationProfile from './ApplicationProfile/RecommendationProfile';
export default function Studentregister() {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();

    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);

            var user_email = mydata.data.student.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        var myurl = process.env.REACT_APP_SERVER_URL;


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

                        {/* topbar will be come there */}
                        <Topbar />
                        {/* <!-- Begin Page Content --> */}
                        {/* the content of each page will be come there */}
                        {/* <ApplicationProfile /> */}
                        {submitSuccess === 1 ? <div className="Show_success_message">
                            <strong>Success!</strong> {successMessage}
                        </div> : null}
                        <div className="container">

                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Application Profile</h1>


                            </div>


                            {/* <!-- Content Row --> */}

                            <div className="row">

                                {/* <!-- Area Chart --> */}
                                <div className="col-xl-12 col-lg-7">

                                    {/* <!-- Card Header - Dropdown --> */}

                                    <PersonalInfoProfile />
                                    <AddressProfile />
                                    <FamilyProfile />
                                    <EducationProfile />
                                    <TestScoreProfile />
                                    <WorkExperienceProfile />
                                    <ExtraCurricultarActivityProfile />
                                    <RecommendationProfile />


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
    );
}