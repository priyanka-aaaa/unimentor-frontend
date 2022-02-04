
import React, { useState, useEffect } from "react";
import axios from 'axios';



const Activity = () => {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [formValues, setFormValues] = useState([{
        activityStatus: "", activity: "", position: "", description: "", started: "", ended: "", apply: "",
        _id: "null"

    }])


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


        // const url = "university/courses";
        const url = process.env.REACT_APP_SERVER_URL + 'student/activities';

        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mounted }

        })
            .then(response => response.json())
            .then(data => {

                // this.setState({ data: data.universityCourses })


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

    let addFormFields = () => {
        setFormValues([...formValues, {
            activityStatus: "", activity: "", position: "", description: "", started: "", ended: "", apply: "",
            _id: "null"
        }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        console.log("ggg");
        event.preventDefault();
        var myvalues = JSON.stringify(formValues);

        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'student/activities/', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        console.log(res.data);
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
                await axios.put(process.env.REACT_APP_SERVER_URL + 'student/activities/' + item._id, item, { headers: { 'Authorization': mounted } })
                    // await axios.put('/university/61dab27e05671a193cca5f81/courses', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        console.log(res.data);
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

    return (
        <div>
              {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse7">
                    <strong>7</strong>     Extra Curricular Activities
                </a>
                <div id="collapse7" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        <div className="form-block">



                            <form onSubmit={handleSubmit}>
                                {formValues.map((element, index) => (
                                    <div key={index}>
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label>Acitvity Status <span className="text-danger">
                                                        *</span></label>
                                                    <br />
                                                    <label className="ant-radio-wrapper"><span className="ant-radio">
                                                        <input name="activity_status_0"
                                                            value={element.activityStatus || ""} onChange={e => handleChange(index, e)}


                                                            type="radio" className="ant-radio-input" value="Ongoing" /><span className="ant-radio-inner"></span></span>
                                                        <span>Ongoing</span></label>
                                                    <label className="ant-radio-wrapper ant-radio-wrapper-checked">
                                                        <span className="ant-radio ant-radio-checked">
                                                            <input
                                                                value={element.activityStatus || ""} onChange={e => handleChange(index, e)}

                                                                name="activity_status_0" type="radio" className="ant-radio-input" value="Completed" />
                                                            <span className="ant-radio-inner"></span></span>
                                                        <span>Completed</span></label> <br />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label>Activity <span className="text-danger"> *</span>
                                                </label>
                                                    <select
                                                        value={element.activity || ""} onChange={e => handleChange(index, e)}

                                                        className="form-control" name="activity">
                                                        <option >Select Activity</option>
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
                                        </div>


                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="designation">Position/Designation <span className="text-danger"> *</span></label><input
                                                    value={element.position || ""} onChange={e => handleChange(index, e)}

                                                    type="text" className="form-control" id="designation" name="designation" placeholder="Position/Designation" /></div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="description">Description
                                                </label><input
                                                        value={element.description || ""} onChange={e => handleChange(index, e)}

                                                        type="text" className="form-control" id="description" name="description" placeholder="Description" /></div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="start_from">Started From</label>
                                                    <input
                                                        value={element.started || ""} onChange={e => handleChange(index, e)}

                                                        type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="start_from">Ended On</label>
                                                    <input
                                                        value={element.ended || ""} onChange={e => handleChange(index, e)}

                                                        type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label>Would you be interested in
                                                    participating in similar activities at university where
                                                    you apply?<span className="text-danger">
                                                        *</span></label><br /><label className="ant-radio-wrapper"><span className="ant-radio"><input
                                                            value={element.apply || ""} onChange={e => handleChange(index, e)}


                                                            name="participation_interested_0" type="radio" className="ant-radio-input" value="yes" /><span className="ant-radio-inner"></span></span><span>Yes</span></label><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                            value={element.apply || ""} onChange={e => handleChange(index, e)}


                                                                name="participation_interested_0" type="radio" className="ant-radio-input" value="no" /><span className="ant-radio-inner"></span></span><span>No</span></label>
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
                                        <button className="button add" type="button" className="btn btn-success " onClick={() => addFormFields()}>Add New</button>

                                            <button type="submit" className="btn btn-secondary">Save
                                            </button>
                                            <button
                                                data-bs-toggle="collapse" href="#collapse8"


                                                type="submit" className="btn btn-success " >Save
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

export default Activity
