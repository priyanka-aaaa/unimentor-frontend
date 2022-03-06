
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../../Home/Loader';

const WorkExperienceProfile = () => {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [formValues, setFormValues] = useState([{
        status: '', type: "", organization: "", designation: "", role: "", started: '', ended: "", country: "", city: "",
        _id: "null"
    }])
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [deleteId, setdeleteId] = useState("");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [loader, setmyloader] = useState("false");
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);

            var studentId = mydata.data.student._id;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)


        const url = process.env.REACT_APP_SERVER_URL + 'student/experiences';
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': mounted,

            }
        })
            .then(response => response.json())
            .then(data => {
                var myresults = data.studentExperiences;
                if (Object.keys(myresults).length === 0) {

                }
                else {
                    setFormValues(data.studentExperiences)
                }
            })
    }, [])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, {
            status: '', type: "", organization: "", designation: "", role: "", started: '', ended: "", country: "", city: "",
            _id: "null"
        }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        var myvalues = JSON.stringify(formValues);
        setmyloader("true")

        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'student/experiences', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {

                        setmyloader("false")
                        if (res.data.success === true) {
                    

                            setsuccessMessage("Work Experience Updated")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
                            const url = process.env.REACT_APP_SERVER_URL + 'student/experiences';
                            fetch(url, {
                                method: 'GET',
                                headers: {
                                    'Authorization': mounted,

                                }
                            })
                                .then(response => response.json())
                                .then(data => {
                                    var myresults = data.studentExperiences;
                                    if (Object.keys(myresults).length === 0) {

                                    }
                                    else {
                                        setFormValues(data.studentExperiences)
                                    }
                                })
                        }

                    })
                    .catch(error => {

                    });

            }
            else {

                await axios.put(process.env.REACT_APP_SERVER_URL + 'student/experiences/' + item._id, item, { headers: { 'Authorization': mounted } })

                    .then(function (res) {
                        setmyloader("false")

                        if (res.data.success === true) {
                            setsuccessMessage("Work Experience Updated")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
                            const url = process.env.REACT_APP_SERVER_URL + 'student/experiences';
                            fetch(url, {
                                method: 'GET',
                                headers: {
                                    'Authorization': mounted,

                                }
                            })
                                .then(response => response.json())
                                .then(data => {
                                    var myresults = data.studentExperiences;
                                    if (Object.keys(myresults).length === 0) {

                                    }
                                    else {
                                        setFormValues(data.studentExperiences)
                                    }
                                })
                        }

                    })
                    .catch(error => {

                    });
            }
        })


    }

    function setworkStatus(i, myvalue) {
        let newFormValues = [...formValues];
        newFormValues[i]["status"] = myvalue;
        setFormValues(newFormValues);
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
             {showSweetAlert === "1" ? <SweetAlert
                warning
                showCancel
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"

                title="Are you sure?"
                onConfirm={(value) => {
                    setshowSweetAlert("0");
                    setmyloader("true")
                    axios.delete(process.env.REACT_APP_SERVER_URL + 'student/experiences/' + deleteId, { headers: { 'Authorization': mounted } })
                        .then(function (res) {
                            setmyloader("false")
                            if (res.data.success === true) {
                                setsuccessMessage("Document deleted")
                                setTimeout(() => setsubmitSuccess(""), 3000);
                                setsubmitSuccess(1)
                                const url = process.env.REACT_APP_SERVER_URL + 'student/experiences';
                                fetch(url, {
                                    method: 'GET',
                                    headers: {
                                        'Authorization': mounted,

                                    }
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        var myresults = data.studentExperiences;
                                        if (Object.keys(myresults).length === 0) {

                                        }
                                        else {
                                            setFormValues(data.studentExperiences)
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
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse6"><strong>6</strong>
                    Work Experience
                </a>
                <div id="collapse6" className="collapse" data-bs-parent="#accordion">
                    {/* <form> */}
                    <form onSubmit={handleSubmit}>

                        {formValues.map((element, index) => (
                            <div key={index}>
                                <a onClick={() => handleDeleteClick(element._id)}>
                                    <FontAwesomeIcon icon={faTrash} />


                                </a>

                                <div className="row">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                        <div className="form-group">
                                            <label>Work Status <span className="text-danger">
                                                *</span></label><br />
                                            <label className="ant-radio-wrapper"><span className="ant-radio">
                                                <input
                                                   required
                                                    onChange={(e) => setworkStatus(index, "Ongoing")}
                                                    checked={element.status === "Ongoing"}
                                                 




                                                    name="status" type="radio" className="ant-radio-input" />
                                                <span className="ant-radio-inner"></span></span><span>Ongoing</span></label>
                                            <label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                               required
                                                onChange={(e) => setworkStatus(index, "Completed")}
                                                checked={element.status === "Completed"}
                                             



                                                name="status" type="radio" className="ant-radio-input" /><span className="ant-radio-inner"></span></span><span>Completed</span></label>
                                            <br />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                        <div className="form-group"><label htmlFor="work_type">Work Type <span className="text-danger"> *</span></label><select
                                            value={element.type || ""} onChange={e => handleChange(index, e)}
                                            required
                                            className="form-control" id="work_type" name="type">
                                            <option value="">Select</option>
                                            <option value="Full-time">Full-time</option>
                                            <option value="Part-time">Part-time</option>
                                            <option value="Internship">Internship</option>
                                        </select></div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                        <div className="form-group"><label htmlFor="company_name">Name of
                                            Organization <span className="text-danger">
                                                *</span></label><input
                                                value={element.organization || ""} onChange={e => handleChange(index, e)}
required

                                                type="text" className="form-control" id="company_name" name="organization" placeholder="Name of Organization" /></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group"><label htmlFor="work_designation">Designation</label><input
                                            value={element.designation || ""} onChange={e => handleChange(index, e)}



                                            type="text" className="form-control" id="work_designation" name="designation" placeholder="Designation" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <div className="form-group"><label htmlFor="role_description">Job
                                            Role</label><input
                                                value={element.role || ""} onChange={e => handleChange(index, e)}

                                                type="text" className="form-control" id="role_description" name="role" placeholder="Job Role" /></div>
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
                                        <label>Country</label>
                                        <select
                                            value={element.country || ""} onChange={e => handleChange(index, e)}

                                            className="form-control" id="job_country"
                                            name="country">
                                            <option >Select Country</option>
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
                                                value={element.city || ""} onChange={e => handleChange(index, e)}

                                                type="text"
                                                className="form-control" id="job_city"
                                                placeholder="City/Town" name="city" /></div>
                                    </div>

                                </div>
                            </div>
                        ))}
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6 text-right">

                                    <button type="button" className="btn btn-success " onClick={() => addFormFields()}>Add New</button>

                                    <button type="submit" className="btn btn-secondary">Save
                                    </button>
                                    <button type="submit" data-bs-toggle="collapse" href="#collapse4" className="btn btn-success ">Save &
                                        Next</button>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default WorkExperienceProfile
