
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';
const Commission = () => {

    const [mounted, setMounted] = useState();
    const [Percentage, setPercentage] = useState();
    const [commissionChecked, setcommissionChecked] = useState("");
    const [commissionTimeChecked, setcommissionTimeChecked] = useState("");
    const [displayAmount, setdisplayAmount] = useState("none");
    const [displayPercentage, setdisplayPercentage] = useState("none");
    const [displayone, setdisplayone] = useState("none");
    const [displaymany, setdisplaymany] = useState("none");



    const [courseName, setcourseName] = useState("");
    const [fee, setfee] = useState("");
    const [commissionValue, setcommissionValue] = useState("");
    const [timeValue, settimeValue] = useState("");
    const [width, setwidth] = useState("");
    const [viewWidth, setviewWidth] = useState("");
    const [addWidth, setaddWidth] = useState("");

    const [data, setdata] = useState([]);
    const [commissionData, setcommissionData] = useState([]);

    const [editId, seteditId] = useState([]);
    const [universityId, setuniversityId] = useState([]);
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            console.log(mydata);
            var universityId = mydata.data.university._id;
            setuniversityId(universityId)
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/commissions';
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mytoken }
        })
            .then(response => response.json())
            .then(data => {
                setcommissionData(data.universityCommissions)
            })
        //start for select courses
        const url2 = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
        fetch(url2, {
            method: 'GET',
            headers: { 'Authorization': mytoken }
        })
            .then(response => response.json())
            .then(data => {
                setdata(data.universityCourses)
            })
        //end for select courses
    }, [])


    function setcommission(value) {

        if (value === "fixed") {
            setdisplayAmount("inline");
            setdisplayPercentage("none");
        }
        else {
            setdisplayPercentage("inline");
            setdisplayAmount("none");
        }
    }
    function setCommissionTime(value) {

        if (value === "one time") {
            setdisplayone("inline");
            setdisplaymany("none");
        }
        else {
            setdisplayone("none");
            setdisplaymany("inline");
        }
    }
    function handleClick(value) {
    }
    function percentagecommissionValue(percentageValue) {
        var number1 = fee;
        var number2 = percentageValue;
        var value = (number1 / number2); //w00t!
        setPercentage(value)
        setcommissionValue(value)
    }
    function amountcommissionValue(value) {

        setcommissionValue(value)
    }
    function handleChange(value, q) {
        const myArray = value.split("&&");
        setfee(myArray[1])
        setcourseName(myArray[0])

    }

    function handleEditClick(value) {
        console.log(value);
        seteditId(value);
        setwidth("1600px");
        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses/' + value, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log(res.data.universityCourse);
                var myuniversityCourse = res.data.universityCourse;
                if (res.data.success === true) {
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });

    }
    function handleAdd() {
        setaddWidth("1600px");
    }
    //start for delete

    function handleDelete(value) {
        console.log(value);
        axios.delete(process.env.REACT_APP_SERVER_URL + 'university/courses/' + value, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                console.log(res.data.universityCourse);
                var myuniversityCourse = res.data.universityCourse;
                if (res.data.success === true) {
                    alert("Course delete successfully");
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });

    }
    //end for delete 
    function closebox(value) {
        setwidth("0px");

    }
    function closeviewbox(value) {

        setviewWidth("0px");
    }
    function closeaddbox(value) {

        setaddWidth("0px");
    }
    let handleAddSubmit = (event) => {
        event.preventDefault();
        const obj1 = new FormData();
        obj1.append("courseName", courseName);
        obj1.append("fee", fee);
        obj1.append("commissionType", commissionChecked);
        obj1.append("commissionValue", commissionValue);
        obj1.append("timeType", commissionTimeChecked);
        obj1.append("timeValue", timeValue);
        const url2 = process.env.REACT_APP_SERVER_URL + 'university/commissions'
        fetch(url2, {
            method: 'post',
            headers: { 'Authorization': mounted },
            body: obj1
        })
            .then(response => response.json())
            .then(data => {
                setaddWidth("0");
                setsuccessMessage("Commisssion Added")
                setTimeout(() => setsubmitSuccess(""), 3000);
                setsubmitSuccess(1)
                //start for get commission
                const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/commissions';
                fetch(url, {
                    method: 'GET',
                    headers: { 'Authorization': mounted }
                })
                    .then(response => response.json())
                    .then(data => {
                        setcommissionData(data.universityCommissions)
                    })
                //end for get commission
            })
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
                            {submitSuccess === 1 ? <div className="Show_success_message">
                                <strong>Success!</strong> {successMessage}
                            </div> : null}
                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">  Commission</h1>
                                <button type="button" onClick={() => handleAdd()} className="btn btn-outline-success"><span><i className="fas fa-plus"></i></span>Add Commission</button>

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
                                                            <th>Fee</th>
                                                            <th>Commission</th>
                                                            <th>Commission Set</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>




                                                        {commissionData.map((object, i) => {
                                                            return (

                                                                <tr key={i}>
                                                                    <td>{object._id}</td>
                                                                    <td>{object.courseName}</td>
                                                                    <td>{object.fee}</td>
                                                                    <td>{object.commissionValue}</td>
                                                                    <td>{object.timeValue}</td>



                                                                    <td>

                                                                        <button className="btn" onClick={() => handleDelete(object._id)}><i className="fas fa-trash-alt"></i></button>
                                                                        <button className="btn" onClick={() => handleEditClick(object._id)}><i className="fas fa-pen "></i></button>

                                                                    </td>
                                                                </tr>

                                                            )
                                                        })}
                                                    </tbody>


                                                </table>
                                            </div>
                                        </div>


                                        <div className="card-body sidenav" id="mySidenav"
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

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body sidenav" id="mySideAdd"
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

                                                            <div className="row">

                                                                {/* <!-- Area Chart --> */}
                                                                <div className="col-xl-12 col-lg-7">
                                                                    <div className="card shadow mb-4">
                                                                        {/* <!-- Card Header - Dropdown --> */}
                                                                        <div className="card shadow mb-4">
                                                                            <div id="accordion">


                                                                                <div className="card-body">

                                                                                    <div className="from-block">

                                                                                    </div>

                                                                                    <form onSubmit={handleAddSubmit}>
                                                                                        <div className="mb-3">
                                                                                            <div className="row">
                                                                                                <div className="col-md-6">
                                                                                                    <label className="form-label">Course Name</label>


                                                                                                    <select className="form-control" onChange={(e) => handleChange(e.target.value)}>

                                                                                                        <option value="" >Select course name</option>
                                                                                                        {data.map((object, i) => {
                                                                                                            return (

                                                                                                                <option
                                                                                                                    onClick={(e) => handleClick(object.fee)}

                                                                                                                    // onClick={() => {
                                                                                                                    //     setfee(object.fee)
                                                                                                                    // }}


                                                                                                                    value={object.courseName + "&&" + object.fee} key={i}>{object.courseName}</option>
                                                                                                            )
                                                                                                        })}
                                                                                                    </select>
                                                                                                </div>

                                                                                                <div className="col-md-6">
                                                                                                    <label className="form-label">Select Fee</label>
                                                                                                    <select className="form-control">
                                                                                                        <option> {fee}</option>

                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="row mt-3">


                                                                                                <div className="col-md-6">
                                                                                                    <fieldset
                                                                                                        onChange={(e) => setcommission(e.target.value)}

                                                                                                    >
                                                                                                        <label className="form-label">Commision</label><br />
                                                                                                        <div className="form-check form-check-inline">


                                                                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                                                                                                value="fixed"
                                                                                                                checked={commissionChecked === "fixed"}
                                                                                                                onChange={(e) => setcommissionChecked(e.target.value)}
                                                                                                            />
                                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                                                                Fixed
                                                                                                            </label>
                                                                                                        </div>
                                                                                                        <div className="form-check form-check-inline">
                                                                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                                                                                value="variable"
                                                                                                                checked={commissionChecked === "variable"}
                                                                                                                onChange={(e) => setcommissionChecked(e.target.value)}

                                                                                                            />
                                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                                                                Variable
                                                                                                            </label>
                                                                                                        </div>
                                                                                                    </fieldset>
                                                                                                </div>



                                                                                                <div className="col-md-6">
                                                                                                    <div style={{ display: displayAmount }}>
                                                                                                        <label className="form-label" >Enter Amount</label>
                                                                                                        <input type="text"
                                                                                                            onChange={e => amountcommissionValue(e.target.value)}
                                                                                                            className="form-control" placeholder="" name="enteramount" />
                                                                                                    </div>
                                                                                                    <div style={{ display: displayPercentage }}>
                                                                                                        <label className="form-label" >Enter Percentage(%)</label>
                                                                                                        <input type="text" className="form-control" placeholder="" name="enter Percentage"
                                                                                                            onChange={e => percentagecommissionValue(e.target.value)}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <span>The Total commission is {Percentage}</span>
                                                                                                </div>
                                                                                            </div>


                                                                                            <div className="row mt-3">
                                                                                                <div className="col-md-6">
                                                                                                    <fieldset
                                                                                                        onChange={(e) => setCommissionTime(e.target.value)}>
                                                                                                        <label className="form-label">Commision Set is</label><br />
                                                                                                        <div className="form-check form-check-inline">
                                                                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                                                                                                                value="one time"
                                                                                                                checked={commissionTimeChecked === "one time"}
                                                                                                                onChange={(e) => setcommissionTimeChecked(e.target.value)}
                                                                                                            />
                                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                                                                Only One time
                                                                                                            </label>
                                                                                                        </div>
                                                                                                        <div className="form-check form-check-inline">
                                                                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
                                                                                                                value="every time"
                                                                                                                checked={commissionTimeChecked === "every time"}
                                                                                                                onChange={(e) => setcommissionTimeChecked(e.target.value)}
                                                                                                            />
                                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                                                                                On Every Time
                                                                                                            </label>
                                                                                                        </div>
                                                                                                    </fieldset>
                                                                                                </div>
                                                                                                <div className="col-md-6">
                                                                                                    <div style={{ display: displayone }}>
                                                                                                        <label htmlFor="lname" className="form-label">Enter Commission For One Time</label>
                                                                                                        <input type="text" className="form-control" placeholder="Enter Fee" name="percentage "
                                                                                                            value={timeValue}
                                                                                                            onChange={(e) => settimeValue(e.target.value)}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div style={{ display: displaymany }}>
                                                                                                        <label htmlFor="lname" className="form-label">Enter Commission For Every Semester </label>
                                                                                                        <input type="text" className="form-control" placeholder="Enter Fee" name="percentage "
                                                                                                            value={timeValue}
                                                                                                            onChange={(e) => settimeValue(e.target.value)}
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="mb-3">
                                                                                            <button type="submit" className="btn btn-success">Submit</button>
                                                                                        </div>
                                                                                    </form>


                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                    {/* <!-- Card Body --> */}

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body sidenav" id="mySideview"
                                            style={{ width: viewWidth }}
                                        >

                                            <div className="student-view">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h6 className="mt-2 font-weight-bold text-primary"></h6>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a className="closebtn" onClick={closeviewbox} >&times;</a>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-6"></div>
                                                    <div className="col-md-6 text-right"></div>
                                                </div>
                                                <div className="table-responsive mt-5">


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

export default Commission;
