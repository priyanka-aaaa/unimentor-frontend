import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';

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
    useEffect(() => {

        var ddlYears = document.getElementById("ddlYears");

        //Determine the Current Year.
        var currentYear = (new Date()).getFullYear();

        //Loop and add the Year values to DropDownList.
        for (var i = currentYear; i >= 1950; i--) {
            var option = document.createElement("OPTION");
            option.innerHTML = i;
            option.value = i;
            ddlYears.appendChild(option);
        }
        var pgYears = document.getElementById("pgYears");

        //Determine the Current Year.
     

        //Loop and add the Year values to DropDownList.
        for (var i = currentYear; i >= 1950; i--) {
            var option = document.createElement("OPTION");
            option.innerHTML = i;
            option.value = i;
            pgYears.appendChild(option);
        }
        

        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            console.log(mydata);
            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        //start for fetch personal information
        axios.get(process.env.REACT_APP_SERVER_URL+'university/summary', { headers: { 'Authorization': mytoken } })
            .then(function (res) {
                if (res.data.success === true) {
                    console.log(res.data);
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
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });

    }, [])
    // start for personal information
    function Summary(event) {
        event.preventDefault();
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
        axios.put('/university/summary', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data);
                if (res.data.success === true) {
                    alert("summary update successfully");
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
                        <div className="container">

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

                                                    <div className="from-block">
                                                        <form onSubmit={Summary}>


                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <label className="form-label">Campus name
                                                                        </label>
                                                                        <input type="text" className="form-control"
                                                                            value={campus}
                                                                            onChange={(e) => setcampus(e.target.value)}
                                                                            placeholder="Course name" name="cname" />
                                                                    </div>
                                                                    <div className="col">
                                                                        {/* <label className="form-label">Eligibilit Year for UG
                                                                        </label> */}
                                                                        <div className="form-group"><label>Eligibilit Year for UG</label>
                                                                            <select id="ddlYears"

                                                                                value={ugYear}
                                                                                onChange={(e) => setugYear(e.target.value)}
                                                                                className="form-control dropdown" name="highest_qualification">
                                                                            </select></div>
                                                                    </div>
                                                                    <div className="col">


                                                                        <div className="form-group">




                                                                            <label className="form-label">Eligibilit Year for PG</label>
                                                                            <select id="pgYears"

                                                                                value={pgYear}
                                                                                onChange={(e) => setpgYear(e.target.value)}
                                                                                className="form-control dropdown" name="highest_qualification">
                                                                            </select></div>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">CAS Deposit</label>
                                                                        <input type="text" className="form-control"
                                                                            value={deposit}
                                                                            onChange={(e) => setdeposit(e.target.value)}
                                                                            placeholder="CAS Deposit" name="tuitionfee" />
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Undergraduate Score Requirements(%)</label>
                                                                        <input type="number" className="form-control"
                                                                            value={graduateScore}
                                                                            onChange={(e) => setgraduateScore(e.target.value)}
                                                                            placeholder="Undergraduate Score Requirements(%)" />
                                                                    </div>


                                                                    <div className="col-md-4">
                                                                        <label className="form-label"> Postgraduate Score Requirements(%)</label>
                                                                        <input type="number"
                                                                            value={postGraduateScore}
                                                                            onChange={(e) => setpostGraduateScore(e.target.value)}
                                                                            className="form-control" placeholder="Postgraduate Score Requirements" name=" courselevel" />

                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <label className="form-label">IELTS for UG</label>
                                                                        <input type="text"
                                                                            value={ugIelts}
                                                                            onChange={(e) => setugIelts(e.target.value)}
                                                                            className="form-control" placeholder="IELTS for UG" name=" cgpa" />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label className="form-label">IELTS for PG </label>
                                                                        <input type="text"
                                                                            value={pgIelts}
                                                                            onChange={(e) => setpgIelts(e.target.value)}
                                                                            className="form-control" placeholder="IELTS for PG" name=" eligibility" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <div className="form-group"><label>PTE for UG
                                                                        </label><input type="text"
                                                                            value={ugPTE}
                                                                            onChange={(e) => setugPTE(e.target.value)}
                                                                            className="form-control" id="eng-pro" name="email" placeholder="PTE for UG" /></div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>PTE for PG </label><input type="text"
                                                                                value={pgPTE}
                                                                                onChange={(e) => setpgPTE(e.target.value)}
                                                                                className="form-control" id="cour-web" name="mobile" placeholder="PTE for PG" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                        <div className="form-group"><label>Intake Available</label><select
                                                                            value={intake}
                                                                            onChange={(e) => setintake(e.target.value)}
                                                                            className="form-control dropdown" id="highest_qualification" name="highest_qualification">
                                                                            <option value="">JAn</option>
                                                                            <option value="Diploma">FEB</option>
                                                                            <option value="Secondary">March</option>

                                                                        </select></div>
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
                    <Footer />
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