import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';
import SweetAlert from 'react-bootstrap-sweetalert';
const UniversitySetcommission = () => {
    const [mounted, setMounted] = useState();
    const [Percentage, setPercentage] = useState();
    const [commissionChecked, setcommissionChecked] = useState();


    const [commissionTimeChecked, setcommissionTimeChecked] = useState("");
    const [displayAmount, setdisplayAmount] = useState("none");
    const [displayPercentage, setdisplayPercentage] = useState("none");
    const [displayone, setdisplayone] = useState("none");
    const [displaymany, setdisplaymany] = useState("none");
    //start for edit
    const [Editid, setEditid] = useState([]);

    const [EditcommissionType, setEditcommissionType] = useState([]);

    const [EdittimeType, setEdittimeType] = useState([]);

    const [displayEditAmount, setdisplayEditAmount] = useState("none");
    const [displayEditPercentage, setdisplayEditPercentage] = useState("none");
    const [displayEditone, setdisplayEditone] = useState("none");
    const [displayEditmany, setdisplayEditmany] = useState("none");
    //end for edit commission


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
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [deleteId, setdeleteId] = useState("");
    //start for edit
    function setEditCommissionTime(value) {

        setEdittimeType(value)
        if (value === "one time") {
            setdisplayEditone("inline");
            setdisplayEditmany("none");
        }
        else {
            setdisplayEditone("none");
            setdisplayEditmany("inline");
        }
    }
    function setEditcommissionData(value) {


        setEditcommissionType(value)


        if (value === "fixed") {
            setdisplayEditAmount("inline");
            setdisplayEditPercentage("none");
        }
        else {
            setdisplayEditPercentage("inline");
            setdisplayEditAmount("none");
        }
    }
    //end for edit
    useEffect(() => {
        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');
        setMounted(mounted)
        setuniversityId(universityId)
        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/commissions';
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setcommissionData(data.universityCommissions)
            })
        //start for select courses
        const url2 = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
        fetch(url2, {
            method: 'GET',
            headers: { 'Authorization': mounted }
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
        seteditId(value);
        setwidth("1600px");

        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/commissions/' + value;
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {

                setEditid(data.universityCommission._id)
                setcourseName(data.universityCommission.courseName)
                setfee(data.universityCommission.fee)
                setEditcommissionType(data.universityCommission.commissionType)
                setcommissionValue(data.universityCommission.commissionValue)
                setEdittimeType(data.universityCommission.timeType)
                settimeValue(data.universityCommission.timeValue)
                if (data.universityCommission.commissionType === "fixed") {
                    setdisplayEditAmount("inline");
                    setdisplayEditPercentage("none");
                }
                else {
                    setdisplayEditPercentage("inline");
                    setdisplayEditAmount("none");
                }
                if (data.universityCommission.timeType === "one time") {
                    setdisplayEditone("inline");
                    setdisplayEditmany("none");
                }
                else {
                    setdisplayEditmany("inline");
                    setdisplayEditone("none");
                }



            })

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
    function closebox(value) {
        setwidth("0px");

    }
    function closeviewbox(value) {

        setviewWidth("0px");
    }
    function closeaddbox(value) {

        setaddWidth("0px");
        setwidth("0px");
    }
    let handleAddSubmit = (event) => {
        event.preventDefault();
        setaddWidth("0");
        const obj1 = new FormData();
        obj1.append("courseName", courseName);
        obj1.append("fee", fee);
        // obj1.append("commissionType", commissionChecked);
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
    let handleEditSubmit = (event) => {
        event.preventDefault();
        setwidth("0");
        const obj1 = new FormData();
        obj1.append("courseName", courseName);
        obj1.append("fee", fee);
        obj1.append("commissionType", EditcommissionType);
        obj1.append("commissionValue", commissionValue);
        obj1.append("timeType", EdittimeType);
        obj1.append("timeValue", timeValue);
        const url2 = process.env.REACT_APP_SERVER_URL + 'university/commissions/' + Editid
        fetch(url2, {
            method: 'put',
            headers: { 'Authorization': mounted },
            body: obj1
        })
            .then(response => response.json())
            .then(data => {
                setaddWidth("0");
                setsuccessMessage("Commisssion Updated")
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

                                {showSweetAlert === "1" ? <SweetAlert
                                    warning
                                    showCancel
                                    confirmBtnText="Yes, delete it!"
                                    confirmBtnBsStyle="danger"

                                    title="Are you sure?"
                                    onConfirm={(value) => {
                                        setshowSweetAlert("0");
                                        const url2 = process.env.REACT_APP_SERVER_URL + 'university/commissions/' + deleteId
                                        fetch(url2, {
                                            method: 'delete',
                                            headers: { 'Authorization': mounted }

                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                setaddWidth("0");
                                                setsuccessMessage("Commisssion Deleted")
                                                setTimeout(() => setsubmitSuccess(""), 3000);
                                                setsubmitSuccess(1)
                                                //start for get commission


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

                                                //end for get commission
                                            })

                                    }}
                                    onCancel={() =>
                                        setshowSweetAlert("0")

                                    }
                                    focusCancelBtn
                                >

                                </SweetAlert>
                                    : null
                                }


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

                                                            <div className="row">

                                                                {/* <!-- Area Chart --> */}
                                                                <div className="col-xl-12 col-lg-7">
                                                                    <div className="card shadow mb-4">
                                                                        {/* <!-- Card Header - Dropdown --> */}
                                                                        <div className="card shadow mb-4">
                                                                            <div id="accordion">

                                                                                <p>Add Commission</p>
                                                                                <div className="card-body">

                                                                                    <div className="from-block">

                                                                                    </div>

                                                                                    <form onSubmit={handleAddSubmit}>
                                                                                        <div className="mb-3">
                                                                                            <div className="row">
                                                                                                <div className="col-md-6">
                                                                                                    <label className="form-label">Course Name</label>


                                                                                                    <select className="form-control" onChange={(e) => handleChange(e.target.value)}>

                                                                                                        <option value="" >Select Course Name</option>
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
                                                                                                           <span>The Total commission is {Percentage}</span>
                                                                                                    </div>
                                                                                                 
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
                                        <div className="card-body course-sidenav" id="mySideview"
                                            style={{ width: width }}
                                        >

                                            <div className="student-view">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h6 className="mt-2 font-weight-bold text-primary"></h6>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <a className="closebtn" onClick={closeaddbox} >&times;</a>

                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-6"></div>
                                                    <div className="col-md-6 text-right"></div>
                                                </div>
                                                <div className="table-responsive mt-5">

                                                    <div className="row">
                                                        <div className="col-sm-12">

                                                            <div className="row">

                                                                {/* <!-- Area Chart --> */}
                                                                <div className="col-xl-12 col-lg-7">
                                                                    <p>Edit Commission</p>
                                                                    <div className="card shadow mb-4">
                                                                        {/* <!-- Card Header - Dropdown --> */}
                                                                        <div className="card shadow mb-4">
                                                                            <div id="accordion">


                                                                                <div className="card-body">

                                                                                    <div className="from-block">

                                                                                    </div>

                                                                                    <form onSubmit={handleEditSubmit}>
                                                                                        <div className="mb-3">
                                                                                            <div className="row">
                                                                                                <div className="col-md-6">
                                                                                                    <label className="form-label">Course Name</label>


                                                                                                    <select className="form-control" onChange={(e) => handleChange(e.target.value)}>

                                                                                                        {/* <option value="" >Select course name</option> */}
                                                                                                        <option value={courseName} >{courseName}</option>
                                                                                                        {data.map((object, i) => {
                                                                                                            return (

                                                                                                                <option
                                                                                                                    onClick={(e) => handleClick(object.fee)}

                                                                                                                    value={object.courseName + "&&" + object.fee} key={i}>{object.courseName}</option>
                                                                                                            )
                                                                                                        })}
                                                                                                    </select>
                                                                                                </div>

                                                                                                <div className="col-md-6">
                                                                                                    <label className="form-label">Select Fee</label>
                                                                                                    <select className="form-control" >
                                                                                                        <option> {fee}</option>

                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="row mt-3">


                                                                                                <div className="col-md-6">
                                                                                                    <fieldset

                                                                                                        onChange={(e) => setEditcommissionData(e.target.value)
                                                                                                        }

                                                                                                    >
                                                                                                        <label className="form-label">Commision</label><br />


                                                                                                        <div className="form-check form-check-inline">


                                                                                                            <input className="form-check-input" type="radio"
                                                                                                                onChange={(e) => setEditcommissionData(e.target.value)}
                                                                                                                value="fixed"
                                                                                                                checked={EditcommissionType === "fixed"}


                                                                                                            />
                                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                                                                Fixed
                                                                                                            </label>
                                                                                                        </div>
                                                                                                        <div className="form-check form-check-inline">
                                                                                                            <input className="form-check-input" type="radio"
                                                                                                                onChange={(e) => setEditcommissionData(e.target.value)}
                                                                                                                value="variable"

                                                                                                                checked={EditcommissionType === "variable"}


                                                                                                            />
                                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                                                                Variable
                                                                                                            </label>
                                                                                                        </div>
                                                                                                    </fieldset>
                                                                                                </div>



                                                                                                <div className="col-md-6">
                                                                                                    <div style={{ display: displayEditAmount }}>
                                                                                                        <label className="form-label" >Enter Amount</label>
                                                                                                        <input type="text"
                                                                                                            value={commissionValue}
                                                                                                            onChange={e => amountcommissionValue(e.target.value)}
                                                                                                            className="form-control" placeholder="" name="enteramount" />
                                                                                                    </div>
                                                                                                    <div style={{ display: displayEditPercentage }}>
                                                                                                        <label className="form-label" >Enter Percentage(%)</label>
                                                                                                        <input type="text" className="form-control" placeholder="" name="enter Percentage"
                                                                                                            onChange={e => percentagecommissionValue(e.target.value)}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <span>The Total commission is {commissionValue}</span>
                                                                                                </div>
                                                                                            </div>


                                                                                            <div className="row mt-3">
                                                                                                <div className="col-md-6">
                                                                                                    <fieldset
                                                                                                        onChange={(e) => setEditCommissionTime(e.target.value)}>
                                                                                                        <label className="form-label">Commision Set is</label><br />
                                                                                                        <div className="form-check form-check-inline">
                                                                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                                                                                                                value="one time"

                                                                                                                checked={EdittimeType === "one time"}
                                                                                                                onChange={(e) => setEditCommissionTime(e.target.value)}
                                                                                                            />
                                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                                                                Only One time
                                                                                                            </label>
                                                                                                        </div>
                                                                                                        <div className="form-check form-check-inline">
                                                                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
                                                                                                                value="every time"
                                                                                                                checked={EdittimeType === "every time"}


                                                                                                                onChange={(e) => setEditCommissionTime(e.target.value)}
                                                                                                            />
                                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                                                                                On Every Time
                                                                                                            </label>
                                                                                                        </div>
                                                                                                    </fieldset>
                                                                                                </div>
                                                                                                <div className="col-md-6">
                                                                                                    <div style={{ display: displayEditone }}>
                                                                                                        <label htmlFor="lname" className="form-label">Enter Commission For One Time</label>
                                                                                                        <input type="text" className="form-control" placeholder="Enter Fee" name="percentage "
                                                                                                            value={timeValue}
                                                                                                            onChange={(e) => settimeValue(e.target.value)}
                                                                                                        />
                                                                                                    </div>
                                                                                                    <div style={{ display: displayEditmany }}>
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
                                        {/* end for edit commission */}







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

export default UniversitySetcommission;
