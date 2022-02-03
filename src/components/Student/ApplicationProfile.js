import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import Family from './Family';
import Education from './Education';
import Footer from './Footer';

export default function Studentregister() {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();


    // start for education
    const [educationhighestEducation, seteducationhighestEducation] = useState();
    const [educationstatus, seteducationstatus] = useState();
    const [educationspecialization, seteducationspecialization] = useState();
    const [educationdegree, seteducationdegree] = useState();
    const [educationgradePercentage, seteducationgradePercentage] = useState();
    const [educationmarks, seteducationmarks] = useState();
    const [educationattendedForm, seteducationattendedForm] = useState();
    const [educationinstitution, seteducationinstitution] = useState();
    const [educationaffiliationUniversity, seteducationaffiliationUniversity] = useState();
    const [educationlanguage, seteducationlanguage] = useState();
    const [educationcountry, seteducationcountry] = useState();
    const [educationstate, seteducationstate] = useState();
    const [educationcity, seteducationcity] = useState();
    const [educationaddress, seteducationaddress] = useState();
    const [educationzipcode, seteducationzipcode] = useState();
    // end for education
    //start for score
    const [scoremarks, setscoremarks] = useState();
    const [scoreenglishProficiency, setscoreenglishProficiency] = useState();
    const [scoregre, setscoregre] = useState();
    const [scoresat, setscoresat] = useState();
    // end for score
    // start for education
    const [experiencestatus, setexperiencestatus] = useState();
    const [experiencetype, setexperiencetype] = useState();
    const [experienceorganization, setexperienceorganization] = useState();
    const [experiencedesignation, setexperiencedesignation] = useState();
    const [experiencerole, setexperiencerole] = useState();
    const [experiencestarted, setexperiencestarted] = useState();
    const [experienceended, setexperienceended] = useState();
    const [experiencecountry, setexperiencecountry] = useState();
    const [experiencecity, setexperiencecity] = useState();
    // end for education
    // start for activity 
    const [activityactivityStatus, setactivityactivityStatus] = useState();
    const [activityactivity, setactivityactivity] = useState();
    const [activityposition, setactivityposition] = useState();
    const [activitydescription, setactivitydescription] = useState();
    const [activitystarted, setactivitystarted] = useState();
    const [activityended, setactivityended] = useState();
    const [activityapply, setactivityapply] = useState();
    // end for activity
    //start for recommendation
    const [recommendationtype, setrecommendationtype] = useState();
    const [recommendationorganization, setrecommendationorganization] = useState();
    const [recommendationrecommenderName, setrecommendationrecommenderName] = useState();
    const [recommendationemail, setrecommendationemail] = useState();
    const [recommendationrelation, setrecommendationrelation] = useState();
    const [recommendationdesignation, setrecommendationdesignation] = useState();
    const [recommendationnumber, setrecommendationnumber] = useState();
    const [recommendationaddress, setrecommendationaddress] = useState();
    const [recommendationletter, setrecommendationletter] = useState();



    //end for recommendation
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
            console.log(mydata);
            var user_email = mydata.data.student.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        var myurl = process.env.REACT_APP_SERVER_URL;




        //start for education
        axios.get('/student/education', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var ResultstudentEducation = res.data.studentEducation;
                    seteducationhighestEducation(ResultstudentEducation.highestEducation);
                    seteducationstatus(ResultstudentEducation.status);
                    seteducationspecialization(ResultstudentEducation.specialization);
                    seteducationdegree(ResultstudentEducation.degree);
                    seteducationgradePercentage(ResultstudentEducation.gradePercentage);
                    seteducationmarks(ResultstudentEducation.marks);
                    seteducationattendedForm(ResultstudentEducation.attendedForm);
                    seteducationinstitution(ResultstudentEducation.institution);
                    seteducationaffiliationUniversity(ResultstudentEducation.affiliationUniversity);
                    seteducationlanguage(ResultstudentEducation.language);
                    seteducationcountry(ResultstudentEducation.country);
                    seteducationstate(ResultstudentEducation.state);
                    seteducationcity(ResultstudentEducation.city);
                    seteducationaddress(ResultstudentEducation.address);
                    seteducationzipcode(ResultstudentEducation.zipcode);

                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for education
        //start for score
        axios.get('/student/score', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var resultStudentScore = res.data.studentScore;
                    setscoremarks(resultStudentScore.marks);
                    setscoreenglishProficiency(resultStudentScore.englishProficiency);
                    setscoregre(resultStudentScore.gre);
                    setscoresat(resultStudentScore.sat);
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for score
        //start for work experience
        axios.get('/student/experience', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var resultstudentExperience = res.data.studentExperience;
                    setexperiencestatus(resultstudentExperience.status);
                    setexperiencetype(resultstudentExperience.type);
                    setexperienceorganization(resultstudentExperience.organization);
                    setexperiencedesignation(resultstudentExperience.designation);
                    setexperiencerole(resultstudentExperience.role);
                    setexperiencestarted(resultstudentExperience.started);
                    setexperienceended(resultstudentExperience.ended);
                    setexperiencecountry(resultstudentExperience.country);
                    setexperiencecity(resultstudentExperience.city);
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for work experience
        //start for activity
        axios.get('/student/activity', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var resultActivity = res.data.studentActivity;
                    setactivityactivityStatus(resultActivity.activityStatus);
                    setactivityactivity(resultActivity.activity);
                    setactivityposition(resultActivity.position);
                    setactivitydescription(resultActivity.description);
                    setactivitystarted(resultActivity.started);
                    setactivityended(resultActivity.ended);
                    setactivityapply(resultActivity.apply);
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for activity
        //start for recommendation
        axios.get('/student/profileRecommendation', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    var resultstudentProfileRecommendation = res.data.studentProfileRecommendation;
                    setrecommendationtype(resultstudentProfileRecommendation.type);
                    setrecommendationorganization(resultstudentProfileRecommendation.organization);
                    setrecommendationrecommenderName(resultstudentProfileRecommendation.recommenderName);
                    setrecommendationemail(resultstudentProfileRecommendation.email);
                    setrecommendationrelation(resultstudentProfileRecommendation.relation);
                    setrecommendationdesignation(resultstudentProfileRecommendation.designation);
                    setrecommendationnumber(resultstudentProfileRecommendation.number);
                    setrecommendationaddress(resultstudentProfileRecommendation.address);
                    setrecommendationletter(resultstudentProfileRecommendation.letter);

                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for recommendation
    }, [])



    function Personal_education(event) {
        event.preventDefault();
        const obj = {

            highestEducation: educationhighestEducation,
            status: educationstatus,
            specialization: educationspecialization,
            degree: educationdegree,
            gradePercentage: educationgradePercentage,
            marks: educationmarks,
            attendedForm: educationattendedForm,
            institution: educationinstitution,
            affiliationUniversity: educationaffiliationUniversity,
            language: educationlanguage,
            country: educationcountry,
            state: educationstate,
            city: educationcity,
            address: educationaddress,
            zipcode: educationzipcode,
        };
        axios.put('/student/education', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("education update successfully");
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
    }
    function Personal_test(event) {
        event.preventDefault();
        const obj = {
            marks: scoremarks,
            englishProficiency: scoreenglishProficiency,
            gre: scoregre,
            sat: scoresat
        };
        axios.put('/student/score', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("score update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    function Personal_experience(event) {
        event.preventDefault();
        const obj = {
            status: experiencestatus,
            type: experiencetype,
            organization: experienceorganization,
            designation: experiencedesignation,
            role: experiencerole,
            started: experiencestarted,
            ended: experienceended,
            country: experiencecountry,
            city: experiencecity

        };
        axios.put('/student/experience', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("experience update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    function application_activity(event) {
        event.preventDefault();
        const obj = {
            activityStatus: activityactivityStatus,
            activity: activityactivity,
            position: activityposition,
            description: activitydescription,
            started: activitystarted,
            ended: activityended,
            apply: activityapply
        };
        axios.put('/student/activity', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("activity update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    function application_recommendation(event) {
        event.preventDefault();
        const obj = {
            type: recommendationtype,
            organization: recommendationorganization,
            recommenderName: recommendationrecommenderName,
            email: recommendationemail,
            relation: recommendationrelation,
            designation: recommendationdesignation,
            number: recommendationnumber,
            address: recommendationaddress,
            letter: recommendationletter
        };
        axios.put('/student/profileRecommendation', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("Recommendation update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }

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
                                    {/* <PersonalInformation /> */}
                                    <PersonalInfo />
                                    <Address />
                                    <Family />
                                 <Education/>

                                    <div className="card">
                                        <a className="card-header" data-bs-toggle="collapse" href="#collapse5">
                                            <strong>5</strong>  Test Scores
                                        </a>
                                        <div id="collapse5" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-block">
                                                    <form onSubmit={Personal_test}>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                                <div className="form-group"><label htmlFor="">Marks in English in Class
                                                                    12</label><input

                                                                        value={scoremarks}
                                                                        onChange={(e) => setscoremarks(e.target.value)}
                                                                        type="number" className="form-control" name="score_12th" placeholder="Marks in English in Class 12" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12 col-lg-4">
                                                                <div className="form-group"><label htmlFor="has_eng">Have you taken any
                                                                    English Proficiency Test?</label><br /><input
                                                                        value={scoreenglishProficiency}
                                                                        onChange={(e) => setscoreenglishProficiency(e.target.value)}
                                                                        checked={scoreenglishProficiency === "yes"}
                                                                        type="radio" id="1" name="has_eng" value="yes" /><label className="mr-1" htmlFor="1">Yes</label>&nbsp;&nbsp;<input
                                                                        value={scoreenglishProficiency}
                                                                        onChange={(e) => setscoreenglishProficiency(e.target.value)}
                                                                        checked={scoreenglishProficiency === "no"}
                                                                        type="radio" id="0" name="has_eng" value="no" /><label className="mr-1" htmlFor="0">No</label>&nbsp;&nbsp;<br /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12 col-lg-4">
                                                                <div className="form-group"><label htmlFor="has_pg">Have you taken
                                                                    GRE/GMAT?</label><br /><input
                                                                        value={scoregre}
                                                                        onChange={(e) => setscoregre(e.target.value)}
                                                                        checked={scoregre === "yes"}
                                                                        type="radio" id="has_pg_1" name="has_pg" value="yes" /><label className="mr-1" htmlFor="has_pg_1">Yes</label>&nbsp;&nbsp;<input
                                                                        value={scoregre}
                                                                        onChange={(e) => setscoregre(e.target.value)}
                                                                        checked={scoregre === "no"}
                                                                        type="radio" id="has_pg_0" name="has_pg" value="no" /><label className="mr-1" htmlFor="has_pg_0">No</label>&nbsp;&nbsp;<br /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-12 col-lg-4">
                                                                <div className="form-group"><label htmlFor="has_ug">Have you taken
                                                                    SAT/ACT?</label><br /><input
                                                                        value={scoresat}
                                                                        onChange={(e) => setscoresat(e.target.value)}
                                                                        checked={scoresat === "yes"}
                                                                        type="radio" id="has_ug_1" name="has_ug" value="yes" /><label className="mr-1" htmlFor="has_ug_1">Yes</label>&nbsp;&nbsp;
                                                                    <input
                                                                        value={scoresat}
                                                                        onChange={(e) => setscoresat(e.target.value)}
                                                                        checked={scoresat === "yes"}
                                                                        type="radio" id="has_ug_0" name="has_ug" value="no" /><label className="mr-1" htmlFor="has_ug_0">No</label>&nbsp;&nbsp;<br /></div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <div className="row">
                                                                <div className="col-md-6"></div>
                                                                <div className="col-md-6 text-right">

                                                                    <button type="submit" className="btn btn-secondary">Save
                                                                    </button>
                                                                    <button type="submit" data-bs-toggle="collapse" className="btn btn-success" href="#collapse6">Save
                                                                        Next</button>
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="card">
                                        <a className="card-header" data-bs-toggle="collapse" href="#collapse6">
                                            <strong>6</strong>  Work Experience
                                        </a>
                                        <div id="collapse6" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-block">
                                                    <form onSubmit={Personal_experience}>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                <div className="form-group">
                                                                    <label>Work Status <span className="text-danger">
                                                                        *</span></label><br />
                                                                    <label className="ant-radio-wrapper"><span className="ant-radio">
                                                                        <input
                                                                            value={experiencestatus}
                                                                            onChange={(e) => setexperiencestatus(e.target.value)}
                                                                            name="is_current_job_0" type="radio" className="ant-radio-input" value="Ongoing" />
                                                                        <span className="ant-radio-inner"></span></span><span>Ongoing</span></label>
                                                                    <label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                                        value={experiencestatus}
                                                                        onChange={(e) => setexperiencestatus(e.target.value)} name="is_current_job_0" type="radio" className="ant-radio-input" value="Completed" /><span className="ant-radio-inner"></span></span><span>Completed</span></label>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                <div className="form-group"><label htmlFor="work_type">Work Type <span className="text-danger"> *</span></label><select
                                                                    value={experiencetype}
                                                                    onChange={(e) => setexperiencetype(e.target.value)}
                                                                    className="form-control" id="work_type" name="work_type">
                                                                    <option >Select</option>
                                                                    <option value="Full-time">Full-time</option>
                                                                    <option value="Part-time">Part-time</option>
                                                                    <option value="Internship">Internship</option>
                                                                </select></div>
                                                            </div>
                                                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                <div className="form-group"><label htmlFor="company_name">Name of
                                                                    Organization <span className="text-danger">
                                                                        *</span></label><input
                                                                        value={experienceorganization}
                                                                        onChange={(e) => setexperienceorganization(e.target.value)}
                                                                        type="text" className="form-control" id="company_name" name="company_name" placeholder="Name of Organization" /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="work_designation">Designation</label><input
                                                                    value={experiencedesignation}
                                                                    onChange={(e) => setexperiencedesignation(e.target.value)}
                                                                    type="text" className="form-control" id="work_designation" name="designation" placeholder="Designation" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="role_description">Job
                                                                    Role</label><input
                                                                        value={experiencerole}
                                                                        onChange={(e) => setexperiencerole(e.target.value)}
                                                                        type="text" className="form-control" id="role_description" name="role_description" placeholder="Job Role" /></div>
                                                            </div>
                                                        </div>



                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start_from">Started From</label>
                                                                    <input
                                                                        value={experiencestarted}
                                                                        onChange={(e) => setexperiencestarted(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start_from">Ended On</label>
                                                                    <input
                                                                        value={experienceended}
                                                                        onChange={(e) => setexperienceended(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <label>Country</label>
                                                                <select
                                                                    value={experiencecountry}
                                                                    onChange={(e) => setexperiencecountry(e.target.value)}
                                                                    className="form-control" id="job_country"
                                                                    name="job_country">
                                                                    <option value="">Select Country</option>
                                                                    <option value="India">India</option>
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label
                                                                    htmlFor="job_city">City/Town</label><input
                                                                        value={experiencecity}
                                                                        onChange={(e) => setexperiencecity(e.target.value)}
                                                                        type="text"
                                                                        className="form-control" id="job_city"
                                                                        placeholder="City/Town" name="job_city" value="" /></div>
                                                            </div>

                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="row">
                                                                <div className="col-md-6"></div>
                                                                <div className="col-md-6 text-right">
                                                                    <button type="button" className="btn btn-success ">Add New
                                                                    </button>
                                                                    <button type="submit" className="btn btn-secondary">Save
                                                                    </button>
                                                                    <button type="submit" data-bs-toggle="collapse" className="btn btn-success" href="#collapse7">Save
                                                                        Next</button>
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <a className="card-header" data-bs-toggle="collapse" href="#collapse7">
                                            <strong>7</strong>  Extra Curricular Activities
                                        </a>
                                        <div id="collapse7" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-block">
                                                    <form onSubmit={application_activity}>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label>Acitvity Status <span className="text-danger">
                                                                        *</span></label>
                                                                    <br />
                                                                    <label className="ant-radio-wrapper"><span className="ant-radio">
                                                                        <input name="activity_status_0"
                                                                            value={activityactivityStatus}
                                                                            onChange={(e) => setactivityactivityStatus(e.target.value)}
                                                                            type="radio" className="ant-radio-input" value="Ongoing" /><span className="ant-radio-inner"></span></span>
                                                                        <span>Ongoing</span></label>
                                                                    <label className="ant-radio-wrapper ant-radio-wrapper-checked">
                                                                        <span className="ant-radio ant-radio-checked">
                                                                            <input
                                                                                value={activityactivityStatus}
                                                                                onChange={(e) => setactivityactivityStatus(e.target.value)}
                                                                                name="activity_status_0" type="radio" className="ant-radio-input" value="Completed" />
                                                                            <span className="ant-radio-inner"></span></span>
                                                                        <span>Completed</span></label> <br />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label>Activity <span className="text-danger"> *</span>
                                                                </label>
                                                                    <select
                                                                        value={activityactivity}
                                                                        onChange={(e) => setactivityactivity(e.target.value)}
                                                                        className="form-control" name="activity">
                                                                        <option >Select Activity</option>
                                                                        <option value="Student Government">Student Government
                                                                        </option>
                                                                        <option value="Academic Teams and Clubs">Academic Teams
                                                                            and Clubs</option>
                                                                        <option value="The Debate Team students">The Debate Team
                                                                            students</option>
                                                                        <option value="The Arts Team students">The Arts Team
                                                                            students</option>
                                                                        <option value="Internships">Internships</option>
                                                                        <option value="Culture Clubs">Culture Clubs</option>
                                                                        <option value="Coding and Other Web Skills">Coding and
                                                                            Other Web Skills</option>
                                                                        <option value="Sports">Sports</option>
                                                                        <option value="Music Group">Music Group</option>
                                                                        <option value="Volunteering and Fundraising">
                                                                            Volunteering and Fundraising</option>
                                                                        <option value="Learning a Language">Learning a Language
                                                                        </option>
                                                                        <option value="Others">Others</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="designation">Position/Designation <span className="text-danger"> *</span></label><input
                                                                    value={activityposition}
                                                                    onChange={(e) => setactivityposition(e.target.value)}
                                                                    type="text" className="form-control" id="designation" name="designation" placeholder="Position/Designation" /></div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="description">Description
                                                                </label><input
                                                                        value={activitydescription}
                                                                        onChange={(e) => setactivitydescription(e.target.value)}
                                                                        type="text" className="form-control" id="description" name="description" placeholder="Description" /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start_from">Started From</label>
                                                                    <input
                                                                        value={activitystarted}
                                                                        onChange={(e) => setactivitystarted(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start_from">Ended On</label>
                                                                    <input
                                                                        value={activityended}
                                                                        onChange={(e) => setactivityended(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label>Would you be interested in
                                                                    participating in similar activities at university where
                                                                    you apply?<span className="text-danger">
                                                                        *</span></label><br /><label className="ant-radio-wrapper"><span className="ant-radio"><input
                                                                            value={activityapply}
                                                                            onChange={(e) => setactivityapply(e.target.value)}

                                                                            name="participation_interested_0" type="radio" className="ant-radio-input" value="yes" /><span className="ant-radio-inner"></span></span><span>Yes</span></label><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                                                value={activityapply}
                                                                                onChange={(e) => setactivityapply(e.target.value)}

                                                                                name="participation_interested_0" type="radio" className="ant-radio-input" value="no" /><span className="ant-radio-inner"></span></span><span>No</span></label>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <div className="row">
                                                                <div className="col-md-6"></div>
                                                                <div className="col-md-6 text-right">
                                                                    <button type="button" className="btn btn-success ">Add New
                                                                    </button>
                                                                    <button type="submit" className="btn btn-secondary">Save
                                                                    </button>
                                                                    <button
                                                                        data-bs-toggle="collapse" href="#collapse8"


                                                                        type="submit" className="btn btn-success " >Save
                                                                        Next</button>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card">
                                        <a className="card-header" data-bs-toggle="collapse" href="#collapse8">
                                            <strong>8</strong>    Recommendation
                                        </a>
                                        <div id="collapse8" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-block">
                                                    <form onSubmit={application_recommendation}>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label>Reference Type <span className="text-danger"> *</span></label><br /><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                                    value={recommendationtype}
                                                                    onChange={(e) => setrecommendationtype(e.target.value)}
                                                                    name="reference_type_0" type="radio" className="ant-radio-input" value="Professional" /><span className="ant-radio-inner"></span></span><span>Professional</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input
                                                                        value={recommendationtype}
                                                                        onChange={(e) => setrecommendationtype(e.target.value)}
                                                                        name="reference_type_0" type="radio" className="ant-radio-input" value="Academic" /><span className="ant-radio-inner"></span></span><span>Academic</span></label>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="Name_of_organisation">Name
                                                                    of Organisation/Institution <span className="text-danger">
                                                                        *</span></label><input
                                                                        value={recommendationorganization}
                                                                        onChange={(e) => setrecommendationorganization(e.target.value)}
                                                                        type="text" className="form-control" id="Name_of_organisation" name="Name_of_organisation" placeholder="Name of Organisation/Institution" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="recommender_name">Recommender Name <span className="text-danger"> *</span></label><input
                                                                    value={recommendationrecommenderName}
                                                                    onChange={(e) => setrecommendationrecommenderName(e.target.value)}
                                                                    type="text" className="form-control" id="recommender_name" name="recommender_name" placeholder="Recommender Name" /></div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="official_email_id">Official
                                                                    Email ID <span className="text-danger">
                                                                        *</span></label><input
                                                                        value={recommendationemail}
                                                                        onChange={(e) => setrecommendationemail(e.target.value)}
                                                                        type="text" className="form-control" id="official_email_id" name="official_email_id" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="relation_with_applicant">Relation with Recommender</label><input
                                                                    value={recommendationrelation}
                                                                    onChange={(e) => setrecommendationrelation(e.target.value)}
                                                                    type="text" className="form-control" id="relation_with_applicant" name="relation_with_applicant" placeholder="Relation with recommender" /></div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="recommender_designation">Recommender Designation</label><input
                                                                    value={recommendationdesignation}
                                                                    onChange={(e) => setrecommendationdesignation(e.target.value)}
                                                                    type="text" className="form-control" id="recommender_designation" name="recommender_designation" placeholder="Recommender Designation" /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="contact_number">Contact Number</label><input
                                                                    value={recommendationnumber}
                                                                    onChange={(e) => setrecommendationnumber(e.target.value)}
                                                                    type="number" className="form-control" id="contact_number" name="contact_number" placeholder="Contact Number" /></div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="address_of_organisation">Address of Organisation/Institution</label><input
                                                                    value={recommendationaddress}
                                                                    onChange={(e) => setrecommendationaddress(e.target.value)}
                                                                    type="text" className="form-control" id="address_of_organisation" name="address_of_organisation" placeholder="Address of Organisation/Institution" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label>Do you have letter of recommendation?</label><br /><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                                    value={recommendationletter}
                                                                    onChange={(e) => setrecommendationletter(e.target.value)}
                                                                    name="has_lor_0" type="radio" className="ant-radio-input" value="yes" /><span className="ant-radio-inner"></span></span><span>Yes</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input
                                                                        value={recommendationletter}
                                                                        onChange={(e) => setrecommendationletter(e.target.value)}
                                                                        name="has_lor_0" type="radio" className="ant-radio-input" value="no" /><span className="ant-radio-inner"></span></span><span>No</span></label> <br /></div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <div className="row">
                                                                <div className="col-md-6"></div>
                                                                <div className="col-md-6 text-right">
                                                                    <button type="button" className="btn btn-success ">Add New
                                                                    </button>
                                                                    <button type="submit" className="btn btn-secondary">Save
                                                                    </button>
                                                                    <button type="button" className="btn btn-success ">Save &amp;
                                                                        Next</button>
                                                                </div>

                                                            </div>

                                                        </div>


                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>









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
    );
}