
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faTrash, faPen,faEye

} from '@fortawesome/free-solid-svg-icons';
const UniversityIntake = () => {
    const [year, setyear] = useState("");
    const [month, setmonth] = useState("");

    const [IntakeId, setIntakeId] = useState("");

    const [width, setwidth] = useState("");
    const [viewWidth, setviewWidth] = useState("");
    const [addWidth, setaddWidth] = useState("");
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [editId, seteditId] = useState([]);
    const [universityId, setuniversityId] = useState([]);
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [deleteId, setdeleteId] = useState("");
    const [yearaddError, setyearaddError] = useState("");
    const [monthaddError, setmonthaddError] = useState("");
    const [loader, setmyloader] = useState("false");


    useEffect(() => {
        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');


        setMounted(mounted)
        setuniversityId(universityId)
        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/intakes';
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setdata(data.universityIntakes)
            })

    }, [])

    function handleClick(value) {

        setyearaddError("")
        setmonthaddError("")
        seteditId(value);
        setwidth("1600px");
        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/intakes/' + value, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                var myuniversityIntakes = res.data.universityIntake;
                if (res.data.success === true) {

                    setyear(myuniversityIntakes.year);
                    setmonth(myuniversityIntakes.month);
                }
                else {

                }

            })
            .catch(error => {

            });

    }
    function handleAdd() {
        setaddWidth("1600px");
        setyear("")
        setmonth("")
    }


    function handleDelete(value) {

        setshowSweetAlert("1")
        setdeleteId(value)

    }

    function closebox(value) {
        setwidth("0px");
    }
    function closeviewbox(value) {
        setviewWidth("0px");
    }
    function closeaddbox(value) {
        setaddWidth("0px");
    }

    let handleEditSubmit = (event) => {
        event.preventDefault();
        setyearaddError("")
        setmonthaddError("")
        event.preventDefault();
        if (year === "") {
            setyearaddError("Please Select Year")
        }
        else if (month === "") {
            setmonthaddError("Please Select Month")

        }
        else {

            setmyloader("true")

            const obj = {
                year: year,
                month: month,

            };
            axios.put(process.env.REACT_APP_SERVER_URL + 'university/intakes/' + editId, obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    setmyloader("false")
                    if (res.data.success === true) {
                        setwidth(0)
                        setsuccessMessage("course update")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)
                        setyear("")
                        setmonth("")
                        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/intakes';
                        fetch(url, {
                            method: 'GET',
                            headers: { 'Authorization': mounted }
                        })
                            .then(response => response.json())
                            .then(data => {
                                setdata(data.universityIntakes)
                            })

                    }
                    else {

                    }
                })
                .catch(error => {

                });
        }
    }
    let handleAddSubmit = (event) => {
        setyearaddError("")
        setmonthaddError("")
        event.preventDefault();
        if (year === "") {
            setyearaddError("Please Select Year")
        }
        else if (month === "") {
            setmonthaddError("Please Select Month")

        }
        else {

            setmyloader("true")

            setaddWidth(0)
            const obj = {
                year: year,
                month: month,

            };
            axios.post(process.env.REACT_APP_SERVER_URL + 'university/intakes/', obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {
                    setmyloader("false")
                    if (res.data.success === true) {


                        setsuccessMessage("course add")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)

                        setyear("");
                        setmonth("");


                        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/intakes';
                        fetch(url, {
                            method: 'GET',
                            headers: { 'Authorization': mounted }
                        })
                            .then(response => response.json())
                            .then(data => {
                                setdata(data.universityIntakes)
                            })

                    }
                    else {

                    }
                })
                .catch(error => {

                });
        }
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
                            {loader === "true" ?

                                <Loader />

                                : null}
                            {/* start for showing add message */}
                            {submitSuccess === 1 ? <div className="Show_success_message">
                                <strong>Success!</strong> {successMessage}
                            </div> : null}
                            {/* start for showing add message */}
                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Intake</h1>

                                {showSweetAlert === "1" ? <SweetAlert
                                    warning
                                    showCancel
                                    confirmBtnText="Yes, delete it!"
                                    confirmBtnBsStyle="danger"

                                    title="Are you sure?"
                                    onConfirm={(value) => {
                                        setshowSweetAlert("0");
                                        setmyloader("true")

                                        axios.delete(process.env.REACT_APP_SERVER_URL + 'university/intakes/' + deleteId, { headers: { 'Authorization': mounted } })
                                            .then(function (res) {
                                                setmyloader("false")

                                                var myuniversityCourse = res.data.intakes;
                                                if (res.data.success === true) {
                                                    setsuccessMessage("course delete")
                                                    setTimeout(() => setsubmitSuccess(""), 3000);
                                                    setsubmitSuccess(1)

                                                    const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/intakes';
                                                    fetch(url, {
                                                        method: 'GET',
                                                        headers: { 'Authorization': mounted }
                                                    })
                                                        .then(response => response.json())
                                                        .then(data => {
                                                            setdata(data.universityIntakes)
                                                        })

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
                                <button type="button" onClick={() => handleAdd()} className="btn btn-outline-success"
                                title="Add New Intake"  data-toggle="tooltip" data-placement="right"
                                ><span>
                                  
                                    <FontAwesomeIcon icon={faPlus} />
                                    
                                    </span> Add New Intake</button>

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
                                                            <th>No.</th>
                                                            <th>Year</th>
                                                            <th>Month</th>
                                                            <th>Action</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>




                                                        {data.map((object, i) => {

                                                            return (

                                                                <tr key={i}>
                                                                    <td>{i+1}</td>
                                                                    <td>{object.year}</td>
                                                                    <td>{object.month}</td>

                                                                    <td>

                                                                        <button title="Delete" className="btn btn-danger btn-sm vbtn" onClick={() => handleDelete(object._id)}>
                                                                           
                                        <FontAwesomeIcon icon={faTrash} />
                                                                            
                                                                            </button>
                                                                        <button title="Edit" className="btn btn-success btn-sm " onClick={() => handleClick(object._id)}>
                                                                          
                                        <FontAwesomeIcon icon={faPen} />
                                                                            
                                                                            </button>

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
                                                   

                                                        <a title="Close"  data-toggle="tooltip" data-placement="right" className="closebtn" onClick={closebox} >&times;</a>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <h3>Edit Intake</h3>
                                                </div>
                                                <div className="table-responsive mt-5">

                                                    <div className="row">
                                                        <div className="col-sm-12">

                                                            <form onSubmit={handleEditSubmit}>
                                                                <div className="card-body" >

                                                                    <div className="from-block" >



                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <label className="form-label">Year
                                                                                    *</label>

                                                                                <select required
                                                                                    className="form-control"
                                                                                    placeholder="Year" name="year"
                                                                                    value={year}
                                                                                    onChange={(e) => setyear(e.target.value)}>
                                                                                    <option value=''>Select Year</option>
                                                                                    <option value='2022'>2022</option>
                                                                                    <option value='2023'>2023</option>
                                                                                    <option value='2024'>2024</option>
                                                                                    <option value='2025'>2025</option>
                                                                                    <option value='2026'>2026</option>

                                                                                </select>
                                                                                <div style={{ color: "red" }}> {yearaddError}</div>


                                                                            </div>
                                                                            <div className="col">
                                                                                <label className="form-label">Month *
                                                                                </label>

                                                                                <select

                                                                                    className="form-control"
                                                                                    placeholder="Month" name="Month"
                                                                                    value={month} required
                                                                                    onChange={(e) => setmonth(e.target.value)}>
                                                                                    <option value=''>Select Month</option>
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
                                                                                <div style={{ color: "red" }}> {monthaddError}</div>

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
                                        <div className="card-body sidenav" id="mySideAdd"
                                            style={{ width: addWidth }}
                                        >

                                            <div className="student-view">
                                                <div className="row">
                                                    <div className="col-md-6">

                                                    </div>
                                                    <div className="col-md-6">
                                                        <a title="Close"  data-toggle="tooltip" data-placement="right" className="closebtn" onClick={closeaddbox} >&times;</a>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-12">
                                                        <h3 className="pl-3">Add Intake</h3>
                                                    </div>
                                                </div>
                                                <div className="table-responsive ">

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <form onSubmit={handleAddSubmit}>
                                                                <div className="card-body" >

                                                                    <div className="from-block" >


                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <label className="form-label">Year
                                                                                    *</label>
                                                                                <select required
                                                                                    className="form-control"
                                                                                    placeholder="Year" name="year"
                                                                                    value={year}
                                                                                    onChange={(e) => setyear(e.target.value)}>
                                                                                    <option value=''>Select Year</option>
                                                                                    <option value='2022'>2022</option>
                                                                                    <option value='2023'>2023</option>
                                                                                    <option value='2024'>2024</option>
                                                                                    <option value='2025'>2025</option>
                                                                                    <option value='2026'>2026</option>

                                                                                </select>
                                                                                <div style={{ color: "red" }}> {yearaddError}</div>

                                                                            </div>
                                                                            <div className="col">
                                                                                <label className="form-label">Month *
                                                                                </label>
                                                                                <select
                                                                                    required
                                                                                    className="form-control"
                                                                                    placeholder="Month" name="Month"
                                                                                    value={month}
                                                                                    onChange={(e) => setmonth(e.target.value)}
                                                                                >
                                                                                    <option value=''>Select Month</option>
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
                                                                                <div style={{ color: "red" }}> {monthaddError}</div>


                                                                            </div>

                                                                        </div>


                                                                        <div className="mb-3 mt-3">
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
                                        <div className="card-body sidenav" id="mySideview"
                                            style={{ width: viewWidth }}
                                        >

                                            <div className="student-view">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h6 className="mt-2 font-weight-bold text-primary"></h6>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a title="Close"  data-toggle="tooltip" data-placement="right" className="closebtn" onClick={closeviewbox} >&times;</a>
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
                                                                        <th rowSpan="1" colSpan="1">Year</th>


                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="odd">
                                                                        <td className="sorting_1">{IntakeId}</td>

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

                    {/* <!-- Footer --> */}

                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
                {/* <i className="fas fa-angle-up"></i> */}
            </a>

            {/* <!-- Logout Modal--> */}

        </div >
    );
}

export default UniversityIntake;
