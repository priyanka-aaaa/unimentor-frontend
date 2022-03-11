import React, { useState, useEffect } from "react";

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import axios from 'axios';

import Footer from './Footer';
function AddStudent(props) {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [StudentId, setStudentId] = useState();


    const [mounted, setMounted] = useState();
    const [firstName, setfirstName] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [countryOfBirth, setcountryOfBirth] = useState("");
    const [passportNo, setpassportNo] = useState("");
    const [gender, setgender] = useState("");
    const [maritalStatus, setmaritalStatus] = useState("");
    const [refusedVisa, setrefusedVisa] = useState("");
    const [refusedVisaReason, setrefusedVisaReason] = useState("");

    const [address, setaddress] = useState("");
    const [country, setcountry] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [zipcode, setzipcode] = useState("");

    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");

    const [highestEducation, sethighestEducation] = useState("");
    const [gradePercentage, setgradePercentage] = useState("");
    const [passingYear, setpassingYear] = useState("");

    const [examType, setexamType] = useState("");
    const [examinationDate, setexaminationDate] = useState("");
    const [overall, setoverall] = useState("");
    const [listening, setlistening] = useState("");
    const [reading, setreading] = useState("");
    const [writing, setwriting] = useState("");
    const [speaking, setspeaking] = useState("");


    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);

            var user_email = mydata.data.student.email;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)
        var myurl = process.env.REACT_APP_SERVER_URL;
    }, [])
    function agentAddStudent(event) {
        event.preventDefault();
        const obj = {


        };

        var objRegister = {
            firstName: firstName,
            phone: phone,
            email: email,
        }
        const obj1 = new FormData();
        obj1.append("name", firstName);
        obj1.append("phone", phone);
        obj1.append("email", email);
        const obj2 = new FormData();
        obj2.append("firstName", firstName);
        obj2.append("dateOfBirth", dateOfBirth);
        obj2.append("countryOfBirth", countryOfBirth);
        obj2.append("passportNo", passportNo);
        obj2.append("gender", gender);
        obj2.append("maritalStatus", maritalStatus);
        obj2.append("refusedVisa", refusedVisa);
        obj2.append("refusedVisaReason", refusedVisaReason);
        const obj3 = new FormData();
        obj3.append("address", address);
        obj3.append("country", country);
        obj3.append("state", state);
        obj3.append("city", city);
        obj3.append("zipcode", zipcode);
        const obj4 = new FormData();
        obj4.append("highestEducation", highestEducation);
        obj4.append("gradePercentage", gradePercentage);
        obj4.append("passingYear", passingYear);
        const obj5 = new FormData();
        obj5.append("examType", examType);
        obj5.append("examinationDate", examinationDate);
        obj5.append("overall", overall);
        obj5.append("listening", listening);
        obj5.append("reading", reading);
        obj5.append("writing", writing);
        obj5.append("speaking", speaking);
        const url = process.env.REACT_APP_SERVER_URL + 'agent/students/register';
        fetch(url, {
            method: 'post',
            headers: { 'Authorization': mounted },
            body: obj1
        })


            .then(response => response.json())
            .then(data => {
                setStudentId(data.id)
                var student_id = data.id;

                const url2 = process.env.REACT_APP_SERVER_URL + 'agent/students/' +
                    student_id + '/personalInformation';
                fetch(url2, {
                    method: 'put',
                    headers: { 'Authorization': mounted },
                    body: obj2
                })
                    .then(response => response.json())
                    .then(data => {

                    })

                const url3 = process.env.REACT_APP_SERVER_URL + 'agent/students/' +
                    student_id + '/address';
                fetch(url3, {
                    method: 'put',
                    headers: { 'Authorization': mounted },
                    body: obj3
                })
                    .then(response => response.json())
                    .then(data => {

                    })

                const url4 = process.env.REACT_APP_SERVER_URL + 'agent/students/' +
                    student_id + '/education';
                fetch(url4, {
                    method: 'put',
                    headers: { 'Authorization': mounted },
                    body: obj4
                })
                    .then(response => response.json())
                    .then(data => {

                    })

                const url5 = process.env.REACT_APP_SERVER_URL + 'agent/students/' +
                    student_id + '/score';
                fetch(url5, {
                    method: 'put',
                    headers: { 'Authorization': mounted },
                    body: obj5
                })
                    .then(response => response.json())
                    .then(data => {

                    })


            })

    }
    return (
        <div className="container">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Add Student</h1>
            </div>
            {/* Content Row */}
            <form onSubmit={agentAddStudent}>
                <div className="row">
                    {/* Area Chart */}
                    <div className="col-xl-12 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="top-bar">
                                <ul>
                                    <li className="f-done"><a href="#gen-info"><span><i className="fas fa-check-circle" /></span>General Information</a></li>
                                    <li><a href="#edu"><span><i className="fas fa-check-circle" /></span>Education</a></li>
                                    <li><a href="#testscore"><span><i className="fas fa-check-circle" /></span>Test Scores</a></li>
                                    <li><a href="#back-info"><span><i className="fas fa-check-circle" /></span>Background Information</a></li>
                                    <li><a href="#ap-pro"><span><i className="fas fa-check-circle" /></span>Application</a></li>
                                    <li><a href="#doc-block"><span><i className="fas fa-check-circle" /></span>Upload Documents</a></li>
                                </ul>
                            </div>
                            {/* Card Header - Dropdown */}
                            <div className="card shadow mb-4">
                                <div id="accordion">
                                    <div className="card add-studdent">
                                        <div className="card-body">
                                            <div className="gernal-info" id="gen-info">
                                                <a className="card-header" href="#collapseOne">
                                                    General Information
                                                </a>
                                                <div className="row mt-5">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Student Name</label>
                                                        <input
                                                            value={firstName}
                                                            onChange={(e) => setfirstName(e.target.value)}
                                                            type="text" name="st-name" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Date of Birth</label>
                                                        <input
                                                            value={dateOfBirth}
                                                            onChange={(e) => setdateOfBirth(e.target.value)}
                                                            type="text" name="st-name" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Country of Citizenship</label>
                                                        <select
                                                            value={countryOfBirth}
                                                            onChange={(e) => setcountryOfBirth(e.target.value)}
                                                            className="form-select ">
                                                            <option selected>USA</option>
                                                            <option>UK</option>
                                                            <option>Canda</option>
                                                            <option>Austrilia</option>
                                                            <option>USA</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Passport Number</label>
                                                        <input
                                                            value={passportNo}
                                                            onChange={(e) => setpassportNo(e.target.value)}
                                                            type="text" className="form-control" placeholder name="passport-no" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label">Gender <span> *</span></label>
                                                        <br /><label className="ant-radio-wrapper ant-radio-wrapper-checked">
                                                            <span className="ant-radio ant-radio-checked">
                                                                <input
                                                                    value={gender}
                                                                    onChange={(e) => setgender(e.target.value)}
                                                                    name="reference_type_0" type="radio" className="ant-radio-input" defaultValue="Professional" defaultChecked />
                                                                <span className="ant-radio-inner" /></span><span>Male</span></label>
                                                        <label className="ant-radio-wrapper">
                                                            <span className="ant-radio">
                                                                <input
                                                                    value={maritalStatus}
                                                                    onChange={(e) => setmaritalStatus(e.target.value)}
                                                                    name="reference_type_0" type="radio" className="ant-radio-input" defaultValue="Academic" />
                                                                <span className="ant-radio-inner" /></span><span>Female</span></label>
                                                        <br />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label">Marital Status <span> *</span></label>
                                                        <br /><label className="ant-radio-wrapper ant-radio-wrapper-checked">
                                                            <span className="ant-radio ant-radio-checked">
                                                                <input
                                                                    value={refusedVisa}
                                                                    onChange={(e) => setrefusedVisa(e.target.value)}
                                                                    name="reference_type_0" type="radio" className="ant-radio-input" defaultValue="Professional" defaultChecked />
                                                                <span className="ant-radio-inner" /></span><span>Married</span></label>
                                                        <label className="ant-radio-wrapper">
                                                            <span className="ant-radio">
                                                                <input
                                                                    value={refusedVisaReason}
                                                                    onChange={(e) => setrefusedVisaReason(e.target.value)}
                                                                    name="reference_type_0" type="radio" className="ant-radio-input" defaultValue="Academic" />
                                                                <span className="ant-radio-inner" /></span><span>UnMarried</span></label>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-8">
                                                        <label className="form-label"><span>*</span>Address</label>
                                                        <input
                                                            value={address}
                                                            onChange={(e) => setaddress(e.target.value)}
                                                            type="text" className="form-control" placeholder name="address" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Country</label>
                                                        <select
                                                            value={country}
                                                            onChange={(e) => setcountry(e.target.value)}
                                                            className="form-select ">
                                                            <option selected />
                                                            <option>India</option>
                                                            <option>Afghanistan</option>
                                                            <option>Albania</option>
                                                            <option>Algeria</option>
                                                            <option>American Samoa</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>State</label>
                                                        <select
                                                            value={state}
                                                            onChange={(e) => setstate(e.target.value)}
                                                            className="form-select ">
                                                            <option selected />
                                                            <option>Haryana</option>
                                                            <option>Punjab</option>
                                                            <option>Arunachal Pradesh</option>
                                                            <option>Assam</option>
                                                            <option>Bihar</option>
                                                            <option>Chhattisgarh</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label">City/Town <span> *</span></label>
                                                        <select
                                                            value={city}
                                                            onChange={(e) => setcity(e.target.value)}
                                                            className="form-control" name="city" required>
                                                            <option value>Select State</option>
                                                            <option value>Please select a state to view cities
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Postal/Zip Code</label>
                                                        <input
                                                            value={zipcode}
                                                            onChange={(e) => setzipcode(e.target.value)}
                                                            type="text" className="form-control" placeholder name="passing" />
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Email</label>
                                                        <input
                                                            value={email}
                                                            onChange={(e) => setemail(e.target.value)}
                                                            type="text" className="form-control" placeholder name="email" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Country Code</label>
                                                        <select

                                                            className="form-control" name="city" required>
                                                            <option value>Select State</option>
                                                            <option value>+91</option>
                                                            <option>93</option>
                                                            <option>355</option>
                                                            <option>213</option>
                                                            <option>43</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Phone No</label>
                                                        <input
                                                            value={phone}
                                                            onChange={(e) => setphone(e.target.value)}
                                                            type="text" className="form-control" placeholder name="phone" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="eduction" id="edu">
                                                <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                    Education
                                                </a>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Qualification</label>
                                                        <input
                                                            value={highestEducation}
                                                            onChange={(e) => sethighestEducation(e.target.value)}
                                                            type="text" name="quali" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Passing Year</label>
                                                        <input
                                                            value={passingYear}
                                                            onChange={(e) => setpassingYear(e.target.value)}
                                                            type="text" name="pas-year" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Percentage</label>
                                                        <input
                                                            value={gradePercentage}
                                                            onChange={(e) => setgradePercentage(e.target.value)}
                                                            type="text" name="percent" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="test-score" id="testscore">
                                                <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                    Test Score
                                                </a>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>English Exam Type</label>
                                                        <select
                                                            value={examType}
                                                            onChange={(e) => setexamType(e.target.value)}
                                                            className="form-select ">
                                                            <option selected>IELTS</option>
                                                            <option>PTE</option>
                                                            <option>ViSA</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Examination Date</label>
                                                        <input
                                                            value={examinationDate}
                                                            onChange={(e) => setexaminationDate(e.target.value)}
                                                            type="date" name="exam-date" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Overall</label>
                                                        <input
                                                            value={overall}
                                                            onChange={(e) => setoverall(e.target.value)}
                                                            type="text" name="overall" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <label className="form-label"><span>*</span>Listening</label>
                                                        <input
                                                            value={listening}
                                                            onChange={(e) => setlistening(e.target.value)}
                                                            type="text" name="listening" className="form-control" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="form-label"><span>*</span>Reading</label>
                                                        <input
                                                            value={reading}
                                                            onChange={(e) => setreading(e.target.value)}
                                                            type="text" name="Reading" className="form-control" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="form-label"><span>*</span>Writing</label>
                                                        <input
                                                            value={writing}
                                                            onChange={(e) => setwriting(e.target.value)}
                                                            type="text" name="Writing" className="form-control" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label className="form-label"><span>*</span>Speaking</label>
                                                        <input
                                                            value={speaking}
                                                            onChange={(e) => setspeaking(e.target.value)}
                                                            type="text" name="Writing" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="back-information" id="back-info">
                                                <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                    Background Information
                                                </a>
                                                <div className="row mt-3">
                                                    <div className="col-md-8">
                                                        <label className="form-label">Have you been refused a visa from Canada, USA, the United Kingdom, New Zealand or Austrilia? <span> *</span></label>
                                                        <br /><label className="ant-radio-wrapper ant-radio-wrapper-checked">
                                                            <span className="ant-radio ant-radio-checked">
                                                                <input
                                                                    value={firstName}
                                                                    onChange={(e) => setfirstName(e.target.value)}
                                                                    name="reference_type_0" type="radio" className="ant-radio-input" defaultValue="Professional" defaultChecked />
                                                                <span className="ant-radio-inner" /></span><span>Yes</span></label>
                                                        <label className="ant-radio-wrapper">
                                                            <span className="ant-radio">
                                                                <input
                                                                    value={firstName}
                                                                    onChange={(e) => setfirstName(e.target.value)}
                                                                    name="reference_type_0" type="radio" className="ant-radio-input" defaultValue="Academic" />
                                                                <span className="ant-radio-inner" /></span><span>NO</span></label>
                                                        <br />
                                                    </div>
                                                </div>
                                                <div className="col-md-4" />
                                                <div className="row mt-2">
                                                    <div className="col-md-8">
                                                        <label className="form-label">If you answered "yes" to any of the following question above, please Provide more details below</label>
                                                        <input
                                                            value={firstName}
                                                            onChange={(e) => setfirstName(e.target.value)}
                                                            type="text" name="percent" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="application-process" id="ap-pro">
                                                <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                    Apply For Any Application
                                                </a>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Country*</label>
                                                            <select
                                                                value={firstName}
                                                                onChange={(e) => setfirstName(e.target.value)}
                                                                className="form-control" name="country" required>
                                                                <option value>Select Country</option>
                                                                <option value={101}>India</option>
                                                                <option value={1}>Afghanistan</option>
                                                                <option value={2}>Albania</option>
                                                                <option value={3}>Algeria</option>
                                                                <option value={4}>American Samoa</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Universities</label>
                                                        <select
                                                            value={firstName}
                                                            onChange={(e) => setfirstName(e.target.value)}
                                                            className="form-select ">
                                                            <option selected />
                                                            <option>University of Cambridge Estd. ...</option>
                                                            <option>University of Oxford Estd. ..</option>
                                                            <option>Harvard University Estd. ..</option>
                                                            <option>Stanford University Estd. ..</option>
                                                            <option>California Institute of Technology Estd. ..</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Coures</label>
                                                        <select
                                                            value={firstName}
                                                            onChange={(e) => setfirstName(e.target.value)}
                                                            className="form-select ">
                                                            <option selected />
                                                            <option>Engineering.</option>
                                                            <option>Computer Science. ...</option>
                                                            <option>Information Technology. </option>
                                                            <option>Business Administration. ...</option>
                                                            <option>Social Sciences. .</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Campus</label>
                                                        <select
                                                            value={firstName}
                                                            onChange={(e) => setfirstName(e.target.value)}
                                                            className="form-select ">
                                                            <option selected />
                                                            <option>Campus 1</option>
                                                            <option>Campus 2</option>
                                                            <option>Campus 3</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Intake</label>
                                                        <input
                                                            value={firstName}
                                                            onChange={(e) => setfirstName(e.target.value)}
                                                            type="text" name="intake" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="documents-block" id="doc-block">
                                                <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                    Documents
                                                </a>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Passport Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>IELTS Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>10th Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>12th Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Bachelor DMC Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Backlog Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Degree Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Experience Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Medium of instruction Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Letter of recommendation Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label"><span>*</span>Other Documents</label>
                                                        <input type="file" name="pas-doc" className="form-control" />
                                                    </div>
                                                    <div className="col-md-4">
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-6">
                                                    </div>
                                                    <div className="col-md-6 text-right">
                                                        <button type="submit" className="btn btn-success">Save
                                                        </button>
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
            </form>
            {/* Card Body */}
        </div>
    );
}

export default AddStudent;