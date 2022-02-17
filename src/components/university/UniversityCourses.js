import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SweetAlert from 'react-bootstrap-sweetalert';
import Footer from './Footer';
const UniversityCourses = () => {
    const [courseName, setcourseName] = useState("");
    const [duration, setduration] = useState("");
    const [tuitionFee, settuitionFee] = useState("");
    const [studyField, setstudyField] = useState("");
    const [fee, setfee] = useState("");
    const [courseLevel, setcourseLevel] = useState("");
    const [cgpa, setcgpa] = useState("");
    const [eligibility, seteligibility] = useState("");
    const [english, setenglish] = useState("");
    const [website, setwebsite] = useState("");
    const [description, setdescription] = useState("");
    const [exam, setexam] = useState("");
    const [courseId, setcourseId] = useState("");

    const [width, setwidth] = useState("");
    const [viewWidth, setviewWidth] = useState("");
    const [addWidth, setaddWidth] = useState("");
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [Intakedata, setIntakedata] = useState([]);


    const [editId, seteditId] = useState([]);
    const [universityId, setuniversityId] = useState([]);
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [successIntakeMessage, setsuccessIntakeMessage] = useState("0");


    const [year, setyear] = useState("");
    const [month, setmonth] = useState("0");
    const [createIntake, setcreateIntake] = useState("0");

    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [deleteId, setdeleteId] = useState("");

    const [intakeyear, setintakeyear] = useState("2022");
    const [intakemonth, setintakemonth] = useState("jan");
    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);

            var user_email = mydata.data.university.email;
            var universityId = mydata.data.university._id;

            var mounted = mydata.data.token;
        }
        setMounted(mounted)
        setuniversityId(universityId)

        //start for year


        // var ddlYears = document.getElementById("myyear");
        var ddlYearsEdit = document.getElementById("myyearEdit");


        // //Determine the Current Year.
        var currentYear = (new Date()).getFullYear();
        // for (var i = currentYear; i < 2027; i++) {

        //     var option = document.createElement("OPTION");
        //     option.innerHTML = i;
        //     option.value = i;
        //     ddlYears.appendChild(option);
        // }
        for (var i = currentYear; i < 2027; i++) {

            var option = document.createElement("OPTION");
            option.innerHTML = i;
            option.value = i;
            ddlYearsEdit.appendChild(option);
        }
        //end for year

        //start for fetching course
        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setdata(data.universityCourses)
            })
        // end for fetching course

        //start for fetching intake
        const url2 = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/intakes';
        fetch(url2, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                var myresults = data.universityIntakes
                if (Object.keys(myresults).length === 0) {

                }
                else {
                    setIntakedata(data.universityIntakes)
                    setcreateIntake("1")
                }

            })
        // end for fetching intake


    }, [])
    let handleIntakeSubmit = (event) => {

        event.preventDefault();

        const obj = {
            year: intakeyear,
            month: intakemonth,

        };
        axios.post(process.env.REACT_APP_SERVER_URL + 'university/intakes/', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {

                    setsuccessIntakeMessage("Intake add")
                    setTimeout(() => setsuccessIntakeMessage(""), 3000);
                    setsuccessIntakeMessage(1)

                    setyear("");
                    setmonth("");

                    //start for fetching course
                    const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/intakes';
                    fetch(url, {
                        method: 'GET',
                        headers: { 'Authorization': mounted }
                    })
                        .then(response => response.json())
                        .then(data => {
                            setIntakedata(data.universityIntakes)
                            setcreateIntake("1")
                        })
                    // end for fetching course
                }
                else {

                }
            })
            .catch(error => {

            });
    }
    function handleClick(value) {


        seteditId(value);
        setwidth("1600px");
        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses/' + value, { headers: { 'Authorization': mounted } })
            .then(function (res) {


                var myuniversityCourse = res.data.universityCourse;
                if (res.data.success === true) {


                    setcourseName(myuniversityCourse.courseName);
                    settuitionFee(myuniversityCourse.tuitionFee);
                    setstudyField(myuniversityCourse.studyField);
                    setfee(myuniversityCourse.fee);
                    setcourseLevel(myuniversityCourse.courseLevel);
                    setcgpa(myuniversityCourse.cgpa);
                    seteligibility(myuniversityCourse.eligibility);
                    setenglish(myuniversityCourse.english);
                    setwebsite(myuniversityCourse.website);
                    setdescription(myuniversityCourse.description);
                    setexam(myuniversityCourse.exam);
                    setyear(myuniversityCourse.year);
                    setmonth(myuniversityCourse.month);


                }
                else {

                }

            })
            .catch(error => {

            });

    }
    function handleAdd() {
        setaddWidth("1600px");
    }
    //start for delete

    function handleDelete(value) {

        setshowSweetAlert("1")
        setdeleteId(value)
    }
    //end for delete 
    //start for view

    function handleView(value) {


        seteditId(value);
        setviewWidth("1600px");
        // axios.get('/university/courses/' + value, { headers: { 'Authorization': mounted } })
        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses/' + value, { headers: { 'Authorization': mounted } })

            .then(function (res) {


                var myuniversityCourse = res.data.universityCourse;
                if (res.data.success === true) {

                    setcourseId(myuniversityCourse._id);
                    setcourseName(myuniversityCourse.courseName);
                    setduration(myuniversityCourse.duration);

                    settuitionFee(myuniversityCourse.tuitionFee);
                    setstudyField(myuniversityCourse.studyField);
                    setfee(myuniversityCourse.fee);
                    setcourseLevel(myuniversityCourse.courseLevel);
                    setcgpa(myuniversityCourse.cgpa);
                    seteligibility(myuniversityCourse.eligibility);
                    setenglish(myuniversityCourse.english);
                    setwebsite(myuniversityCourse.website);
                    setdescription(myuniversityCourse.description);
                    setexam(myuniversityCourse.exam);
                    setyear(myuniversityCourse.year);
                    setmonth(myuniversityCourse.month);

                }
                else {

                }

            })
            .catch(error => {

            });

    }
    //end for view

    function closebox(value) {
        setwidth("0px");

    }
    function closeviewbox(value) {

        setviewWidth("0px");
    }
    function closeaddbox(value) {

        setaddWidth("0px");
    }

    //END FOR


    let handleEditSubmit = (event) => {
        event.preventDefault();
        const obj = {
            courseName: courseName,
            duration: duration,
            tuitionFee: tuitionFee,
            studyField: studyField,
            fee: fee,
            courseLevel: courseLevel,
            cgpa: cgpa,
            eligibility: eligibility,
            english: english,
            website: website,
            description: description,
            exam: exam,
            year: year,
            month: month
        };
        axios.put(process.env.REACT_APP_SERVER_URL + 'university/courses/' + editId, obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    setwidth(0)
                    setsuccessMessage("course update")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                    //start for fetching course
                    const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
                    fetch(url, {
                        method: 'GET',
                        headers: { 'Authorization': mounted }
                    })
                        .then(response => response.json())
                        .then(data => {
                            setdata(data.universityCourses)
                        })
                    // end for fetching course
                }
                else {

                }
            })
            .catch(error => {

            });
    }
    let handleAddSubmit = (event) => {
        event.preventDefault();
        const obj = {
            courseName: courseName,
            duration: duration,
            tuitionFee: tuitionFee,
            studyField: studyField,
            fee: fee,
            courseLevel: courseLevel,
            cgpa: cgpa,
            eligibility: eligibility,
            english: english,
            website: website,
            description: description,
            exam: exam,
            year: year,
            month: month
        };
        axios.post(process.env.REACT_APP_SERVER_URL + 'university/courses/', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    setsuccessMessage("course add")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                    setaddWidth(0)
                    setcourseName("");
                    settuitionFee("");
                    setstudyField("");
                    setfee("");
                    setcourseLevel("");
                    setcgpa("");
                    seteligibility("");
                    setenglish("");
                    setwebsite("");
                    setdescription("");
                    setexam("");
                    setyear("");
                    setmonth("");
                    //start for fetching course
                    const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
                    fetch(url, {
                        method: 'GET',
                        headers: { 'Authorization': mounted }
                    })
                        .then(response => response.json())
                        .then(data => {
                            setdata(data.universityCourses)
                        })
                    // end for fetching course
                }
                else {

                }
            })
            .catch(error => {

            });
    }
    function setintake(value) {
        const myArray = value.split("&&");
        setyear(myArray[0])
        setmonth(myArray[1])

    }
    return (
        <div id="page-top">

            {/* <button onClick={addStudent}>Add Another Student</button> */}

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
                            {/* start for showing add message */}
                            {submitSuccess === 1 ? <div className="Show_success_message">
                                <strong>Success!</strong> {successMessage}
                            </div> : null}
                            {/* start for showing add message */}
                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Coures</h1>
                                {showSweetAlert === "1" ? <SweetAlert
                                    warning
                                    showCancel
                                    confirmBtnText="Yes, delete it!"
                                    confirmBtnBsStyle="danger"

                                    title="Are you sure?"
                                    onConfirm={(value) => {
                                        setshowSweetAlert("0");
                                        axios.delete(process.env.REACT_APP_SERVER_URL + 'university/courses/' + deleteId, { headers: { 'Authorization': mounted } })
                                            .then(function (res) {
                                                var myuniversityCourse = res.data.universityCourse;
                                                if (res.data.success === true) {
                                                    setsuccessMessage("course delete")
                                                    setTimeout(() => setsubmitSuccess(""), 3000);
                                                    setsubmitSuccess(1)
                                                    //start for fetching course
                                                    const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
                                                    fetch(url, {
                                                        method: 'GET',
                                                        headers: { 'Authorization': mounted }
                                                    })
                                                        .then(response => response.json())
                                                        .then(data => {
                                                            setdata(data.universityCourses)
                                                        })
                                                    // end for fetching course
                                                }
                                                else {

                                                }

                                            })
                                            .catch(error => {

                                            });


                                    }}
                                    onCancel={() =>
                                        setshowSweetAlert("0")

                                    }
                                    focusCancelBtn
                                >

                                </SweetAlert>
                                    : null
                                }
                                <button type="button" onClick={() => handleAdd()} className="btn btn-outline-success"><span><i className="fas fa-plus"></i></span>Add New Course</button>

                            </div>


                            {/* <!-- Content Row --> */}

                            <div className="row">

                                {/* <!-- Area Chart --> */}
                                <div className="col-xl-12 col-lg-7">
                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div className="card shadow mb-4">
                                            <div className="table-responsive-sm">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Course Name</th>
                                                            <th>Duration</th>
                                                            <th>Fee</th>
                                                            <th>Action</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>




                                                        {data.map((object, i) => {

                                                            return (

                                                                <tr key={i}>
                                                                    <td>{object._id}</td>
                                                                    <td>{object.courseName}</td>
                                                                    <td>{object.duration}</td>
                                                                    <td>{object.tuitionFee}</td>
                                                                    <td>

                                                                        <button className="btn" onClick={() => handleDelete(object._id)}><i className="fas fa-trash-alt"></i></button>
                                                                        <button className="btn" onClick={() => handleClick(object._id)}><i className="fas fa-pen "></i></button>
                                                                        <button className="btn" onClick={() => handleView(object._id)}><i className="fas fa-eye"></i></button>
                                                                    </td>
                                                                </tr>

                                                            )
                                                        })}
                                                    </tbody>


                                                </table>
                                            </div>
                                        </div>


                                        <div className="card-body course-sidenav" id="mySidenav"
                                            style={{ width: width }}
                                        >

                                            <div className="student-view">
                                                <div className="row">
                                                    <div className="col-md-6">

                                                    </div>
                                                    <div className="col-md-6">
                                                        <a className="closebtn" onClick={closebox} >&times;</a>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">

                                                </div>
                                                <div className="table-responsive mt-5">

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <p><b>Edit Course</b></p>
                                                            <form onSubmit={handleEditSubmit}>
                                                                <div className="card-body" >

                                                                    <div className="from-block" >



                                                                        <div className="row" >
                                                                            <div className="mb-3">
                                                                                <div className="row">
                                                                                    <div className="col">
                                                                                        <label className="form-label">Course name
                                                                                            *</label>
                                                                                        <input type="text" className="form-control"
                                                                                            placeholder="Course name" name="courseName"
                                                                                            // value="fhgfh"
                                                                                            value={courseName}
                                                                                            onChange={(e) => setcourseName(e.target.value)}

                                                                                        />
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <label className="form-label">Duration
                                                                                        </label>
                                                                                        <input type="text" className="form-control"
                                                                                            placeholder="duration" name="duration"
                                                                                            value={duration}
                                                                                            onChange={(e) => setduration(e.target.value)}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <label className="form-label">Tuition fee</label>
                                                                                        <input type="text" className="form-control" placeholder="tuition fee"
                                                                                            name="tuitionFee"
                                                                                            value={tuitionFee}
                                                                                            onChange={(e) => settuitionFee(e.target.value)}


                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="mb-3">
                                                                                <div className="row">
                                                                                    <div className="col-md-4">
                                                                                        <label className="form-label">Study
                                                                                            *</label>
                                                                                        <select type="text" className="form-control" id="salutation"
                                                                                            placeholder="Salutation" name="studyField"

                                                                                            value={studyField}
                                                                                            onChange={(e) => setstudyField(e.target.value)}
                                                                                        >
                                                                                            <option >Machine Learning</option>
                                                                                            <option value="Ms.">Indigenous Canada</option>
                                                                                            <option value="Mr.">The Science of Well-Being</option>
                                                                                            <option value="Mrs.">Introduction to Statistics</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div className="col-md-8">
                                                                                        <div className="row">
                                                                                            <div className="col">
                                                                                                <label className="form-label">fee</label>
                                                                                                <input type="text" className="form-control" placeholder="fee"
                                                                                                    name="fee"
                                                                                                    value={fee}
                                                                                                    onChange={(e) => setfee(e.target.value)}


                                                                                                />
                                                                                            </div>
                                                                                            <div className="col">
                                                                                                <label className="form-label"> course level</label>
                                                                                                <input type="text" className="form-control" placeholder=" course level"
                                                                                                    name=" courseLevel"
                                                                                                    value={courseLevel}
                                                                                                    onChange={(e) => setcourseLevel(e.target.value)}


                                                                                                />
                                                                                            </div>
                                                                                            <div className="col">
                                                                                                <label className="form-label"> Cgpa </label>
                                                                                                <input type="text" className="form-control" placeholder=" Cumulative Grade Point Average "
                                                                                                    name="cgpa"
                                                                                                    value={cgpa}
                                                                                                    onChange={(e) => setcgpa(e.target.value)}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="col">
                                                                                                <label className="form-label"> Eligibilit </label>
                                                                                                <input type="text" className="form-control" placeholder=" eligibility(like min 55%)"
                                                                                                    name=" eligibility"
                                                                                                    value={eligibility}
                                                                                                    onChange={(e) => seteligibility(e.target.value)}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="mb-3">
                                                                                <div className="row">
                                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                        <div className="form-group"><label >English Proficiency
                                                                                        </label><input type="text" className="form-control"
                                                                                            id="eng-pro" name="english" placeholder="English Proficiency"
                                                                                            value={english}
                                                                                            onChange={(e) => setenglish(e.target.value)}


                                                                                            /></div>
                                                                                    </div>
                                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                        <div className="form-group">
                                                                                            <label>Course website </label><input
                                                                                                type="text" className="form-control" id="cour-web"
                                                                                                name="website" placeholder="Course website "
                                                                                                value={website}
                                                                                                onChange={(e) => setwebsite(e.target.value)}


                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <div className="row">
                                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                        <div className="form-group">
                                                                                            <label>Course  Description</label>
                                                                                            <textarea className="form-control" row="2" col="3" name="description"
                                                                                                value={description}
                                                                                                onChange={(e) => setdescription(e.target.value)}
                                                                                            ></textarea>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                        <div className="form-group"><label
                                                                                        >Academic proficiency exam</label><select
                                                                                            className="form-control dropdown"
                                                                                            id="highest_qualification"
                                                                                            name="exam"
                                                                                            value={exam}
                                                                                            onChange={(e) => setexam(e.target.value)}


                                                                                        >
                                                                                                <option >GRE</option>
                                                                                                <option value="Diploma">GMAT</option>
                                                                                                <option value="Secondary">SAT</option>

                                                                                            </select></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        {/* start for intake */}
                                                                        <div className="mb-3">
                                                                            <div className="row">
                                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                    Intakes

                                                                                    <select
                                                                                        type="text" className="form-control"
                                                                                        required
                                                                                        onChange={(e) => setintake(e.target.value)}>
                                                                                        {Intakedata.map((object, i) => {

                                                                                            return (
                                                                                                <option value={object.year + "&&" + object.month}>{object.year + " " + object.month}</option>
                                                                                            )
                                                                                        })}

                                                                                    </select>

                                                                                </div>

                                                                            </div>
                                                                        </div>

                                                                        {/* end for intake */}
                                                                        <div className="mb-3">
                                                                            <div className="row">
                                                                                <div className="col-md-6"></div>
                                                                                <div className="col-md-6 text-right">



                                                                                    <button type="submit" className="btn btn-secondary">Save
                                                                                    </button>

                                                                                </div>

                                                                            </div>

                                                                        </div>



                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body course-sidenav" id="mySideAdd"
                                            style={{ width: addWidth }}
                                        >

                                            <div className="student-view">
                                                <div className="row">
                                                    <div className="col-md-6">

                                                    </div>
                                                    <div className="col-md-6">
                                                        <a className="closebtn" onClick={closeaddbox} >&times;</a>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">

                                                </div>
                                                <div className="table-responsive mt-5">

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            {successIntakeMessage === 1 ? <div className="Show_success_message">
                                                                <strong>Success!</strong> Intake Added
                                                            </div> : null}
                                                            <form onSubmit={handleAddSubmit}>
                                                                <div className="card-body" >

                                                                    <div className="from-block" >


                                                                        <h6>Add Course</h6>

                                                                        <div className="row" >
                                                                            <div className="mb-3">
                                                                                <div className="row">
                                                                                    <div className="col">
                                                                                        <label className="form-label">Course name
                                                                                            *</label>
                                                                                        <input type="text" className="form-control"
                                                                                            placeholder="Course name" name="courseName"
                                                                                            // value="fhgfh"
                                                                                            value={courseName}
                                                                                            onChange={(e) => setcourseName(e.target.value)}

                                                                                        />
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <label className="form-label">Duration
                                                                                        </label>
                                                                                        <input type="text" className="form-control"
                                                                                            placeholder="duration" name="duration"
                                                                                            value={duration}
                                                                                            onChange={(e) => setduration(e.target.value)}
                                                                                        />
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <label className="form-label">Tuition fee</label>
                                                                                        <input type="text" className="form-control" placeholder="tuition fee"
                                                                                            name="tuitionFee"
                                                                                            value={tuitionFee}
                                                                                            onChange={(e) => settuitionFee(e.target.value)}


                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="mb-3">
                                                                                <div className="row">
                                                                                    <div className="col-md-4">
                                                                                        <label className="form-label">Study
                                                                                            *</label>
                                                                                        <select type="text" className="form-control" id="salutation"
                                                                                            placeholder="Salutation" name="studyField"

                                                                                            value={studyField}
                                                                                            onChange={(e) => setstudyField(e.target.value)}
                                                                                        >
                                                                                            <option >Machine Learning</option>
                                                                                            <option value="Ms.">Indigenous Canada</option>
                                                                                            <option value="Mr.">The Science of Well-Being</option>
                                                                                            <option value="Mrs.">Introduction to Statistics</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div className="col-md-8">
                                                                                        <div className="row">
                                                                                            <div className="col">
                                                                                                <label className="form-label">fee</label>
                                                                                                <input type="text" className="form-control" placeholder="fee"
                                                                                                    name="fee"
                                                                                                    value={fee}
                                                                                                    onChange={(e) => setfee(e.target.value)}


                                                                                                />
                                                                                            </div>
                                                                                            <div className="col">
                                                                                                <label className="form-label"> course level</label>
                                                                                                <input type="text" className="form-control" placeholder=" course level"
                                                                                                    name=" courseLevel"
                                                                                                    value={courseLevel}
                                                                                                    onChange={(e) => setcourseLevel(e.target.value)}


                                                                                                />
                                                                                            </div>
                                                                                            <div className="col">
                                                                                                <label className="form-label"> Cgpa </label>
                                                                                                <input type="text" className="form-control" placeholder=" Cumulative Grade Point Average "
                                                                                                    name="cgpa"
                                                                                                    value={cgpa}
                                                                                                    onChange={(e) => setcgpa(e.target.value)}
                                                                                                />
                                                                                            </div>
                                                                                            <div className="col">
                                                                                                <label className="form-label"> Eligibilit </label>
                                                                                                <input type="text" className="form-control" placeholder=" eligibility(like min 55%)"
                                                                                                    name=" eligibility"
                                                                                                    value={eligibility}
                                                                                                    onChange={(e) => seteligibility(e.target.value)}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="mb-3">
                                                                                <div className="row">
                                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                        <div className="form-group"><label >English Proficiency
                                                                                        </label><input type="text" className="form-control"
                                                                                            id="eng-pro" name="english" placeholder="English Proficiency"
                                                                                            value={english}
                                                                                            onChange={(e) => setenglish(e.target.value)}


                                                                                            /></div>
                                                                                    </div>
                                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                        <div className="form-group">
                                                                                            <label>Course website </label><input
                                                                                                type="text" className="form-control" id="cour-web"
                                                                                                name="website" placeholder="Course website "
                                                                                                value={website}
                                                                                                onChange={(e) => setwebsite(e.target.value)}


                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <div className="row">
                                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                        <div className="form-group">
                                                                                            <label>Course  Description</label>
                                                                                            <textarea className="form-control" row="2" col="3" name="description"
                                                                                                value={description}
                                                                                                onChange={(e) => setdescription(e.target.value)}
                                                                                            ></textarea>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                        <div className="form-group"><label
                                                                                        >Academic proficiency exam</label><select
                                                                                            className="form-control dropdown"
                                                                                            id="highest_qualification"
                                                                                            name="exam"
                                                                                            value={exam}
                                                                                            onChange={(e) => setexam(e.target.value)}


                                                                                        >
                                                                                                <option >GRE</option>
                                                                                                <option value="Diploma">GMAT</option>
                                                                                                <option value="Secondary">SAT</option>

                                                                                            </select></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mb-3">
                                                                                <div className="row">
                                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">

                                                                                        <b>{createIntake == "1" ? '' :

                                                                                            <button data-bs-toggle="modal" data-bs-target="#myModal" type="button" className="btn btn-outline-success">

                                                                                                Add Intake</button>



                                                                                        }</b>
                                                                                        <br />
                                                                                        Intakes
                                                                                        <select
                                                                                            type="text" className="form-control"
                                                                                            required
                                                                                            onChange={(e) => setintake(e.target.value)}>
                                                                                            {Intakedata.map((object, i) => {

                                                                                                return (
                                                                                                    <option value={object.year + "&&" + object.month}>{object.year + " " + object.month}</option>
                                                                                                )
                                                                                            })}

                                                                                        </select>

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                        <div className="mb-3">
                                                                            <div className="row">
                                                                                <div className="col-md-6"></div>
                                                                                <div className="col-md-6 text-right">



                                                                                    <button type="submit" className="btn btn-secondary">Save
                                                                                    </button>

                                                                                </div>

                                                                            </div>

                                                                        </div>



                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body course-sidenav" id="mySideview"
                                            style={{ width: viewWidth }}
                                        >

                                            <div className="student-view">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h6 className="mt-2 font-weight-bold text-primary"></h6>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a className="closebtn closeviewbox" onClick={closeviewbox} >&times;</a>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-6"></div>
                                                    <div className="col-md-6 text-right"></div>
                                                </div>
                                                <div className="table-responsive mt-5">

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info" >
                                                                <thead>
                                                                    <tr>
                                                                        <th rowSpan="1" colSpan="1">ID</th>
                                                                        <th rowSpan="1" colSpan="1">Course name</th>
                                                                        <th rowSpan="1" colSpan="1">Duration</th>
                                                                        <th rowSpan="1" colSpan="1">Tuition fee</th>
                                                                        <th rowSpan="1" colSpan="1">Study</th>
                                                                        <th rowSpan="1" colSpan="1">Fee</th>
                                                                        <th rowSpan="1" colSpan="1">Course level</th>
                                                                        <th rowSpan="1" colSpan="1">Cgpa</th>
                                                                        <th rowSpan="1" colSpan="1">Eligibilit</th>
                                                                        <th rowSpan="1" colSpan="1">English Proficiency</th>
                                                                        <th rowSpan="1" colSpan="1">Course website</th>
                                                                        <th rowSpan="1" colSpan="1">Course Description</th>
                                                                        <th rowSpan="1" colSpan="1">Academic proficiency exam</th>
                                                                        <th rowSpan="1" colSpan="1">Year</th>
                                                                        <th rowSpan="1" colSpan="1">Month</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="odd">
                                                                        <td className="sorting_1">{courseId}</td>

                                                                        <td>{courseName}</td>
                                                                        <td>{duration}</td>
                                                                        <td>{tuitionFee}</td>
                                                                        <td>{studyField}</td>
                                                                        <td>{fee}</td>
                                                                        <td>{courseLevel}</td>
                                                                        <td>{cgpa}</td>
                                                                        <td>{eligibility}</td>
                                                                        <td>{english}</td>
                                                                        <td>{website}</td>
                                                                        <td>{description}</td>
                                                                        <td>{exam}</td>
                                                                        <td>{year}</td>
                                                                        <td>{month}</td>

                                                                    </tr>




                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>








                                        {/* end for edit */}
                                    </div>
                                </div>


                            </div>
                            {/* <!-- Card Body --> */}

                        </div>
                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}
                    {/* start for popup */}



                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* Modal Header */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Add Intake</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                </div>
                                {/* Modal body */}
                                <form>
                                    <div className="modal-body">

                                        <div className="row">
                                            <div className="col">
                                                <label className="form-label">Year
                                                    *</label>
                                                <select id="myyearEdit"
                                                    className="form-control"
                                                    placeholder="Year" name="year"

                                                    value={intakeyear}
                                                    onChange={(e) => setintakeyear(e.target.value)}>

                                                </select>

                                            </div>
                                            <div className="col">
                                                <label className="form-label">Month
                                                </label>

                                                <select

                                                    className="form-control"
                                                    placeholder="Month" name="Month"
                                                    value={intakemonth}
                                                    onChange={(e) => setintakemonth(e.target.value)}>
                                                    <option value='Jan'>Janaury</option>
                                                    <option value='Feb'>February</option>
                                                    <option value='March'>March</option>
                                                    <option value='April'>April</option>
                                                    <option value='May'>May</option>
                                                    <option value='June'>June</option>
                                                    <option value='July'>July</option>
                                                    <option value='Aug'>August</option>
                                                    <option value='Sep'>September</option>
                                                    <option value='Oct'>October</option>
                                                    <option value='Nov'>November</option>
                                                    <option value='Dec'>December</option>
                                                </select>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={handleIntakeSubmit} type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>


                                    </div>
                                </form>
                                {/* Modal footer */}

                            </div>
                        </div>
                    </div>

                    {/* end for popup */}
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

export default UniversityCourses;
