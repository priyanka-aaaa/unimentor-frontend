import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoaderFrontend from './LoaderFrontend';
import SweetAlert from 'react-bootstrap-sweetalert';
import {
    faStar, faGraduationCap, faCalendarCheck, faPhone,
    faEnvelope, faGlobe, faCheckCircle, faAngleDown, faAngleUp

} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg|webp)$/));

export default function UniversityPage() {
    let { slug } = useParams();
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [universityId, setuniversityId] = useState([]);
    const [foundedYear, setfoundedYear] = useState("");
    const [loader, setmyloader] = useState("false");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [coursesNoValues, setcoursesNoValues] = useState("0");
    const [formValues, setFormValues] = useState([{
        question: "", answer: ""
    }])
    const [FormAdmissionValues, setFormAdmissionValues] = useState([{
        point: ""
    }])
    const [FormuniversitiesValues, setFormuniversitiesValues] = useState([{
        name: "", email: ""
    }])
    const [FormDocumentValues, setFormDocumentValues] = useState([{
        document: ""
    }])
    const [FormOverviewValues, setFormOverviewValues] = useState([{
        english: "", acceptanceRate: "", cgpa: "", course: "", courseNo: "", foundedYear: "", month: "",
        ranking: "", rate: "", year: ""
    }])
    const [FormPrimaryInformationValues, setFormPrimaryInformationValues] = useState([{
        website: "", country: "", phone: "", type: ""
    }])
    const [universityImageValues, setuniversityImageValues] = useState([{
        logo: "", coverPic: ""
    }])
    const [coursesValues, setcoursesValues] = useState([{
        courseName: "", duration: "", tuitionFee: "", studyField: "", fee: "", courseLevel: "", cgpa: "",
        eligibility: "", english: "", coursewebsite: "", description: "", exam: ""
    }])
    const [similarUniveristyValues, setsimilarUniveristyValues] = useState([{
        universityPrimaryInformation: "", universityOverview: "", universityImage: "", _id: ""
        // universityPrimaryInformation: "", duration: "", tuitionFee: "", studyField: "", fee: "", courseLevel: "", cgpa: "",
        // eligibility: "", english: "", coursewebsite: "", description: "", exam: ""
    }])

    const [rankingValues, setrankingValues] = useState([])
    const [imageVideoValues, setimageVideoValues] = useState([])
    const [down, setdown] = useState("1");
    const [up, setup] = useState("0");
    useEffect(() => {
        const urlMain = process.env.REACT_APP_SERVER_URL + 'universitySlug/' + slug;
        fetch(urlMain, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                var id = data.universities[0]._id;
                setuniversityId(id)
                const url1 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/faqs';
                fetch(url1, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setFormValues(data.universityFaqs)
                    })

                const url2 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/admissions';
                fetch(url2, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setFormAdmissionValues(data.universityAdmissions)
                    })
                const url3 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/documents';
                fetch(url3, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setFormDocumentValues(data.universityDocuments)
                    })
                const url4 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/overview';
                fetch(url4, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        var myResult = data.universityOverview
                        if (myResult !== undefined) {
                            setFormOverviewValues(data.universityOverview)
                        }
                    })
                const url5 = process.env.REACT_APP_SERVER_URL + 'universities';
                fetch(url5, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        var myuniversitiesResult = data.universities
                        myuniversitiesResult.map((element) => {
                            if (element._id === id) {
                                setFormuniversitiesValues(element)
                            }
                        })
                    })
                const url6 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/primaryInformation';
                fetch(url6, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        var myresults = data.universityPrimaryInformation;
                        if (Object.keys(myresults).length !== 0) {
                            setFormPrimaryInformationValues(data.universityPrimaryInformation)


                        }
                    })
                const url7 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/image';
                fetch(url7, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        var myuniversityImage = data.universityImage
                        if (myuniversityImage !== undefined) {
                            setuniversityImageValues(myuniversityImage)
                        }
                    })
                const url8 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/courses';
                fetch(url8, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setcoursesValues(data.universityCourses)
                        var myresults = data.universityCourses
                        if (Object.keys(myresults).length > 3) {
                            setcoursesNoValues(1);
                        }
                        else {
                            setcoursesNoValues(0);

                        }
                    })
                const url9 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/rankings';
                fetch(url9, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setrankingValues(data.universityRankings)
                    })
                const url10 = process.env.REACT_APP_SERVER_URL + 'university/' + id + '/imageVideos';
                fetch(url10, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setimageVideoValues(data.universityImageVideos)
                    })
                const url11 = process.env.REACT_APP_SERVER_URL + 'universitySimilar';
                fetch(url11, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        setsimilarUniveristyValues(data.universities)
                    })
            })
    }, [])
    var divStyle = {
        backgroundImage: 'url(' + universityImageValues.coverPic + ')'
    }
    function handleClick() {
        if (down === "1") {
            setdown("0");
            setup("1")
        }
        else {
            setdown("1");
            setup("0")
        }
    }
    function handleApplyNow(universityID, courseID, session, applicationProgress, mycountry) {
        if (!localStorage.getItem("studentId")) {
            alert("Please login first")
        }
        else {
            var studentToken = localStorage.getItem("studentToken")
            setmyloader("true")
            const obj = {
                universityID: universityID,
                courseID: courseID,
                session: session,
                applicationProgress: applicationProgress,
                country: mycountry,
            };
            axios.post(process.env.REACT_APP_SERVER_URL + 'student/applications', obj, { headers: { 'Authorization': studentToken } })
                .then(function (res) {
                    setmyloader("false")
                    if (res.data.success === true) {
                        setshowSweetAlert("1")
                    }
                })
                .catch(error => {

                });
        }
    }
    return (
        <div>

            {loader === "true" ?
                <LoaderFrontend />
                : null}
            {showSweetAlert === "1" ?

                <SweetAlert
                    success
                    title="Success!"
                    onConfirm={(value) => {
                        setshowSweetAlert("0")
                    }}
                >
                    You Are Apply Successfully
                </SweetAlert>
                : null
            }
            <div className="main-content">
                {/*Full width header Start*/}
                <div className="full-width-header">
                    {/*Header Start*/}
                    <Header />
                </div>
            </div>
            <div className="defult-home">
                <div className="main-content">
                    <div className="rs-breadcrumbs img4 cover-pict" style={divStyle} >
                        <div className="breadcrumbs-inner text-center">
                            <h1 className="page-title">{FormPrimaryInformationValues.name}</h1>
                            <ul>
                                <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                                    <a className="active" >Home</a>
                                </li>
                                <li>University</li>
                            </ul>
                        </div>
                    </div>
                    <div className="rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 ">
                                    <div className="widget-area">
                                        <div className="university-widget mb-50">
                                            <div className="cover"><img src={universityImageValues.coverPic} /></div>
                                            <div className="univer-logo"><img src={universityImageValues.logo} /></div>
                                            <h4>{FormPrimaryInformationValues.name}</h4>
                                            <p>{FormPrimaryInformationValues.country}</p>
                                            <h6> {FormPrimaryInformationValues.type} | Estd. {FormOverviewValues.foundedYear}</h6>
                                            <button type="button" className="btn website-btn talk-btn">Talk to an Expert for FREE</button>
                                        </div>
                                        <div className="recent-posts mb-50">
                                            <div className="widget-title">
                                                <h3 className="title">Get in Touch</h3>
                                            </div>
                                            <div className="recent-post-widget">
                                                <div className="post-img">
                                                    <span>
                                                        <FontAwesomeIcon icon={faPhone} />
                                                    </span>
                                                </div>
                                                <div className="post-desc">
                                                    <span className="date">
                                                        Call Now
                                                    </span>
                                                    <a href="tel:4401915153000">{FormPrimaryInformationValues.phone}</a>

                                                </div>
                                            </div>
                                            <div className="recent-post-widget">
                                                <div className="post-img">
                                                    <span>
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </span>
                                                </div>
                                                <div className="post-desc">
                                                    <span className="date">


                                                        <i className="fa fa-calendar"></i>
                                                        Email
                                                    </span>
                                                    <a
                                                        href="mailto:student.helpline@sunderland.ac.uk">{FormuniversitiesValues.email}</a>
                                                </div>
                                            </div>
                                            <div className="recent-post-widget">
                                                <div className="post-img">
                                                    <span>
                                                        <FontAwesomeIcon icon={faGlobe} />
                                                    </span>
                                                </div>
                                                <div className="post-desc">
                                                    <span className="date">
                                                        <i className="fa fa-calendar"></i>
                                                        Website
                                                    </span>
                                                    <a href="https://www.sunderland.ac.uk/">{FormPrimaryInformationValues.website}</a>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="categories mb-50">
                                            <div className="widget-title">
                                                <h3 className="title">Location</h3>
                                            </div>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.8351609729093!2d-113.44840898415342!3d53.56070998002452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a022e091c0b0f7%3A0xe88f7efea9cde181!2sConcordia%20University%20of%20Edmonton!5e0!3m2!1sen!2sin!4v1642487984751!5m2!1sen!2sin"
                                                width="100%" height="450" allowFullScreen=""
                                                loading="lazy"></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 pr-35 md-pr-15">
                                    <div className="row">
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item">
                                                <ul>
                                                    <li><a href="#overview">Overview</a></li>
                                                    <li><a href="#ranking">Ranking</a></li>
                                                    <li><a href="#courses-fees">Courses & Fees</a></li>
                                                    <li><a href="#admission-requirements">Admissions Requirements </a></li>
                                                    <li><a href="#images-video"> Images/Video</a></li>
                                                    <li><a href="#courses"> Browse Courses</a></li>
                                                </ul>
                                                <div className="overviewblock">
                                                    <div className="overview-box blue-light">
                                                        <span className="icon">
                                                            <FontAwesomeIcon icon={faGraduationCap} />
                                                        </span>
                                                        <h3>{FormOverviewValues.courseNo} +<br /><span>Courses</span></h3>
                                                    </div>
                                                    <div className="overview-box green-light">
                                                        <span className="icon">
                                                            <FontAwesomeIcon icon={faCalendarCheck} /></span>
                                                        <h3>{FormOverviewValues.foundedYear}<br /><span>Founded year </span></h3>
                                                    </div>

                                                    <div className="overview-box ornage-light">
                                                        <span className="icon">
                                                            <FontAwesomeIcon icon={faStar} />

                                                        </span>
                                                        <h3>{FormOverviewValues.ranking}<br /><span>Global Rankings</span></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item" id="overview">
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="#">Overview</a></h3>
                                                    <div className="blog-meta">
                                                        <h5>Founded year</h5>
                                                        <p>{FormOverviewValues.foundedYear}</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>International Student Rate</h5>
                                                        <p>{FormOverviewValues.rate}</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>Popular Courses</h5>
                                                        <p>{FormOverviewValues.course}</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>No. of courses</h5>
                                                        <p>{FormOverviewValues.courseNo}</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>English Proficiency</h5>
                                                        <p>{FormOverviewValues.english}</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5>CGPA</h5>
                                                        <p>{FormOverviewValues.cgpa}</p>
                                                    </div>
                                                    <div className="blog-meta">
                                                        <h5> Acceptance rate</h5>
                                                        <p>{FormOverviewValues.acceptanceRate}</p>
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
                                                        <a href="#" className="cta_bluetext__2B7BK">Find courses best-fit
                                                            for you</a>
                                                    </div>
                                                    <div className="col-3"><img className="cta_image__3Oih8" src={images["Group1169.webp"]} alt="" /></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item" id="courses-fees">
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="#">Courses & Fees</a></h3>
                                                    {coursesValues.map((element, index) => (
                                                        <div key={index}>

                                                            <h5>   <a
                                                                data-bs-toggle="collapse" href={"#collapseCourse" + index}>
                                                                {element.courseName || ""}
                                                            </a>
                                                            </h5>
                                                            <div id={"collapseCourse" + index} className="collapse" data-bs-parent="#accordion">
                                                                <div className="blog-meta">
                                                                    <h5> Duration</h5>
                                                                    {element.duration}
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h5> Fee</h5>
                                                                    {element.fee} {" "}
                                                                    {element.tuitionFee}
                                                                </div>
                                                                <div className="blog-meta">

                                                                    <h5> CGPA</h5>
                                                                    {element.cgpa}

                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h5>Eligibility</h5>
                                                                    {element.eligibility}
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h5>Course website</h5>
                                                                    {element.website}
                                                                </div>
                                                                <div className="blog-meta">
                                                                    <h5>Academic proficiency exam</h5>
                                                                    {element.exam}
                                                                </div>

                                                                <div className="blog-desc">
                                                                    <h5 className="mt-3">Course Description</h5>
                                                                    {element.description}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item" id="ranking">
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a >Ranking</a></h3>
                                                    <div className="blog-meta">
                                                        {rankingValues.map((element, index) => (
                                                            <ul className="btm-cate" key={index}>
                                                                <li>
                                                                    <div className="blog-date">
                                                                        <span>  <FontAwesomeIcon icon={faGlobe} /></span>
                                                                        {element.agencyName}
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="blog-date">
                                                                        <span><FontAwesomeIcon icon={faCalendarCheck} />  </span>
                                                                        {element.year}
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="author">
                                                                        <span><FontAwesomeIcon icon={faStar} /> </span>
                                                                        {element.rank}
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        ))}
                                                    </div><br />

                                                    <div className="raning-agency">
                                                        <h5>Ranking Agencies</h5>
                                                        <div className="row">
                                                            {rankingValues.map((element, index) => (
                                                                <div className="col-md-3">
                                                                    <div className="ranking-img">
                                                                        <a href="#" key={index}><img src={element.certificate} alt="" /></a>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
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
                                                        <a href="#" className="cta_bluetext__2B7BK">Talk to an Expert for FREE</a>
                                                    </div>
                                                    <div className="col-3"><img className="cta_image__3Oih8" src={images["Group1169.webp"]} alt="" /></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item" id="admission-requirements">
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="#">Admissions Requirements </a></h3>
                                                    <div className="admission-list">
                                                        <ul className="nav nav-tabs" role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active" data-bs-toggle="tab"
                                                                    href="#home">Application</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-bs-toggle="tab" href="#menu1">Documents</a>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content">
                                                            <div id="home" className="container tab-pane active"><br />
                                                                <h5>Application</h5>
                                                                {FormAdmissionValues.map((element, index) => (
                                                                    <ul key={index}>
                                                                        <li><span>
                                                                            <FontAwesomeIcon icon={faCheckCircle} />
                                                                        </span>{element.point || ""}</li>

                                                                    </ul>
                                                                ))}
                                                            </div>
                                                            <div id="menu1" className="container tab-pane fade"><br />
                                                                <h5>Documents</h5>
                                                                {FormDocumentValues.map((element, index) => (
                                                                    <ul key={index}>
                                                                        <li><span>
                                                                            <FontAwesomeIcon icon={faCheckCircle} />
                                                                        </span>{element.document || ""}</li>

                                                                    </ul>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-50">
                                            <div className="blog-item" id="images-video">
                                                <div className="blog-content">
                                                    <h3 className="blog-title"><a href="#">Images/Video </a></h3>
                                                    <div className="row" >
                                                        {imageVideoValues.map((element, index) => (
                                                            <div className="col-md-4" key={index}>
                                                                <div className="blog-img mb-3">
                                                                    {element.type === "image" ?
                                                                        <a >
                                                                            <img src={element.link} alt="image" />
                                                                        </a>
                                                                        :
                                                                        <a >
                                                                            <video width="320" height="240" controls>
                                                                                <source src={element.link} type="video/ogg" />
                                                                            </video>
                                                                        </a>
                                                                    }
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="blog-item" id="courses">
                                                <div className="blog-content">
                                                    <h3 className="blog-title">Browse Courses</h3>
                                                    <div className="row mb-3" >
                                                        {coursesValues.map((element, index) => (
                                                             <>
                                                               {index < 4 ?
                                                            <div className="col-sm-6 mb-4" >
                                                                
                                                                <div>
                                                                <div className="subcourses_courseBox__3deGG">
                                                                    <div className="subcourses_program__3pkFj col-sm-12 p-0">
                                                                        <img src={images["project-management.png"]} alt="" />

                                                                        <div><span className="subcourses_h-title__sLV10">{element.courseName}</span><span
                                                                            className="subcourses_subHeading__zdEIg">{element.studyField}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="subcourses_line__T3g-V"></div>
                                                                    <div className="row align-items-center">
                                                                        <div className="col-6 col-sm-4 clearfix">
                                                                            <div className="subcourses_details__3g8AB">
                                                                                <h3 className="subcourses_c-desc__Dzhnk">
                                                                                    {element.tuitionFee}{" "}  {element.fee}
                                                                                </h3>
                                                                                <p className="subcourses_c-title__2MKAy">Fee</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-6 col-sm-4">
                                                                            <div className="subcourses_details__3g8AB">
                                                                                <h3 className="subcourses_c-desc__Dzhnk">{element.duration}
                                                                                </h3>
                                                                                <p className="subcourses_c-title__2MKAy">Duration</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-6 col-sm-4">
                                                                            <div className="subcourses_details__3g8AB">
                                                                                <h3 className="subcourses_c-desc__Dzhnk">{element.exam}</h3>
                                                                                <p className="subcourses_c-title__2MKAy">Qualification</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-6 col-sm-4 mt-2">
                                                                            <div className="subcourses_details__3g8AB">
                                                                                <h3 className="subcourses_c-desc__Dzhnk">{element.courseLevel}</h3>
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
                                                                                <h3 className="subcourses_c-desc__Dzhnk">{element.year}{' '}{element.month}</h3>
                                                                                <p className="subcourses_c-title__2MKAy">Intakes</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-12">
                                                                            <div className="subcourses_line__T3g-V">
                                                                            </div>
                                                                            <p className="subcourses_description__1v-2y">{element.description}<a
                                                                                className="text-primary cursor-pointer">Read More</a>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-right w-100">
                                                                    <button className="btn btn-primary  w-100" onClick={() => handleApplyNow(universityId, element._id, element.year + element.month, "first", FormPrimaryInformationValues.country)}>Apply Now
                                                                        <img
                                                                            src="https://images.leverageedu.com/university/whitearrow.svg" />
                                                                    </button>
                                                                </div>
                                                                </div>

                                                             

                                                            </div>
                                                               :
                                                               null
                                                           }
                                                            </>
                                                        ))}
                                                    </div>
                                                    {coursesNoValues === 1 ?
                                                                <div>
                                                                  <Link to={'/schools/' + slug + '/courses'} className="nav-link btn-view-all" >View All Courses</Link>
                                                                </div>
                                                                : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-3 mt-5">
                                            <div id="accordion" className="blog-item">
                                                <div className=" blog-content">
                                                    <h3 className="blog-title">FAQ</h3>
                                                    {formValues.map((element, index) => (
                                                        <div key={index}>
                                                            <div className="card">
                                                                <a className="card-header  card-link" onClick={() => handleClick()}
                                                                    data-bs-toggle="collapse" href={"#collapsefaq" + index}>
                                                                    {down === "0" ?
                                                                        null
                                                                        :
                                                                        <FontAwesomeIcon icon={faAngleDown} style={{

                                                                            color: "#000",
                                                                            position: "absolute",
                                                                            display: "inline-block",

                                                                            fontSize: "inherit",
                                                                            textRendering: "auto",
                                                                            right: "20px"
                                                                        }} />
                                                                    }
                                                                    {up === "0" ?
                                                                        null
                                                                        :
                                                                        <FontAwesomeIcon icon={faAngleUp} style={{
                                                                            position: "absolute",
                                                                            fontWeight: 900,
                                                                            fontFamily: 'Font Awesome 5 Free',
                                                                            marginRight: "0.1rem",
                                                                            right: "16px",
                                                                        }} />
                                                                    }
                                                                    {element.question || ""}
                                                                </a>
                                                                <div id={"collapsefaq" + index} className="collapse" data-bs-parent="#accordion">
                                                                    <div className="card-body">
                                                                        {element.answer || ""}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb-5">
                                            <div id="Similar" className="blog-item">
                                                <div className="similar_fullbox__1qBJc  blog-content">
                                                    <h3 className="blog-title"><a href="#">Similar Universities</a></h3>
                                                    <div className="slick-slider slick-initialized" dir="ltr">

                                                        <div className="slick-list">
                                                            <div className="slick-track">
                                                                <div className="row">

                                                                    {similarUniveristyValues.map((element, index) =>


                                                                    (

                                                                        <div className="col-md-4" key={index}>


                                                                            {
                                                                                element._id !== universityId ?
                                                                                    <div  key={index}>
                                                                                        <div data-index="0" className="slick-slide slick-active slick-current"
                                                                                            tabIndex="-1" aria-hidden="false">
                                                                                            <div>
                                                                                                <div tabIndex="-1">
                                                                                                    <div className="similar_box__2Lq08">

                                                                                                        <img src={element.universityImage.coverPic} alt="university coverPik" />


                                                                                                        <div className="similar_footerText__2go-e w-100 row">
                                                                                                            <h1 className="similar_unidata__1lxt7 col-10">




                                                                                                                {element.universityPrimaryInformation.name}

                                                                                                            </h1>

                                                                                                            <h2 className="similar_unidesc__10ic3"> {element.universityPrimaryInformation.name},  {element.universityPrimaryInformation.country}</h2>
                                                                                                        </div>
                                                                                                        <h2 className="similar_facts__1i5bJ"> {element.universityPrimaryInformation.type}
                                                                                                            | Estd.{element.universityOverview.foundedYear}

                                                                                                            | {element.universityOverview.courseNo}+ Courses
                                                                                                        </h2>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    : null
                                                                            }

                                                                        </div>
                                                                    ))}

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
                <Footer />
                <div id="scrollUp" className="orange-color">
                    <i className="fa fa-angle-up"></i>
                </div>
            </div >
        </div >
    );
};

