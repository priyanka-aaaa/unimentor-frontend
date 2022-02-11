
import React, { useState, useEffect } from "react";
import axios from 'axios';

const CoursesFee = () => {
    const [formValues, setFormValues] = useState([{
        courseName: "", duration: "", tuitionFee: "", studyField: "",
        fee: "", courseLevel: "", cgpa: "", eligibility: "", english: "", website: "", description: "", exam: "",
        _id: "null"

    }])
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);

            var myuniversityid = mydata.data.university._id;

            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        //start for select course


        // const url = "university/courses";
        const url = process.env.REACT_APP_SERVER_URL + 'university/' + myuniversityid + '/courses';
        fetch(url, {
            method: 'GET'

        })
            .then(response => response.json())
            .then(data => {
                var myresults = data.universityCourses;
                if (Object.keys(myresults).length === 0) {
                }
                else {
                    setFormValues(data.universityCourses)
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
            courseName: "", duration: "", tuitionFee: "", studyField: "",
            fee: "", courseLevel: "", cgpa: "", eligibility: "", english: "", website: "", description: "", exam: "",
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
                await axios.post(process.env.REACT_APP_SERVER_URL + 'university/courses', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {

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
            else {
                await axios.put(process.env.REACT_APP_SERVER_URL + 'university/courses/' + item._id, item, { headers: { 'Authorization': mounted } })

                    .then(function (res) {

                        if (res.data.success === true) {
                            setsuccessMessage("Courses Updated")
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
                <a className="card-header" data-bs-toggle="collapse" href="#collapse3"><strong>3</strong>
                    Courses & Fees
                </a>
                <div id="collapse3" className="collapse" data-bs-parent="#accordion">
                    {/* <form> */}
                    <form onSubmit={handleSubmit}>
                        <div className="card-body" >

                            <div className="from-block" >

                                {formValues.map((element, index) => (

                                    <div className="row" key={index}>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col">
                                                    <label className="form-label">Course name
                                                        *</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Course name" name="courseName"
                                                        value={element.courseName || ""} onChange={e => handleChange(index, e)}

                                                    // value={courseName}
                                                    // onChange={(e) => setcourseName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <label className="form-label">Duration
                                                    </label>
                                                    <input type="text" className="form-control"
                                                        placeholder="duration" name="duration"
                                                        value={element.duration || ""} onChange={e => handleChange(index, e)}

                                                    // value={duration}
                                                    // onChange={(e) => setduration(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <label className="form-label">Tuition fee</label>
                                                    <input type="text" className="form-control" placeholder="tuition fee"
                                                        name="tuitionFee"
                                                        // value={tuitionFee}
                                                        // onChange={(e) => settuitionFee(e.target.value)}
                                                        value={element.tuitionFee || ""} onChange={e => handleChange(index, e)}

                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label className="form-label">Study
                                                        *</label>
                                                    <select type="text" className="form-control" id="salutation"
                                                        placeholder="Salutation" name="studyField"
                                                        value={element.studyField || ""} onChange={e => handleChange(index, e)}

                                                    >
                                                        <option >Machine Learning</option>
                                                        <option value="Ms.">Indigenous Canada</option>
                                                        <option value="Mr.">The Science of Well-Being</option>
                                                        <option value="Mrs.">Introduction to Statistics</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="row">
                                                        <div className="col">
                                                            <label className="form-label">fee</label>
                                                            <input type="text" className="form-control" placeholder="fee"
                                                                name="fee"

                                                                value={element.fee || ""} onChange={e => handleChange(index, e)}

                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <label className="form-label"> course level</label>
                                                            <input type="text" className="form-control" placeholder=" course level"
                                                                name="courseLevel"

                                                                value={element.courseLevel || ""} onChange={e => handleChange(index, e)}

                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <label className="form-label"> Cgpa </label>
                                                            <input type="text" className="form-control" placeholder=" Cumulative Grade Point Average "
                                                                name="cgpa"

                                                                value={element.cgpa || ""} onChange={e => handleChange(index, e)}

                                                            />
                                                        </div>
                                                        <div className="col">
                                                            <label className="form-label"> Eligibilit </label>
                                                            <input type="text" className="form-control" placeholder=" eligibility(like min 55%)"
                                                                name="eligibility"

                                                                value={element.eligibility || ""} onChange={e => handleChange(index, e)}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="form-group"><label >English Proficiency
                                                    </label><input type="text" className="form-control"
                                                        id="eng-pro" name="english" placeholder="English Proficiency"

                                                        value={element.english || ""} onChange={e => handleChange(index, e)}

                                                        /></div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <label>Course website </label><input
                                                            type="text" className="form-control" id="cour-web"
                                                            name="website" placeholder="Course website "

                                                            value={element.website || ""} onChange={e => handleChange(index, e)}

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <label>Course  Description</label>
                                                        <textarea className="form-control" row="2" col="3" name="description"

                                                            value={element.description || ""} onChange={e => handleChange(index, e)}

                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="form-group"><label
                                                    >Academic proficiency exam</label><select
                                                        className="form-control dropdown"
                                                        id="highest_qualification"
                                                        name="exam"

                                                        value={element.exam || ""} onChange={e => handleChange(index, e)}

                                                    >
                                                            <option >GRE</option>
                                                            <option value="Diploma">GMAT</option>
                                                            <option value="Secondary">SAT</option>

                                                        </select></div>
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
                                            <button type="submit" data-bs-toggle="collapse" href="#collapse4" className="btn btn-success ">Save &
                                                Next</button>
                                        </div>

                                    </div>

                                </div>



                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CoursesFee
