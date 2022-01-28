import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/style.css';
import '../css/dashboard.css';
import '../css/fontawesome.min.css';
import '../css/frontend.css';
import FrontendTopbar from './FrontendTopbar';
import FrontendFooter from './FrontendFooter';


// start for personal information
export default function AllUniversity() {
    let { id } = useParams();
   const [mounted, setMounted] = useState();
 const [data, setdata] = useState([]);
 const [foundedYear, setfoundedYear] = useState("");

    //start for fetching faq
    const [formValues, setFormValues] = useState([{
        question: "", answer: ""

    }])
    //end for fetching faq
    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            var myuniversityid = mydata.data.university._id;

            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;

        }
        setMounted(mytoken)
        //start for fetching faq
        const url = '/university/' + id + '/faqs';
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mytoken }
        })
            .then(response => response.json())
            .then(data => {
                console.log("data.universityFaqs");
                console.log(data.universityFaqs);
                setFormValues(data.universityFaqs)
            })
        //end for fetching faq




    }, [])



    return (
        <div>
            <body className="defult-home">

                {/* <!--Preloader area start here--> */}
                {/* <div id="loader" className="loader">
                    <div className="loader-container"></div>
                </div> */}
                {/* <!--Preloader area End here--> */}

                {/* <!-- Main content Start --> */}
                <div className="main-content">

                    {/* start for header */}
                    <FrontendTopbar />
                    {/* end for header */}




                    {/* <!-- Breadcrumbs Start --> */}
                    <div className="rs-breadcrumbs img4 cover-pict">
                        <div className="breadcrumbs-inner text-center">
                            <h1 className="page-title">University of Sunderland</h1>
                            <ul>
                                <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                                    <a className="active" href="index.html">Home</a>
                                </li>
                                <li>University</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Breadcrumbs End --> */}

                    {/* <!-- Blog Section Start --> */}
                    <div className="rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 ">
                                    <div className="widget-area">
                                        <div className="university-widget mb-50">
                                            <div className="cover"><img src="assets/images/breadcrumbs/4.jpg" /></div>
                                            <div className="univer-logo"><img src="assets/images/university/un-logo.png" /></div>
                                            <h4>Concordia University Of Edmonton</h4>
                                            <p>Canada<br />
                                                Private | Estd. N/A</p>
                                            <button type="button" className="btn btn-primary btn-lg">Talk to an Expert for FREE</button>
                                        </div>
                                        <div className="recent-posts mb-50">
                                            <div className="widget-title">
                                                <h3 className="title">Get in Touch</h3>
                                            </div>
                                            <div className="recent-post-widget">
                                                <div className="post-img">
                                                    <span><i className="fa fa-phone"></i></span>
                                                </div>
                                                <div className="post-desc">
                                                    <span className="date">
                                                        <i className="fas fa-phone-alt"></i>
                                                        Call Now
                                                    </span>
                                                    <a href="tel:4401915153000">4401915153000</a>

                                                </div>
                                            </div>
                                            <div className="recent-post-widget">
                                                <div className="post-img">
                                                    <span><i className="fa fa-envelope"></i></span>
                                                </div>
                                                <div className="post-desc">
                                                    <span className="date">
                                                        <i className="fa fa-calendar"></i>
                                                        Email
                                                    </span>
                                                    <a
                                                        href="mailto:student.helpline@sunderland.ac.uk">student.helpline@sunderland.ac.uk</a>
                                                </div>
                                            </div>
                                            <div className="recent-post-widget">
                                                <div className="post-img">
                                                    <span><i className="fa fa-globe"></i></span>
                                                </div>
                                                <div className="post-desc">
                                                    <span className="date">
                                                        <i className="fa fa-calendar"></i>
                                                        Website
                                                    </span>
                                                    <a href="https://www.sunderland.ac.uk/">https://www.sunderland.ac.uk/ </a>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="categories mb-50">
                                            <div className="widget-title">
                                                <h3 className="title">Location</h3>
                                            </div>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.8351609729093!2d-113.44840898415342!3d53.56070998002452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a022e091c0b0f7%3A0xe88f7efea9cde181!2sConcordia%20University%20of%20Edmonton!5e0!3m2!1sen!2sin!4v1642487984751!5m2!1sen!2sin"
                                                width="100%" height="450"
                                                allowFullScreen=""
                                                loading="lazy"></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 pr-35 md-pr-15">
                                    <div className="row">
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item">
                                                <ul>
                                                    <li><a href="#cour-overview">Overview</a></li>
                                                    <li><a href="#ranking">Ranking</a></li>
                                                    <li><a href="#cour-fees">Courses & Fees</a></li>
                                                    <li><a href="#ad-mission">Admissions Process </a></li>
                                                    <li><a href="#ad-mission"> Documents Required</a></li>
                                                    <li><a href="#img-video"> Images/Video</a></li>
                                                    <li><a href="#brow-coures"> Browse Courses</a></li>

                                                </ul>

                                                <div className="overviewblock">
                                                    <div className="overview-box blue-light">
                                                        <span className="icon"><i className="fa fa-graduation-cap"></i></span>
                                                        <h3>280 +<br /><span>Courses</span></h3>
                                                    </div>

                                                    <div className="overview-box green-light">
                                                        <span className="icon"><i className="fa fa-calendar-check-o"></i></span>
                                                        <h3>2021<br /><span>Founded year </span></h3>
                                                    </div>

                                                    <div className="overview-box ornage-light">
                                                        <span className="icon"><i className="fa fa-star"></i></span>
                                                        <h3>511-520<br /><span>Global Rankings</span></h3>
                                                    </div>

                                                    <div className="overview-box yellow-light">
                                                        <span className="icon"><i className="fa fa-user"></i></span>
                                                        <h3>40-60%<br /><span>Set Commision</span></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item" id="cour-overview">
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="#">Overview</a></h3>
                                                    <div className="blog-meta">
                                                        <h5>Founded year</h5>
                                                        <p>2021</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>International Student Rate</h5>
                                                        <p>5.5 percent in 2019/20</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>Popular Courses</h5>
                                                        <p>Product Design and Management(Management)</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>No. of courses</h5>
                                                        <p>5</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>English Proficiency</h5>
                                                        <p>Four levels</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>CGPA</h5>
                                                        <p>A+ or O</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5> Acceptance rate</h5>
                                                        <p>55-60%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb50">
                                            <div className="cta_cta__3nhLf col-12">
                                                <div className="row">
                                                    <div className="col-9 p-0">
                                                        <h1 className="cta_text__1LaHh">AIl Course Finder </h1>
                                                        <h2 className="cta_subtext__1eM4M">See personalized recommendations basis your
                                                            profile and preferences from RMIT University & similar universities.
                                                        </h2>
                                                        <a href="index.html#about" className="cta_bluetext__2B7BK">Find courses best-fit
                                                            for you</a>
                                                    </div>
                                                    <div className="col-3"><img className="cta_image__3Oih8"
                                                        src="assets/images/university/Group1169.webp" /></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item" id="cour-fees">
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="#">Courses & Fees</a></h3>
                                                    <h5><a href="blog-details.html">BArch in Bachelor of Architectural Design</a>
                                                    </h5>
                                                    <div className="blog-meta">

                                                        <h5> Duration</h5>
                                                        36 Months

                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5> Fee/Year</h5>
                                                        ₹144,000
                                                    </div>
                                                    <div className="blog-meta">

                                                        <h5> Cgpa</h5>
                                                        5.5

                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>Eligibilit</h5>
                                                        IELTS 7.5 Band
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>Course website</h5>
                                                        Architectura@coures.com
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>Academic proficiency exam</h5>
                                                        GRE
                                                    </div>

                                                    <div className="blog-desc">
                                                        <h5 className="mt-5">Course Description</h5>
                                                        We denounce with righteous indige nation and dislike men who are so beguiled
                                                        and demo realized by the charms of pleasure of the moment, so blinded by
                                                        desire, that...
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item" id="ranking">

                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="blog-details.html">Ranking</a></h3>
                                                    <div className="blog-meta">
                                                        <ul className="btm-cate">
                                                            <li>
                                                                <div className="blog-date">
                                                                    <i className="fa fa-globe"></i>
                                                                    Global Ranking
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="blog-date">
                                                                    <i className="fa fa-calendar-check-o"></i>
                                                                    QS-2021
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="author">
                                                                    <i className="fa fa-star"></i> 206
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div><br />

                                                    <div className="raning-agency">
                                                        <h5>Ranking Agencies</h5>
                                                        <a href="#"><img src="assets/images/ranking_agency_qs.webp" alt="" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb50">
                                            <div className="cta_cta__3nhLf col-12">
                                                <div className="row">
                                                    <div className="col-9 p-0">
                                                        <h1 className="cta_text__1LaHh">Start your journey</h1>
                                                        <h2 className="cta_subtext__1eM4M">Realise your study abroad dream</h2>
                                                        <h2 className="cta_bluetext__2B7BK">Talk to an Expert for FREE</h2>
                                                    </div>
                                                    <div className="col-3"><img className="cta_image__3Oih8"
                                                        src="assets/images/university/Group1169.webp" /></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item" id="ad-mission">
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="#">Admissions Process </a></h3>
                                                    <div className="admission-list">
                                                        <ul className="nav nav-tabs" role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active" data-toggle="tab"
                                                                    href="#home">Application</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-toggle="tab" href="#menu1">Documents</a>
                                                            </li>
                                                        </ul>

                                                        {/* <!-- Tab panes --> */}
                                                        <div className="tab-content">
                                                            <div id="home" className="container tab-pane active"><br />
                                                                <h5>Application</h5>
                                                                <ul>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Visit the
                                                                        official website of the institution.</li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Click on
                                                                        'Apply Now' or 'Register Here'</li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Complete
                                                                        filling your education history with all the qualifications.
                                                                    </li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Fill in the
                                                                        details of your employment history.</li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Fill in your
                                                                        personal statement.</li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Submit the
                                                                        application form by paying the mentioned fees.</li>
                                                                </ul>
                                                            </div>
                                                            <div id="menu1" className="container tab-pane fade"><br />
                                                                <h5>Documents</h5>
                                                                <ul>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>All official
                                                                        academic Transcripts and grade cards</li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Passport size
                                                                        photographs </li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Passport
                                                                        photocopy</li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Visa</li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Updated
                                                                        CV/Resume</li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>English
                                                                        Language Proficiency Test Scores</li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Letter of
                                                                        Recommendations</li>
                                                                    <li><span><i className="fa fa-check-circle"></i></span>Statement of
                                                                        Purpose</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item" id="img-video">
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="#">Images/Video </a></h3>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="blog-img">
                                                                <a href="blog-details.html"><img
                                                                    src="assets/images/blog/inner/6.jpg" alt="" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="blog-img">
                                                                <a href="blog-details.html"><img
                                                                    src="assets/images/blog/inner/6.jpg" alt="" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-lg-12">
                                            <div className="blog-item" id="brow-coures">
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="#">Browse Courses</a></h3>
                                                    <div className="row mb-3" >
                                                        <div className="col-sm-6 mb-4">
                                                            <div className="subcourses_courseBox__3deGG">
                                                                <div className="subcourses_program__3pkFj col-sm-12 p-0"><img
                                                                    src="https://leverageedunew.s3.us-east-1.amazonaws.com/leverageapp/assets/CoursesImage/project-management.png"
                                                                    alt="leverage" />
                                                                    <div ><span
                                                                        className="subcourses_h-title__sLV10">Bachelor of
                                                                        Business</span><span
                                                                            className="subcourses_subHeading__zdEIg">Management</span>
                                                                    </div>
                                                                </div>
                                                                <div className="subcourses_line__T3g-V"></div>
                                                                <div className="row align-items-center">
                                                                    <div className="col-6 col-sm-4 clearfix">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">AUD

                                                                                120960
                                                                            </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Fee</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">36
                                                                                Months
                                                                            </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Duration</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">IELTS: 7</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Qualification</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">Bachelors</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Course level</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">On Campus </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Mode of Degree</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">N.A.</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Intakes</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="subcourses_line__T3g-V" >
                                                                        </div>
                                                                        <p className="subcourses_description__1v-2y">This flexible
                                                                            cross-disciplinary business degree allows you to develop
                                                                            the most important element in...<a
                                                                                className="text-primary cursor-pointer">Read More</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-right w-100">
                                                                <button className="btn btn-primary  w-100">Apply Now

                                                                    <img
                                                                        src="https://images.leverageedu.com/university/whitearrow.svg"
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 mb-4">
                                                            <div className="subcourses_courseBox__3deGG">
                                                                <div className="subcourses_program__3pkFj col-sm-12 p-0"><img
                                                                    src="https://leverageedunew.s3.us-east-1.amazonaws.com/leverageapp/assets/CoursesImage/project-management.png"
                                                                    alt="leverage" />
                                                                    <div ><span
                                                                        className="subcourses_h-title__sLV10">Master of Global
                                                                        Studies</span><span
                                                                            className="subcourses_subHeading__zdEIg">Management</span>
                                                                    </div>
                                                                </div>
                                                                <div className="subcourses_line__T3g-V"></div>
                                                                <div className="row align-items-center">
                                                                    <div className="col-6 col-sm-4 clearfix">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">AUD
                                                                                33600
                                                                            </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Fee</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">24

                                                                                Months
                                                                            </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Duration</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">IELTS: 7</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Qualification</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">Masters</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Course level</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">On Campus </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Mode of Degree</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">N.A.</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Intakes</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="subcourses_line__T3g-V" >
                                                                        </div>
                                                                        <p className="subcourses_description__1v-2y">The Master of
                                                                            Global Studies has been designed to prepare you to
                                                                            engage with a wide range of contemp...<a
                                                                                className="text-primary cursor-pointer">Read More</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-right w-100"><button
                                                                className="btn btn-primary  w-100">Apply Now
                                                                <img
                                                                    src="https://images.leverageedu.com/university/whitearrow.svg"
                                                                />
                                                            </button></div>
                                                        </div>
                                                        <div className="col-sm-6 mb-4">
                                                            <div className="subcourses_courseBox__3deGG">
                                                                <div className="subcourses_program__3pkFj col-sm-12 p-0"><img
                                                                    src="https://leverageedunew.s3.us-east-1.amazonaws.com/leverageapp/assets/CoursesImage/project-management.png"
                                                                    alt="leverage" />
                                                                    <div ><span
                                                                        className="subcourses_h-title__sLV10">Bachelor of
                                                                        International Studies</span><span
                                                                            className="subcourses_subHeading__zdEIg">Management</span>
                                                                    </div>
                                                                </div>
                                                                <div className="subcourses_line__T3g-V"></div>
                                                                <div className="row align-items-center">
                                                                    <div className="col-6 col-sm-4 clearfix">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">AUD
                                                                                95040
                                                                            </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Fee</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">36
                                                                                Months
                                                                            </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Duration</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">IELTS: 7</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Qualification</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">Bachelors</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Course level</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">On Campus </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Mode of Degree</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">N.A.</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Intakes</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="subcourses_line__T3g-V" >
                                                                        </div>
                                                                        <p className="subcourses_description__1v-2y">A degree in
                                                                            international studies will guide you toward a multitude
                                                                            of careers across the globe: fro...<a
                                                                                className="text-primary cursor-pointer">Read More</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-right w-100"><button
                                                                className="btn btn-primary  w-100">Apply Now
                                                                <img
                                                                    src="https://images.leverageedu.com/university/whitearrow.svg"
                                                                />
                                                            </button></div>
                                                        </div>
                                                        <div className="col-sm-6 mb-4">
                                                            <div className="subcourses_courseBox__3deGG">
                                                                <div className="subcourses_program__3pkFj col-sm-12 p-0"><img
                                                                    src="https://leverageedunew.s3.us-east-1.amazonaws.com/leverageapp/assets/CoursesImage/engineering.png"
                                                                    alt="leverage" />
                                                                    <div ><span
                                                                        className="subcourses_h-title__sLV10">Bachelor of
                                                                        Engineering (Honours)</span><span
                                                                            className="subcourses_subHeading__zdEIg">Engineering</span>
                                                                    </div>
                                                                </div>
                                                                <div className="subcourses_line__T3g-V"></div>
                                                                <div className="row align-items-center">
                                                                    <div className="col-6 col-sm-4 clearfix">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">AUD
                                                                                170880
                                                                            </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Fee</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">48
                                                                                Months
                                                                            </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Duration</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">IELTS: 7</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Qualification</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">Bachelors</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Course level</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">On Campus </h3>
                                                                            <p className="subcourses_c-title__2MKAy">Mode of Degree</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 col-sm-4 mt-2">
                                                                        <div className="subcourses_details__3g8AB">
                                                                            <h3 className="subcourses_c-desc__Dzhnk">N.A.</h3>
                                                                            <p className="subcourses_c-title__2MKAy">Intakes</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12">
                                                                        <div className="subcourses_line__T3g-V" >
                                                                        </div>
                                                                        <p className="subcourses_description__1v-2y">Studying the
                                                                            Bachelor of Engineering (Honours) gives you a number of
                                                                            unique benefits.

                                                                            Gain fundam...<a
                                                                                className="text-primary cursor-pointer">Read More</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-right w-100"><button
                                                                className="btn btn-primary  w-100">Apply Now
                                                                <img
                                                                    src="https://images.leverageedu.com/university/whitearrow.svg"
                                                                />
                                                            </button></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* start for fetching faq */}

                                        <div id="accordion" className="blog-item">
                                            <div className=" blog-content">
                                                <h3 className="blog-title"><a href="#">FAQ</a></h3>
                                                {formValues.map((element, index) => (
                                                    <div key={index}>
                                                        <div className="card">
                                                            <a className="card-header  card-link"

                                                                data-bs-toggle="collapse" href={"#collapse" + index}
                                                            >
                                                                {element.question || ""}
                                                            </a>
                                                            <div id={"collapse" + index} className="collapse" data-bs-parent="#accordion">
                                                                <div className="card-body">
                                                                    {element.answer || ""}
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                         {/* end for fetching faq */}

                                    <div className="col-lg-12 mb-5">
                                        <div id="Similar" className="blog-item">
                                            <div className="similar_fullbox__1qBJc  blog-content">
                                                <h3 className="blog-title"><a href="#">Similar Universities</a></h3>
                                                <div className="slick-slider slick-initialized" dir="ltr">

                                                    <div className="slick-list">
                                                        <div className="slick-track">
                                                            <div data-index="0" className="slick-slide slick-active slick-current"
                                                                tabIndex="-1" aria-hidden="false"
                                                            >
                                                                <div>
                                                                    <div tabIndex="-1" >
                                                                        <div className="similar_box__2Lq08">
                                                                            <img className="similar_boxImage__2xy_q"
                                                                                src="https://s3.ap-south-1.amazonaws.com/leverageedu/school-cover-image/us/notredameuniversity.png"
                                                                                loading="lazy" />
                                                                            <div className="similar_footerText__2go-e w-100 row">
                                                                                <h1 className="similar_unidata__1lxt7 col-10">
                                                                                    University of Notre Dame</h1>

                                                                                <h2 className="similar_unidesc__10ic3">University of
                                                                                    Notre Dame, United States</h2>
                                                                            </div>
                                                                            <h2 className="similar_facts__1i5bJ">Private
                                                                                | Estd. 1832
                                                                                | 10+ Courses
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-index="1" className="slick-slide slick-active" tabIndex="-1"
                                                                aria-hidden="false" >
                                                                <div>
                                                                    <div tabIndex="-1" >
                                                                        <div className="similar_box__2Lq08"><img
                                                                            className="similar_boxImage__2xy_q"
                                                                            src="https://s3.ap-south-1.amazonaws.com/leverageedu/school-cover-image/uk/standrewsuniversity.png"
                                                                            loading="lazy" />
                                                                            <div className="similar_footerText__2go-e w-100 row">
                                                                                <h1 className="similar_unidata__1lxt7 col-10">
                                                                                    University of St Andrews</h1>
                                                                                <div className="col-2 mt-3">
                                                                                </div>
                                                                                <h2 className="similar_unidesc__10ic3">University of
                                                                                    St Andrews, United Kingdom</h2>
                                                                            </div>
                                                                            <h2 className="similar_facts__1i5bJ">Public
                                                                                | Estd. 1413
                                                                                | 20+ Courses
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-index="2" className="slick-slide slick-active" tabIndex="-1"
                                                                aria-hidden="false" >
                                                                <div>
                                                                    <div tabIndex="-1" >
                                                                        <div className="similar_box__2Lq08"><img
                                                                            className="similar_boxImage__2xy_q"
                                                                            src="https://s3.ap-south-1.amazonaws.com/leverageedu/school-cover-image/canada/dalhousie.jpg"
                                                                            loading="lazy" />
                                                                            <div className="similar_footerText__2go-e w-100 row">
                                                                                <h1 className="similar_unidata__1lxt7 col-10">
                                                                                    Dalhousie University</h1>
                                                                                <div className="col-2 mt-3">
                                                                                </div>
                                                                                <h2 className="similar_unidesc__10ic3">Dalhousie
                                                                                    University, Canada</h2>
                                                                            </div>
                                                                            <h2 className="similar_facts__1i5bJ">Public
                                                                                | Estd. 1818
                                                                                | 1 Courses
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-index="3" className="slick-slide" tabIndex="-1"
                                                                aria-hidden="true" >
                                                                <div>
                                                                    <div tabIndex="-1" >
                                                                        <div className="similar_box__2Lq08"><img
                                                                            className="similar_boxImage__2xy_q"
                                                                            src="https://s3.ap-south-1.amazonaws.com/leverageedu/school-cover-image/uk/2019-10-25_45_StaffordshireUniversity-cover.jpg"
                                                                            loading="lazy" />
                                                                            <div className="similar_footerText__2go-e w-100 row">
                                                                                <h1 className="similar_unidata__1lxt7 col-10">
                                                                                    Staffordshire University</h1>
                                                                                <div className="col-2 mt-3"><img
                                                                                    className="similar_footerimage__1BBqb "
                                                                                    src="https://images.leverageedu.com/university/bluearrow.png" />
                                                                                </div>
                                                                                <h2 className="similar_unidesc__10ic3">Staffordshire
                                                                                    University, United Kingdom</h2>
                                                                            </div>
                                                                            <h2 className="similar_facts__1i5bJ">Public
                                                                                | Estd. 1971
                                                                                | 190+ Courses
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-index="4" className="slick-slide" tabIndex="-1"
                                                                aria-hidden="true" >
                                                                <div>
                                                                    <div tabIndex="-1" >
                                                                        <div className="similar_box__2Lq08"><img
                                                                            className="similar_boxImage__2xy_q"
                                                                            src="https://s3.ap-south-1.amazonaws.com/leverageedu/school-cover-image/uk/2019-10-19_44_universityofreading.jpg"
                                                                            loading="lazy" />
                                                                            <div className="similar_footerText__2go-e w-100 row">
                                                                                <h1 className="similar_unidata__1lxt7 col-10">
                                                                                    University of Reading</h1>
                                                                                <div className="col-2 mt-3"><img
                                                                                    className="similar_footerimage__1BBqb "
                                                                                    src="https://images.leverageedu.com/university/bluearrow.png" />
                                                                                </div>
                                                                                <h2 className="similar_unidesc__10ic3">University of
                                                                                    Reading, United Kingdom</h2>
                                                                            </div>
                                                                            <h2 className="similar_facts__1i5bJ">Public
                                                                                | Estd. 1892
                                                                                | 130+ Courses
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div data-index="5" className="slick-slide" tabIndex="-1"
                                                                aria-hidden="true" >
                                                                <div>
                                                                    <div tabIndex="-1" >
                                                                        <div className="similar_box__2Lq08"><img
                                                                            className="similar_boxImage__2xy_q"
                                                                            src="https://s3.ap-south-1.amazonaws.com/leverageedu/school-cover-image/australia/2020-04-02_09_uow211846.jpg"
                                                                            loading="lazy" />
                                                                            <div className="similar_footerText__2go-e w-100 row">
                                                                                <h1 className="similar_unidata__1lxt7 col-10">
                                                                                    University of Wollongong College</h1>
                                                                                <div className="col-2 mt-3"><img
                                                                                    className="similar_footerimage__1BBqb "
                                                                                    src="https://images.leverageedu.com/university/bluearrow.png" />
                                                                                </div>
                                                                                <h2 className="similar_unidesc__10ic3">University of
                                                                                    Wollongong College, Australia</h2>
                                                                            </div>
                                                                            <h2 className="similar_facts__1i5bJ">Public
                                                                                | Estd. 1951
                                                                                | 4 Courses
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog Section End --> */}

        </div>
                {/* <!-- Main content End --> */ }

    {/* <!-- Footer Start --> */ }
    <FrontendFooter />
    {/* <!-- Footer End --> */ }

    {/* <!-- start scrollUp  --> */ }
    <div id="scrollUp" className="orange-color">
        <i className="fa fa-angle-up"></i>
    </div>
    {/* <!-- End scrollUp  -->

<!-- Search Modal Start --> */}
    <div aria-hidden="true" className="modal fade search-modal" role="dialog" tabIndex="-1">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span className="flaticon-cross"></span>
        </button>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="search-block clearfix">
                    <form>
                        <div className="form-group">
                            <input className="form-control" placeholder="Search Here..." type="text" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

            </body >









        </div >


    );
};


