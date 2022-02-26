import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Loader from '../Home/Loader';



export default function Summary() {
    const [mounted, setMounted] = useState();
    const [campus, setcampus] = useState("");
    const [ugYear, setugYear] = useState("");
    const [pgYear, setpgYear] = useState("");
    const [deposit, setdeposit] = useState("");
    const [graduateScore, setgraduateScore] = useState("");
    const [postGraduateScore, setpostGraduateScore] = useState("");
    const [ugIelts, setugIelts] = useState("");
    const [pgIelts, setpgIelts] = useState("");
    const [ugPTE, setugPTE] = useState("");
    const [pgPTE, setpgPTE] = useState("");
    const [intake, setintake] = useState("");
    const [universityId, setuniversityId] = useState("");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [Intakedata, setIntakedata] = useState([]);
    const [loader, setmyloader] = useState("false");

    const [graduateScoreNoError, setgraduateScoreNoError] = useState("");
    const [postGraduateScoreNoError, setpostGraduateScoreNoError] = useState("");
    const [ugIeltsNoError, setugIeltsNoError] = useState("");
    const [pgIeltsNoError, setpgIeltsNoError] = useState("");
    const [ugPTENoError, setugPTENoError] = useState("");
    const [pgPTENoError, setpgPTENoError] = useState("");
    const [ugYearNoMessage, setugYearNoMessage] = useState("");
    const [pgYearNoMessage, setpgYearNoMessage] = useState("");
    const [pgYearOnlyNoError, setpgYearOnlyNoError] = useState("");
    const [ugYearOnlyNoError, setugYearOnlyNoError] = useState("");



    useEffect(() => {
        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');
        setMounted(mounted)
        setuniversityId(universityId)
        var currentYear = (new Date()).getFullYear();
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

                }

            })



        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/summary', { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {

                    var my_universitySummary = res.data.universitySummary;

                    setcampus(my_universitySummary.campus);
                    setugYear(my_universitySummary.ugYear);
                    setpgYear(my_universitySummary.pgYear);
                    setdeposit(my_universitySummary.deposit);
                    setgraduateScore(my_universitySummary.graduateScore);
                    setpostGraduateScore(my_universitySummary.postGraduateScore);
                    setugIelts(my_universitySummary.ugIelts);
                    setpgIelts(my_universitySummary.pgIelts);
                    setugPTE(my_universitySummary.ugPTE);
                    setpgPTE(my_universitySummary.pgPTE);
                    setintake(my_universitySummary.intake);


                }
                else {

                }

            })
            .catch(error => {

            });

    }, [])

    function Summary(event) {
        event.preventDefault();
        var myPattern = /^[0-9_.]*$/;
        var ugYearNo = ugYear.toString().length;
        var pgYearNo = pgYear.toString().length;


        setgraduateScoreNoError("")
        setpostGraduateScoreNoError("")
        setugIeltsNoError("")
        setpgIeltsNoError('')
        setugPTENoError("")
        setpgPTENoError("")
        setugYearNoMessage("")
        setpgYearNoMessage("")
        setpgYearOnlyNoError("")
        setugYearOnlyNoError("")

        if (myPattern.test(graduateScore) === false) {
            setgraduateScoreNoError("Please Enter Only Number")
        }
        else if (myPattern.test(postGraduateScore) === false) {
            setpostGraduateScoreNoError("Please Enter Only Number")
        }
        else if (myPattern.test(ugIelts) === false) {
            setugIeltsNoError("Please Enter Only Number")
        }
        else if (myPattern.test(pgIelts) === false) {
            setpgIeltsNoError("Please Enter Only Number")
        }
        else if (myPattern.test(ugPTE) === false) {
            setugPTENoError("Please Enter Only Number")
        }
        else if (myPattern.test(pgPTE) === false) {
            setpgPTENoError("Please Enter Only Number")
        }
        else if (myPattern.test(ugYear) === false) {
            setugYearOnlyNoError("Please Enter Only Number")
        }
        else if (myPattern.test(pgYear) === false) {
            setpgYearOnlyNoError("Please Enter Only Number")
        }
        else if (ugYearNo !== 4) {
            setugYearNoMessage("Please Insert Four Digit")
        }
        else if (pgYearNo !== 4) {
            setpgYearNoMessage("Please Insert Four Digit")
        }
        else {
            setmyloader("true")

            const obj = {
                campus: campus,
                ugYear: ugYear,
                pgYear: pgYear,
                deposit: deposit,
                graduateScore: graduateScore,
                postGraduateScore: postGraduateScore,
                ugIelts: ugIelts,
                pgIelts: pgIelts,
                ugPTE: ugPTE,
                pgPTE: pgPTE,
                intake: intake

            };

            axios.put(process.env.REACT_APP_SERVER_URL + 'university/summary', obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    setmyloader("false")

                    if (res.data.success === true) {
                        setsuccessMessage("course delete")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)
                    }
                    else {

                    }

                })
                .catch(error => {

                });
        }
    }

    function setChangecampus(e) {
        const arr = e.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setcampus(str2)
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
                        <div className="container">
                            {submitSuccess === 1 ? <div className="Show_success_message">
                                <strong>Success!</strong> {successMessage}
                            </div> : null}
                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Summary Information</h1>


                            </div>


                            {/* <!-- Content Row --> */}

                            <div className="row">

                                {/* <!-- Area Chart --> */}
                                <div className="col-xl-12 col-lg-7">
                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div className="card shadow mb-4">
                                            <div id="accordion">
                                                <div className="card-body">
                                                    {loader === "true" ?

                                                        <Loader />

                                                        : null}
                                                    <div className="from-block">
                                                        <form onSubmit={Summary}>


                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <label className="form-label">Campus name *
                                                                        </label>
                                                                        <input type="text" className="form-control"
                                                                            value={campus} required
                                                                            onChange={(e) => setChangecampus(e.target.value)}
                                                                            placeholder="Course name" name="cname" />
                                                                    </div>
                                                                    <div className="col">
                                                                        {/* <label className="form-label">Eligibilit Year for UG
                                                                        </label> */}
                                                                        <div className="form-group"><label>Eligibility Year for UG *</label>

                                                                            <input type="number" className="form-control"
                                                                                value={ugYear} required
                                                                                onChange={(e) => setugYear(e.target.value)}
                                                                                placeholder="Course name" name="cname" />
                                                                            <div style={{ color: "red" }}> {ugYearNoMessage}</div>
                                                                            <div style={{ color: "red" }}> {ugYearOnlyNoError}</div>

                                                                        </div>


                                                                    </div>
                                                                    <div className="col">


                                                                        <div className="form-group">




                                                                            <label className="form-label">Eligibility Year for PG *</label>


                                                                            <input type="number" className="form-control"
                                                                                value={pgYear} required
                                                                                onChange={(e) => setpgYear(e.target.value)}
                                                                                placeholder="Course name" name="cname" />
                                                                            <div style={{ color: "red" }}> {pgYearNoMessage}</div>
                                                                            <div style={{ color: "red" }}> {pgYearOnlyNoError}</div>

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">CAS Deposit *</label>
                                                                        <input type="text" className="form-control"
                                                                            value={deposit} required
                                                                            onChange={(e) => setdeposit(e.target.value)}
                                                                            placeholder="CAS Deposit" name="tuitionfee" />
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Undergraduate Score Requirements(%) *</label>
                                                                        <input type="number" required className="form-control"
                                                                            value={graduateScore}
                                                                            onChange={(e) => setgraduateScore(e.target.value)}
                                                                            placeholder="Undergraduate Score Requirements(%)" />
                                                                        <div style={{ color: "red" }}> {graduateScoreNoError}</div>

                                                                    </div>


                                                                    <div className="col-md-4">
                                                                        <label className="form-label"> Postgraduate Score Requirements(%) *</label>
                                                                        <input type="number" required
                                                                            value={postGraduateScore}
                                                                            onChange={(e) => setpostGraduateScore(e.target.value)}
                                                                            className="form-control" placeholder="Postgraduate Score Requirements" name=" courselevel" />
                                                                        <div style={{ color: "red" }}> {postGraduateScoreNoError}</div>

                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <label className="form-label">IELTS for UG *</label>
                                                                        <input type="number" required
                                                                            value={ugIelts}
                                                                            onChange={(e) => setugIelts(e.target.value)}
                                                                            className="form-control" placeholder="IELTS for UG" name=" cgpa" />
                                                                        <div style={{ color: "red" }}> {ugIeltsNoError}</div>

                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label className="form-label">IELTS for PG *</label>
                                                                        <input type="number" required
                                                                            value={pgIelts}
                                                                            onChange={(e) => setpgIelts(e.target.value)}
                                                                            className="form-control" placeholder="IELTS for PG" name=" eligibility" />
                                                                        <div style={{ color: "red" }}> {pgIeltsNoError}</div>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <div className="form-group"><label>PTE for UG *
                                                                        </label><input type="number" required
                                                                            value={ugPTE}
                                                                            onChange={(e) => setugPTE(e.target.value)}
                                                                            className="form-control" id="eng-pro" name="email" placeholder="PTE for UG" />
                                                                            <div style={{ color: "red" }}> {ugPTENoError}</div>

                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>PTE for PG *</label><input type="number" required
                                                                                value={pgPTE}
                                                                                onChange={(e) => setpgPTE(e.target.value)}
                                                                                className="form-control" id="cour-web" name="mobile" placeholder="PTE for PG" />
                                                                            <div style={{ color: "red" }}> {pgPTENoError}</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">

                                                                <div className="row">
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <div className="form-group"><label>Intake Available *</label>

                                                                            <select
                                                                                type="text" className="form-control" required

                                                                                onChange={(e) => setintake(e.target.value)} value={intake}>
                                                                                <option value="">Select Intake</option>
                                                                                {Intakedata.map((object, i) => {

                                                                                    return (
                                                                                        <option value={object.year + "&&" + object.month}>{object.year + " " + object.month}</option>
                                                                                    )
                                                                                })}

                                                                            </select>



                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-6"></div>
                                                                    <div className="col-md-6 text-right">
                                                                        {/* <button type="button" className="btn btn-success ">Add New
                                                                        </button> */}
                                                                        <button type="submit" className="btn btn-secondary">Save
                                                                        </button>
                                                                    </div>

                                                                </div>

                                                            </div>



                                                        </form></div>


                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    {/* <!-- Card Body --> */}

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

            </div >



            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            {/* <!-- Logout Modal--> */}

        </div >
    );
}