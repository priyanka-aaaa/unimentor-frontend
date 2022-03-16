import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from '../../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import SweetAlert from 'react-bootstrap-sweetalert';

export default function ExtraCurricultarActivityProfile() {
 const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [formValues, setFormValues] = useState([{
        Activitiestatus: "", activity: "", position: "", description: "", started: "", ended: "", apply: "",

        _id: "null"
    }])
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [deleteId, setdeleteId] = useState("");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [loader, setmyloader] = useState("false");
    useEffect(() => {
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
        const url = process.env.REACT_APP_SERVER_URL + 'student/activities';
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': mounted,
            }
        })
            .then(response => response.json())
            .then(data => {
                var myresults = data.studentActivities;
                if (Object.keys(myresults).length === 0) {
                }
                else {
                    setFormValues(data.studentActivities)
                }
            })
    }, [])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }
    function setstudentActivitiestatus(i, myvalue) {
        let newFormValues = [...formValues];
        newFormValues[i]["Activitiestatus"] = myvalue;
        setFormValues(newFormValues);
    }
    function setstudentApply(i, myvalue) {
        let newFormValues = [...formValues];
        newFormValues[i]["apply"] = myvalue;
        setFormValues(newFormValues);
    }
    let addFormFields = () => {
        setFormValues([...formValues, {
            Activitiestatus: "", activity: "", position: "", description: "", started: "", ended: "", apply: "",
            _id: "null"
        }])
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        setmyloader("true")
        var myvalues = JSON.stringify(formValues);
        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'student/activities', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        setmyloader("false")

                        if (res.data.success === true) {
                            setsuccessMessage("ExtraCurricultural Activity Updated")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
                            const url = process.env.REACT_APP_SERVER_URL + 'student/activities';
                            fetch(url, {
                                method: 'GET',
                                headers: {
                                    'Authorization': mounted,
                                }
                            })
                                .then(response => response.json())
                                .then(data => {
                                    var myresults = data.studentActivities;
                                    if (Object.keys(myresults).length === 0) {
                                    }
                                    else {
                                        setFormValues(data.studentActivities)
                                    }
                                })
                        }
                    })
                    .catch(error => {
                    });
            }
            else {
                await axios.put(process.env.REACT_APP_SERVER_URL + 'student/activities/' + item._id, item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        setmyloader("false")

                        if (res.data.success === true) {
                            setsuccessMessage("ExtraCurricultural Activity Updated")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
                            const url = process.env.REACT_APP_SERVER_URL + 'student/activities';
                            fetch(url, {
                                method: 'GET',
                                headers: {
                                    'Authorization': mounted,
                                }
                            })
                                .then(response => response.json())
                                .then(data => {
                                    var myresults = data.studentActivities;
                                    if (Object.keys(myresults).length === 0) {
                                    }
                                    else {
                                        setFormValues(data.studentActivities)
                                    }
                                })
                        }
                    })
                    .catch(error => {
                    });
            }
        })
    }
    let handleDeleteClick = (value) => {
        setshowSweetAlert("1")
        setdeleteId(value)
    }
    return (
        <div>
            {loader === "true" ?
                <Loader />
                : null}
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            {showSweetAlert === "1" ? <SweetAlert
                warning
                showCancel
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"

                title="Are you sure?"
                onConfirm={(value) => {
                    setshowSweetAlert("0");
                    setmyloader("true")
                    axios.delete(process.env.REACT_APP_SERVER_URL + 'student/activities/' + deleteId, { headers: { 'Authorization': mounted } })
                        .then(function (res) {
                            setmyloader("false")
                            if (res.data.success === true) {
                                setsuccessMessage("ExtraCurricultural Activity Deleted")
                                setTimeout(() => setsubmitSuccess(""), 3000);
                                setsubmitSuccess(1)
                                const url = process.env.REACT_APP_SERVER_URL + 'student/activities';
                                fetch(url, {
                                    method: 'GET',
                                    headers: {
                                        'Authorization': mounted,

                                    }
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        var myresults = data.studentActivities;
                                        if (Object.keys(myresults).length === 0) {
                                            setFormValues([{
                                                Activitiestatus: "", activity: "", position: "", description: "", started: "", ended: "", apply: "",
                                                _id: "null"
                                            }])
                                        }
                                        else {
                                            setFormValues(data.studentActivities)
                                        }
                                    })

                            }
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
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse7"><strong>7</strong>
                    Extra Curricular Activities
                </a>
                <div id="collapse7" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        {/* <form> */}
                        <form onSubmit={handleSubmit}>

                            {formValues.map((element, index) => (
                                <div key={index}>


                                    <div className="row">
                                        <div className="col-12 col-sm-5 col-md-5 col-lg-5">
                                            <div className="form-group">
                                                <label>Acitvity Status <span className="text-danger">
                                                    *</span></label>
                                                <br />

                                                <label className="ant-radio-wrapper"><span className="ant-radio">
                                                    <input name="Activitiestatus"

                                                        onChange={(e) => setstudentActivitiestatus(index, "Ongoing")}
                                                        checked={element.Activitiestatus === "Ongoing"}
                                                        required



                                                        type="radio" className="ant-radio-input"
                                                    /><span
                                                        className="ant-radio-inner"></span></span>
                                                    <span>Ongoing</span></label>
                                                <label className="ant-radio-wrapper ant-radio-wrapper-checked">
                                                    <span className="ant-radio ant-radio-checked">
                                                        <input
                                                            onChange={(e) => setstudentActivitiestatus(index, "Completed")}
                                                            checked={element.Activitiestatus === "Completed"}
                                                            required



                                                            name="Activitiestatus" type="radio" className="ant-radio-input"
                                                        />
                                                        <span className="ant-radio-inner"></span></span>
                                                    <span>Completed</span></label> <br />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label>Activity <span className="text-danger"> *</span>
                                            </label>
                                                <select
                                                    required
                                                    value={element.activity || ""} onChange={e => handleChange(index, e)}

                                                    className="form-control" name="activity">
                                                    <option value="">Select Activity</option>
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
                                        <div className="col-12 col-sm-1 col-md-1 col-lg-1 text-right mt-4">
                                            {element._id !== "null" ?
                                                <a title="Delet" className="btn  btn-danger deleteFamily" onClick={() => handleDeleteClick(element._id)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </a>
                                                : null}
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label htmlFor="designation">Position/Designation <span
                                                className="text-danger"> *</span></label><input
                                                    value={element.position || ""} onChange={e => handleChange(index, e)}
                                                    required
                                                    type="text" className="form-control" id="designation" name="position"
                                                    placeholder="Position/Designation" /></div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label htmlFor="description">Description
                                            </label><input
                                                    value={element.description || ""} onChange={e => handleChange(index, e)}

                                                    type="text" className="form-control" id="description" name="description"
                                                    placeholder="Description" /></div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="start_from">Started From</label>
                                                <input
                                                    value={element.started || ""} onChange={e => handleChange(index, e)}

                                                    type="date" className="form-control" name="started" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="start_from">Ended On</label>
                                                <input
                                                    value={element.ended || ""} onChange={e => handleChange(index, e)}

                                                    type="date" className="form-control" name="ended" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label>Would you be interested in
                                                participating in similar activities at university where
                                                you apply?<span className="text-danger">
                                                    *</span></label><br /><label className="ant-radio-wrapper"><span
                                                        className="ant-radio"><input
                                                            onChange={(e) => setstudentApply(index, "yes")}
                                                            checked={element.apply === "yes"}
                                                            required




                                                            name="apply" type="radio" className="ant-radio-input"
                                                        /><span
                                                            className="ant-radio-inner"></span></span><span>Yes</span></label><label
                                                                className="ant-radio-wrapper ant-radio-wrapper-checked"><span
                                                                    className="ant-radio ant-radio-checked"><input
                                                            onChange={(e) => setstudentApply(index, "no")}
                                                            checked={element.apply === "no"}
                                                            required




                                                            name="apply" type="radio" className="ant-radio-input"
                                                        /><span
                                                            className="ant-radio-inner"></span></span><span>No</span></label>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6 text-right">

                                        <button title="Add New Activities" type="button" className="btn btn-success " onClick={() => addFormFields()}>Add New</button>

                                        <button title="Save" type="submit" className="btn btn-secondary ml-2">Save
                                        </button>
                                        <button title="Save & Next" type="submit" data-bs-toggle="collapse" href="#collapse4" className="btn btn-success ">Save &
                                            Next</button>
                                    </div>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

