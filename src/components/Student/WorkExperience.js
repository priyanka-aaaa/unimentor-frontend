
import React, { useState, useEffect } from "react";
import axios from 'axios';

const WorkExperience = () => {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [formValues, setFormValues] = useState([{
        status: '', type: "", organization: "", designation: "", role: "", started: '', ended: "", country: "", city: "",
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

        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'student/experiences', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {


                        if (res.data.success === true) {
                            setsuccessMessage("Work Experience Updated")
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
            else {

                await axios.put(process.env.REACT_APP_SERVER_URL + 'student/experiences/' + item._id, item, { headers: { 'Authorization': mounted } })

                    .then(function (res) {

                        if (res.data.success === true) {
                            setsuccessMessage("Work Experience Updated")
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
        console.log("url2");
        console.log(url2);
        fetch(url2, {
            method: 'delete',
            headers: { 'Authorization': mounted }

        })
            .then(response => response.json())
            .then(data => {

                setsuccessMessage("Family Deleted")
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
                        var myresults = data.studentExperience;
                        if (Object.keys(myresults).length === 0) {

                        }
                        else {
                            setFormValues(data.studentExperience)
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
                <a className="card-header" data-bs-toggle="collapse" href="#collapse6"><strong>6</strong>
                    Work Experience
                </a>
                <div id="collapse6" className="collapse" data-bs-parent="#accordion">
                    {/* <form> */}
                    <form onSubmit={handleSubmit}>

                        {formValues.map((element, index) => (
                            <div key={index}>
                                <a onClick={() => handleDelete(element._id)}><i className="fas fa-trash-alt"></i></a>

                                <div className="row">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                        <div className="form-group">
                                            <label>Work Status <span className="text-danger">
                                                *</span></label><br />
                                            <label className="ant-radio-wrapper"><span className="ant-radio">
                                                <input
                                                    value={element.status || ""} onChange={e => handleChange(index, e)}


                                                    name="status" type="radio" className="ant-radio-input" value="Ongoing" />
                                                <span className="ant-radio-inner"></span></span><span>Ongoing</span></label>
                                            <label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                value={element.status || ""} onChange={e => handleChange(index, e)}

                                                name="status" type="radio" className="ant-radio-input" value="Completed" /><span className="ant-radio-inner"></span></span><span>Completed</span></label>
                                            <br />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                        <div className="form-group"><label htmlFor="work_type">Work Type <span className="text-danger"> *</span></label><select
                                            value={element.type || ""} onChange={e => handleChange(index, e)}

                                            className="form-control" id="work_type" name="type">
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
                                                value={element.organization || ""} onChange={e => handleChange(index, e)}


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

                                                type="date" className="form-control" name="ended"/>
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
                                                placeholder="City/Town" name="city"  /></div>
                                    </div>

                                </div>
                            </div>
                        ))}
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6 text-right">

                                    <button className="button add" type="button" className="btn btn-success " onClick={() => addFormFields()}>Add New</button>

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

export default WorkExperience
