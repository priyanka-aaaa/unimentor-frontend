import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "../css/drag.css";

import Footer from './Footer';
import Application from './profile/Application';
import CoursesFee from './profile/CoursesFee';
import PrimaryInfo from './profile/PrimaryInfo';
import Overview from './profile/Overview';
import Ranking from './profile/Ranking';
import ImageVideo from './profile/ImageVideo';
import Scholarship from './profile/Scholarship';

import Summary from './Summary';
import Faq from './profile/Faq';
import Document from './profile/Document';

class UniversityProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {

            //start for overview
            year: "",
            ranking: "",
            rate: "",
            course: "",
            courseNo: "",
            overviewmonth: "",
            overviewyear: "",
            english: "",
            cgpa: "",
            acceptanceRate: "",
            //end for overview
        };

        //start for overview
        this.changeyear = this.changeyear.bind(this);
        this.changeranking = this.changeranking.bind(this);
        this.changerate = this.changerate.bind(this);
        this.changecourse = this.changecourse.bind(this);
        this.changecourseNo = this.changecourseNo.bind(this);
        this.changeOverviewmonth = this.changeOverviewmonth.bind(this);
        this.changeoverviewyear = this.changeoverviewyear.bind(this);
        this.changeenglish = this.changeenglish.bind(this);
        this.changecgpa = this.changecgpa.bind(this);
        this.changeacceptanceRate = this.changeacceptanceRate.bind(this);
        this.submitOverview = this.submitOverview.bind(this);
        //end for overview
    }
    componentWillMount() {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;
            this.setState({ mounted: mytoken });
        }
    }



    //start for overview
    changeyear(event) {
        this.setState({ year: event.target.value });
    }
    changeranking(event) {
        this.setState({ ranking: event.target.value });

    }
    changerate(event) {
        this.setState({ rate: event.target.value });
    }
    changecourse(event) {
        this.setState({ course: event.target.value });
    }
    changecourseNo(event) {
        this.setState({ courseNo: event.target.value });
    }
    changeOverviewmonth(event) {
        this.setState({ overviewmonth: event.target.value });
    }
    changeoverviewyear(event) {
        this.setState({ overviewyear: event.target.value });
    }
    changeenglish(event) {
        this.setState({ english: event.target.value });
    
    }
    changecgpa(event) {
        this.setState({ cgpa: event.target.value });
    }
    changeacceptanceRate(event) {
        this.setState({ acceptanceRate: event.target.value });
    }
    submitOverview(event) {
        event.preventDefault();
        const obj1 = new FormData();
        obj1.append("foundedYear", this.state.year);
        obj1.append("ranking", this.state.ranking);
        obj1.append("rate", this.state.rate);
        obj1.append("course", this.state.course);
        obj1.append("courseNo", this.state.courseNo);
        obj1.append("month", this.state.overviewmonth);
        obj1.append("year", this.state.overviewyear);
        obj1.append("english", this.state.english);
        obj1.append("cgpa", this.state.cgpa);
        obj1.append("acceptanceRate", this.state.acceptanceRate);

        axios.put(process.env.REACT_APP_SERVER_URL+'university/overview', obj1, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
             
                if (res.data.success === true) {
                    alert("overview update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    //end for overview

    render() {
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


        );
    }
}

export default UniversityProfile;