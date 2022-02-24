import React, { Component } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import Topbar from './Topbar';
import EducationDocument from './Mydocument/EducationDocument'



import WorkExperienceDocument from './Mydocument/WorkExperienceDocument';
import RecommendationDocuments from './Mydocument/RecommendationDocuments';

import ExtraCurricularDocument from './Mydocument/ExtraCurricularDocument';


import OtherDocument from './Mydocument/OtherDocument';
import EnglishProficiencyDocument from './Mydocument/EnglishProficiencyDocument';
import IdentityDocument from './Mydocument/IdentityDocument';
class Document extends Component {
    state = {
        mounted: "",
    }
    componentWillMount() {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
            var user_email = mydata.data.student.email;
            var mytoken = mydata.data.token;
            this.setState({ mounted: mytoken });
        }
    }
    render() {
        var i = 0;

        return (
            <div id="page-top" className="component-a">
                {/* {this.state.files.map((file, index) => (
                    <h2 key={index}>{file}</h2>
                ))} */}


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
                <Document /> */}
                            {/* there will be come document page */}
                            <div className="container">

                                <div className=" align-items-center justify-content-between mb-4">


                                    <h1 className="h3 mb-0 text-gray-800">Application Documents</h1>
                                    <p>File extensions supported .pdf, .doc, .docx, .jpeg, .jpg, .png</p>

                                    <div className="row">
                                        <div className="col-xl-12 col-lg-7">
                                            <div id="accordion">
                                                <IdentityDocument />
                                                <EducationDocument />
                                                <WorkExperienceDocument />
                                                <EnglishProficiencyDocument />
                                                <ExtraCurricularDocument />
                                                <RecommendationDocuments/>
                                                <OtherDocument />











                                            </div>
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
                   
                        {/*
            <!-- End of Footer --> */}

                    </div>
                    {/*
        <!-- End of Content Wrapper --> */}

                </div>
                {/*
    <!-- End of Page Wrapper --> */}

                {/*
    <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    {/* <i className="fas fa-angle-up"></i> */}
                </a>


            </div>



        );
    }
}

export default Document;