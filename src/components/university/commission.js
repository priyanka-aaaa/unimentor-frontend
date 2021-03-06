import React, { useState, useEffect } from "react";
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faTrash, faPen, faEye

} from '@fortawesome/free-solid-svg-icons';
export default function Commission() {
    const [mounted, setMounted] = useState();
    const [Percentage, setPercentage] = useState();
    const [commissionChecked, setcommissionChecked] = useState();
    const [commissionTimeChecked, setcommissionTimeChecked] = useState("");
    const [displaymyAmount, setdisplaymyAmount] = useState("none");
    const [displayPercentage, setdisplayPercentage] = useState("none");
    const [displayone, setdisplayone] = useState("none");
    const [displaymany, setdisplaymany] = useState("none");
    const [Editid, setEditid] = useState([]);
    const [EditcommissionType, setEditcommissionType] = useState([]);
    const [EdittimeType, setEdittimeType] = useState([]);
    const [displayEditAmount, setdisplayEditAmount] = useState("none");
    const [displayEditPercentage, setdisplayEditPercentage] = useState("none");
    const [displayEditone, setdisplayEditone] = useState("none");
    const [displayEditmany, setdisplayEditmany] = useState("none");
    const [courseName, setcourseName] = useState("");
    const [tuitionFee, settuitionFee] = useState("");
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
    const [loader, setmyloader] = useState("false");
    const [commissionCheckedError, setcommissionCheckedError] = useState("");
    const [commissionValueError, setcommissionValueError] = useState("");
    const [timeTypeError, settimeTypeError] = useState("");
    const [timeValueError, settimeValueError] = useState("");
    const [alreadySetCommission, setalreadySetCommission] = useState("");

    useEffect(() => {
        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');
        setMounted(mounted)
        setuniversityId(universityId)
        if (universityId !== null) {
            const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/commissions';
            fetch(url, {
                method: 'GET',
                headers: { 'Authorization': mounted }
            })
                .then(response => response.json())
                .then(data => {
                    setcommissionData(data.universityCommissions)
                })
            const url2 = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/courses';
            fetch(url2, {
                method: 'GET',
                headers: { 'Authorization': mounted }
            })
                .then(response => response.json())
                .then(data => {
                    setdata(data.universityCourses)
                })
        }
    }, [])
    
    function changecommissionChecked(value) {
        setcommissionChecked(value)
        if (value === "fixed") {
            setdisplaymyAmount("inline")
            setdisplayPercentage("none")
        }
        else {
            setdisplaymyAmount("none")
            setdisplayPercentage("inline")
        }
    }
    function changecommissionTimeChecked(value) {
        setcommissionTimeChecked(value)
        if (value === "one time") {
            setdisplayone("inline")
            setdisplaymany("none")
        }
        else {
            setdisplayone("none")
            setdisplaymany("inline")
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
    function handleClick(value) {
    }
    function percentagecommissionValue(percentageValue) {
        var number1 = tuitionFee;
        var number2 = percentageValue;
        var value = (number1 / number2);
        setPercentage(value)
        setcommissionValue(value)
    }
    function amountcommissionValue(value) {

        setcommissionValue(value)
    }
    function handleChange(value, q) {
        const myArray = value.split("&&");
        settuitionFee(myArray[1])
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
                settuitionFee(data.universityCommission.fee)
                console.log("data.universityCommission.commissionType")
                console.log(data.universityCommission.commissionType)

                setEditcommissionType(data.universityCommission.commissionType)
                setcommissionValue(data.universityCommission.commissionValue)
                setEdittimeType(data.universityCommission.timeType)
                settimeValue(data.universityCommission.timeValue)
                setcommissionTimeChecked(data.universityCommission.timeType)
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
        setalreadySetCommission("")
        setcourseName("")
        settuitionFee("")
        setcommissionChecked("")
        setcommissionValue("")
        setcommissionTimeChecked("")
        settimeValue("")
        setdisplaymyAmount("none")
        setdisplayPercentage("none")
        setdisplaymany("none")
        setdisplayone("none")
    }
    let handleAddSubmit = (event) => {
        setcommissionCheckedError("")
        setcommissionValueError("")
        settimeTypeError("")
        settimeValueError("")
        setalreadySetCommission("")
        event.preventDefault();
        if (commissionChecked === "" || commissionChecked === undefined) {
            setcommissionCheckedError("Please Check Commission Type")
        }
        else if (commissionValue === "" || commissionValue === undefined) {
            setcommissionValueError("Please Enter Commission Value")
        }
        else if (commissionTimeChecked === "" || commissionTimeChecked === undefined) {
            settimeTypeError("Please Enter Commission Time")
        }
        else if (timeValue === "" || timeValue === undefined) {
            settimeValueError("Please Enter Commission Time Value")
        }
        else {

            setmyloader("true")
            const obj1 = new FormData();
            obj1.append("courseName", courseName);
            obj1.append("fee", tuitionFee);
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
                    setmyloader("false")
                    if (data.success === true) {
                        setaddWidth("0");
                        setsuccessMessage("Commisssion Added")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)
                        setcourseName("")
                        settuitionFee("")
                        setcommissionChecked("")
                        setcommissionValue("")
                        setcommissionTimeChecked("")
                        settimeValue("")
                        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/commissions';
                        fetch(url, {
                            method: 'GET',
                            headers: { 'Authorization': mounted }
                        })
                            .then(response => response.json())
                            .then(data => {
                                setcommissionData(data.universityCommissions)
                            })
                    }
                    if (data.success === false) {
                        setalreadySetCommission(data.message)

                    }
                })

        }
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
        setwidth("0px");
    }
 
    let handleEditSubmit = (event) => {
        event.preventDefault();
        setwidth("0");
        setmyloader("true")
        const obj1 = new FormData();
        obj1.append("courseName", courseName);
        obj1.append("fee", tuitionFee);
        obj1.append("commissionType", EditcommissionType);
        obj1.append("commissionValue", commissionValue);
        obj1.append("timeType", commissionTimeChecked);
        obj1.append("timeValue", timeValue);
        const url2 = process.env.REACT_APP_SERVER_URL + 'university/commissions/' + Editid
        fetch(url2, {
            method: 'put',
            headers: { 'Authorization': mounted },
            body: obj1
        })
            .then(response => response.json())
            .then(data => {
                setmyloader("false")
                setaddWidth("0");
                setsuccessMessage("Commisssion Updated")
                setTimeout(() => setsubmitSuccess(""), 3000);
                setsubmitSuccess(1)
                const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/commissions';
                fetch(url, {
                    method: 'GET',
                    headers: { 'Authorization': mounted }
                })
                    .then(response => response.json())
                    .then(data => {
                        setcommissionData(data.universityCommissions)
                        const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/commissions';
                        fetch(url, {
                            method: 'GET',
                            headers: { 'Authorization': mounted }
                        })
                            .then(response => response.json())
                            .then(data => {
                                setcommissionData(data.universityCommissions)
                            })
                    })
            })
    }
    return (
        <div className="container">
            {loader === "true" ?
                <Loader />
                : null}
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
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
                        setmyloader("true")
                        const url2 = process.env.REACT_APP_SERVER_URL + 'university/commissions/' + deleteId
                        fetch(url2, {
                            method: 'delete',
                            headers: { 'Authorization': mounted }
                        })
                            .then(response => response.json())
                            .then(data => {
                                setmyloader("false")

                                setaddWidth("0");
                                setsuccessMessage("Commisssion Deleted")
                                setTimeout(() => setsubmitSuccess(""), 3000);
                                setsubmitSuccess(1)
                                const url = process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/commissions';
                                fetch(url, {
                                    method: 'GET',
                                    headers: { 'Authorization': mounted }
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        setcommissionData(data.universityCommissions)
                                    })
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

                <button type="button" onClick={() => handleAdd()} className="btn btn-outline-success"
                    title="Add Commission" data-toggle="tooltip" data-placement="right"
                ><span>
                        <FontAwesomeIcon icon={faPlus} />
                    </span> Add Commission</button>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="card shadow mb-4">
                            <div className="table-responsive-sm">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
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
                                                    <td>{i + 1}</td>
                                                    <td>{object.courseName}</td>
                                                    <td>{object.fee}</td>
                                                    <td>{object.commissionValue}</td>
                                                    <td>{object.timeValue}</td>
                                                    <td>
                                                        <button title="Delete" className="btn btn-danger btn-sm vbtn" onClick={() => handleDelete(object._id)}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                        <button title="Edit" className="btn btn-success btn-sm " onClick={() => handleEditClick(object._id)}>                                        <FontAwesomeIcon icon={faPen} />
                                                        </button>
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
                                        <a
                                            title="Close" data-toggle="tooltip" data-placement="right"
                                            className="closebtn" onClick={closeaddbox} >&times;</a>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <h3>Add Commission</h3>
                                    </div>
                                </div>
                                <div className="table-responsive ">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="row">   <div className="col-xl-12 col-lg-7">
                                                <div className="card shadow mb-4">
                                                    <div className="card shadow mb-4">
                                                        <div id="accordion">
                                                            <div className="card-body">
                                                                <div className="from-block">
                                                                </div>
                                                                <form onSubmit={handleAddSubmit}>
                                                                    <div className="mb-3">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <label className="form-label">Course Name *</label>

                                                                                <select className="form-control"
                                                                                    required
                                                                                    onChange={(e) => handleChange(e.target.value)}
                                                                                    
                                                                                    
                                                                                    >

                                                                                    <option value="" >Select Course Name</option>
                                                                                    {data.map((object, i) => {
                                                                                        return (

                                                                                            <option
                                                                                                onClick={(e) => handleClick(object.tuitionFee)}

                                                                                                value={object.courseName + "&&" + object.tuitionFee} key={i}>{object.courseName}</option>
                                                                                        )
                                                                                    })}
                                                                                </select>
                                                                                <div style={{ color: "red" }}> {alreadySetCommission}</div>

                                                                            </div>

                                                                            <div className="col-md-6">
                                                                                <label className="form-label">Select Tuition Fee *</label>
                                                                                <select className="form-control">
                                                                                    <option value={tuitionFee}> {tuitionFee}</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className="row mt-3">


                                                                            <div className="col-md-6">
                                                                                <fieldset
                                                                                >
                                                                                    <label className="form-label">Commision *</label><br />
                                                                                    <div className="form-check form-check-inline">

                                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"

                                                                                            checked={commissionChecked === "fixed"}
                                                                                            onChange={(e) => changecommissionChecked("fixed")}
                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                                            Fixed
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="form-check form-check-inline">
                                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"

                                                                                            checked={commissionChecked === "variable"}
                                                                                            onChange={(e) => changecommissionChecked("variable")}

                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                                            Variable
                                                                                        </label>
                                                                                    </div>
                                                                                </fieldset>
                                                                                <div style={{ color: "red" }}> {commissionCheckedError}</div>
                                                                            </div>

                                                                            <div className="col-md-6">
                                                                                <div style={{ display: displaymyAmount }}>
                                                                                    <label className="form-label" >Enter Amount</label>
                                                                                    <input type="number"
                                                                                        onChange={e => amountcommissionValue(e.target.value)}
                                                                                        className="form-control" placeholder="" name="enteramount" />
                                                                                </div>
                                                                                <div style={{ display: displayPercentage }}>
                                                                                    <label className="form-label" >Enter Percentage(%)</label>
                                                                                    <input type="number" className="form-control" placeholder="" name="enter Percentage"
                                                                                        onChange={e => percentagecommissionValue(e.target.value)}
                                                                                    />
                                                                                    <span>The Total commission is {Percentage}</span>
                                                                                </div>
                                                                                <div style={{ color: "red" }}> {commissionValueError}</div>

                                                                            </div>
                                                                        </div>
                                                                        <div className="row mt-3">
                                                                            <div className="col-md-6">
                                                                                <fieldset
                                                                                >
                                                                                    <label className="form-label">Commision Set is *</label><br />
                                                                                    <div className="form-check form-check-inline">
                                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"

                                                                                            checked={commissionTimeChecked === "one time"}
                                                                                            onChange={(e) => changecommissionTimeChecked("one time")}
                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                                            Only One time
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="form-check form-check-inline">
                                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"

                                                                                            checked={commissionTimeChecked === "every time"}
                                                                                            onChange={(e) => changecommissionTimeChecked("every time")}
                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                                                            On Every Time
                                                                                        </label>
                                                                                    </div>
                                                                                </fieldset>
                                                                                <div style={{ color: "red" }}> {timeTypeError}</div>

                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <div style={{ display: displayone }}>
                                                                                    <label htmlFor="lname" className="form-label">Enter Commission For One Time</label>
                                                                                    <input type="number" className="form-control" placeholder="Enter tuitionFee" name="percentage "
                                                                                        value={timeValue}
                                                                                        onChange={(e) => settimeValue(e.target.value)}
                                                                                    />
                                                                                </div>
                                                                                <div style={{ display: displaymany }}>
                                                                                    <label htmlFor="lname" className="form-label">Enter Commission For Every Semester </label>
                                                                                    <input type="number" className="form-control" placeholder="Enter tuitionFee" name="percentage "
                                                                                        value={timeValue}
                                                                                        onChange={(e) => settimeValue(e.target.value)}
                                                                                    />
                                                                                </div>
                                                                                <div style={{ color: "red" }}> {timeValueError}</div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <button type="submit" className="btn btn-success"

                                                                            title="Submit" data-toggle="tooltip" data-placement="right"
                                                                        >Submit</button>
                                                                    </div>
                                                                </form>
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
                        <div className="card-body course-sidenav" id="mySideview"
                            style={{ width: width }}
                        >
                            <div className="student-view">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6 className="mt-2 font-weight-bold text-primary"></h6>
                                    </div>
                                    <div className="col-md-6">
                                        <a
                                            title="Close" data-toggle="tooltip" data-placement="right"
                                            className="closebtn" onClick={closeaddbox} >&times;</a>

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
                                                <div className="col-xl-12 col-lg-7">
                                                    <h3>Edit Commission</h3>
                                                    <div className="card shadow mb-4">
                                                        <div className="card shadow mb-4">
                                                            <div id="accordion">
                                                                <div className="card-body">
                                                                    <div className="from-block">
                                                                    </div>
                                                                    <form onSubmit={handleEditSubmit}>
                                                                        <div className="mb-3">
                                                                            <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <label className="form-label">Course Name *</label>
                                                                                    <select className="form-control" onChange={(e) => handleChange(e.target.value)}>
                                                                                        <option value={courseName} >{courseName}</option>
                                                                                        {data.map((object, i) => {
                                                                                            return (
                                                                                                <option
                                                                                                    onClick={(e) => handleClick(object.tuitionFee)}

                                                                                                    value={object.courseName + "&&" + object.tuitionFee} key={i}>{object.courseName}</option>
                                                                                            )
                                                                                        })}
                                                                                    </select>
                                                                                </div>

                                                                                <div className="col-md-6">
                                                                                    <label className="form-label">Select Tuition Fee *</label>
                                                                                    <select className="form-control" >
                                                                                        <option value={tuitionFee}> {tuitionFee}</option>

                                                                                    </select>
                                                                                </div>
                                                                            </div>

                                                                            <div className="row mt-3">

                                                                                <div className="col-md-6">
                                                                                    <fieldset onChange={(e) => setEditcommissionData(e.target.value)
                                                                                    }

                                                                                    >
                                                                                        <label className="form-label">Commisionhhh{EditcommissionType} *</label><br />


                                                                                        <div className="form-check form-check-inline">


                                                                                            <input className="form-check-input" type="radio" onChange={(e) =>
                                                                                                setEditcommissionData(e.target.value)}
                                                                                                value="fixed"
                                                                                                checked={EditcommissionType === "fixed"}


                                                                                            />
                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                                                Fixed
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="form-check form-check-inline">
                                                                                            <input className="form-check-input" type="radio" onChange={(e) =>
                                                                                                setEditcommissionData(e.target.value)}
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
                                                                                        <label className="form-label">Enter Amount</label>
                                                                                        <input type="number" value={commissionValue} onChange={e => amountcommissionValue(e.target.value)}
                                                                                            className="form-control" placeholder="" name="enteramount" />
                                                                                    </div>
                                                                                    <div style={{ display: displayEditPercentage }}>
                                                                                        <label className="form-label">Enter Percentage(%)</label>
                                                                                        <input type="number" className="form-control" placeholder="" name="enter Percentage" onChange={e =>
                                                                                            percentagecommissionValue(e.target.value)}
                                                                                        />
                                                                                    </div>
                                                                                    <span>The Total commission is {commissionValue}</span>
                                                                                </div>
                                                                            </div>


                                                                            <div className="row mt-3">
                                                                                <div className="col-md-6">
                                                                                    <fieldset
                                                                                    >
                                                                                        <label className="form-label">Commision Set is *</label><br />
                                                                                        <div className="form-check form-check-inline"   >

                                                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"

                                                                                                checked={commissionTimeChecked === "one time"}
                                                                                                onChange={(e) => changecommissionTimeChecked("one time")}
                                                                                            />
                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                                                Only One time
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="form-check form-check-inline" >
                                                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"

                                                                                                checked={commissionTimeChecked === "every time"}
                                                                                                onChange={(e) => changecommissionTimeChecked("every time")}
                                                                                            />
                                                                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                                                                On Every Time
                                                                                            </label>
                                                                                        </div>
                                                                                    </fieldset>
                                                                                    <div style={{ color: "red" }}> {timeTypeError}</div>

                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <div style={{ display: displayEditone }}>
                                                                                        <label htmlFor="lname" className="form-label">Enter Commission For One Time</label>
                                                                                        <input type="number" className="form-control" placeholder="Enter tuitionFee" name="percentage "
                                                                                            value={timeValue}
                                                                                            onChange={(e) => settimeValue(e.target.value)}
                                                                                        />
                                                                                    </div>
                                                                                    <div style={{ display: displayEditmany }}>
                                                                                        <label htmlFor="lname" className="form-label">Enter Commission For Every Semester </label>
                                                                                        <input type="number" className="form-control" placeholder="Enter tuitionFee" name="percentage "
                                                                                            value={timeValue}
                                                                                            onChange={(e) => settimeValue(e.target.value)}
                                                                                        />
                                                                                    </div>
                                                                                    <div style={{ color: "red" }}> {timeValueError}</div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <button type="submit" className="btn btn-success"
                                                                                title="Submit" data-toggle="tooltip" data-placement="right"

                                                                            >Submit</button>
                                                                        </div>
                                                                    </form>
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
    );
}

