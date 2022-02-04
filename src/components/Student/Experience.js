


import React, { useState, useEffect } from "react";
import axios from 'axios';

const Experience = () => {




    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [formValues, setFormValues] = useState([{

        status: "", type: "", organization: "", designation: "", role: "", started: "", ended: "", country: "", city: "",
        _id: "null"
    }])
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
            console.log(mydata);
            var studentId = mydata.data.student._id;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)
        //start for select course
        const url = process.env.REACT_APP_SERVER_URL + 'student/experiences';
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': mounted,

            }
        })
            .then(response => response.json())
            .then(data => {
                var myresults = data.studentFamilies;
                if (Object.keys(myresults).length === 0) {

                }
                else {
                    setFormValues(data.studentFamilies)
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
            status: "", type: "", organization: "", designation: "", role: "", started: "", ended: "", country: "", city: "",
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

        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'student/experiences', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {


                        if (res.data.success === true) {
                            // alert("courses update successfully");
                        }
                        else {
                            alert("error");
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                    });

            }
            else {

                await axios.put(process.env.REACT_APP_SERVER_URL + 'student/experiences/' + item._id, item, { headers: { 'Authorization': mounted } })

                    .then(function (res) {

                        if (res.data.success === true) {
                            setsuccessMessage("Family Updated")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
                        }
                        else {
                            alert("error");
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                    });
            }
        })


    }
    function handleDelete(value) {
        const url2 = process.env.REACT_APP_SERVER_URL + 'student/experiences/' + value
        fetch(url2, {
            method: 'delete',
            headers: { 'Authorization': mounted }

        })
            .then(response => response.json())
            .then(data => {

                setsuccessMessage("Experience Deleted")
                setTimeout(() => setsubmitSuccess(""), 3000);
                setsubmitSuccess(1)
                //start for get commission


                //start for get commission
                const url = process.env.REACT_APP_SERVER_URL + 'student/experiences';
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': mounted,

                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        var myresults = data.studentFamilies;
                        if (Object.keys(myresults).length === 0) {

                        }
                        else {
                            setFormValues(data.studentFamilies)
                        }
                    })
                //end for get commission

                //end for get commission
            })
    }
    return (
        <div>
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="card">
                                        <a className="card-header" data-bs-toggle="collapse" href="#collapse6">
                                            <strong>6</strong>  Work Experience
                                        </a>
                                        <div id="collapse6" className="collapse" data-bs-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-block">
                                                    <form onSubmit={Personal_experience}>
                                                        <div className="row">
                                                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                <div className="form-group">
                                                                    <label>Work Status <span className="text-danger">
                                                                        *</span></label><br />
                                                                    <label className="ant-radio-wrapper"><span className="ant-radio">
                                                                        <input
                                                                            value={experiencestatus}
                                                                            onChange={(e) => setexperiencestatus(e.target.value)}
                                                                            name="is_current_job_0" type="radio" className="ant-radio-input" value="Ongoing" />
                                                                        <span className="ant-radio-inner"></span></span><span>Ongoing</span></label>
                                                                    <label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                                        value={experiencestatus}
                                                                        onChange={(e) => setexperiencestatus(e.target.value)} name="is_current_job_0" type="radio" className="ant-radio-input" value="Completed" /><span className="ant-radio-inner"></span></span><span>Completed</span></label>
                                                                    <br />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                <div className="form-group"><label htmlFor="work_type">Work Type <span className="text-danger"> *</span></label><select
                                                                    value={experiencetype}
                                                                    onChange={(e) => setexperiencetype(e.target.value)}
                                                                    className="form-control" id="work_type" name="work_type">
                                                                    <option >Select</option>
                                                                    <option value="Full-time">Full-time</option>
                                                                    <option value="Part-time">Part-time</option>
                                                                    <option value="Internship">Internship</option>
                                                                </select></div>
                                                            </div>
                                                            <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                <div className="form-group"><label htmlFor="company_name">Name of
                                                                    Organization <span className="text-danger">
                                                                        *</span></label><input
                                                                        value={experienceorganization}
                                                                        onChange={(e) => setexperienceorganization(e.target.value)}
                                                                        type="text" className="form-control" id="company_name" name="company_name" placeholder="Name of Organization" /></div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="work_designation">Designation</label><input
                                                                    value={experiencedesignation}
                                                                    onChange={(e) => setexperiencedesignation(e.target.value)}
                                                                    type="text" className="form-control" id="work_designation" name="designation" placeholder="Designation" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group"><label htmlFor="role_description">Job
                                                                    Role</label><input
                                                                        value={experiencerole}
                                                                        onChange={(e) => setexperiencerole(e.target.value)}
                                                                        type="text" className="form-control" id="role_description" name="role_description" placeholder="Job Role" /></div>
                                                            </div>
                                                        </div>



                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start_from">Started From</label>
                                                                    <input
                                                                        value={experiencestarted}
                                                                        onChange={(e) => setexperiencestarted(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="start_from">Ended On</label>
                                                                    <input
                                                                        value={experienceended}
                                                                        onChange={(e) => setexperienceended(e.target.value)}
                                                                        type="date" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <label>Country</label>
                                                                <select
                                                                    value={experiencecountry}
                                                                    onChange={(e) => setexperiencecountry(e.target.value)}
                                                                    className="form-control" id="job_country"
                                                                    name="job_country">
                                                                    <option value="">Select Country</option>
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
                                                                        value={experiencecity}
                                                                        onChange={(e) => setexperiencecity(e.target.value)}
                                                                        type="text"
                                                                        className="form-control" id="job_city"
                                                                        placeholder="City/Town" name="job_city" value="" /></div>
                                                            </div>

                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="row">
                                                                <div className="col-md-6"></div>
                                                                <div className="col-md-6 text-right">
                                                                    <button type="button" className="btn btn-success ">Add New
                                                                    </button>
                                                                    <button type="submit" className="btn btn-secondary">Save
                                                                    </button>
                                                                    <button type="submit" data-bs-toggle="collapse" className="btn btn-success" href="#collapse7">Save
                                                                        Next</button>
                                                                </div>

                                                            </div>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        </div>
    );
}

export default Experience
