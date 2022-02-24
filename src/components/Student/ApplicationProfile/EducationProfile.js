import React, { useState, useEffect } from "react";
import axios from 'axios';

const EducationProfile = () => {




    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [formValues, setFormValues] = useState([{
        highestEducation: "", status: "", specialization: "", degree: "", gradePercentage: "", marks: "", attendedForm: "",
        institution: "", affiliationUniversity: "", language: "", country: "", state: "", city: "", address: "", zipcode: "",
        _id: "null"
    }])
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);

            var studentId = mydata.data.student._id;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)

        const url = process.env.REACT_APP_SERVER_URL + 'student/educations';


        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': mounted,

            }
        })
            .then(response => response.json())
            .then(data => {
                var myresults = data.studentEducations;
                if (Object.keys(myresults).length === 0) {

                }
                else {
                    setFormValues(data.studentEducations)
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
            highestEducation: "", status: "", specialization: "", degree: "", gradePercentage: "", marks: "", attendedForm: "",
            institution: "", affiliationUniversity: "", language: "", country: "", state: "", city: "", address: "", zipcode: "",
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
                await axios.post(process.env.REACT_APP_SERVER_URL + 'student/educations', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {


                        if (res.data.success === true) {

                        }
                        else {

                        }
                    })
                    .catch(error => {


                    });

            }
            else {

                await axios.put(process.env.REACT_APP_SERVER_URL + 'student/educations/' + item._id, item, { headers: { 'Authorization': mounted } })

                    .then(function (res) {

                        if (res.data.success === true) {
                            setsuccessMessage("Family Updated")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
                        }
                        else {

                        }
                    })
                    .catch(error => {


                    });
            }
        })


    }
    function handleDelete(value) {
        const url2 = process.env.REACT_APP_SERVER_URL + 'student/families/' + value
        fetch(url2, {
            method: 'delete',
            headers: { 'Authorization': mounted }

        })
            .then(response => response.json())
            .then(data => {

                setsuccessMessage("Education Deleted")
                setTimeout(() => setsubmitSuccess(""), 3000);
                setsubmitSuccess(1)

                const url = process.env.REACT_APP_SERVER_URL + 'student/educations';
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': mounted,

                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        var myresults = data.studentEducations;
                        if (Object.keys(myresults).length === 0) {

                        }
                        else {
                            setFormValues(data.studentEducations)
                        }
                    })

            })
    }
    return (
        <div>
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse4">
                    <strong>4</strong>  Education
                </a>
                <div id="collapse4" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-block">
                                {formValues.map((element, index) => (
                                    <div key={index}>

                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="Highest Level of Education">Highest Level of
                                                        Education <span className="text-danger"> *</span></label>
                                                    <select
                                                        value={element.highestEducation || ""} onChange={e => handleChange(index, e)}



                                                        className="form-control" id="Highest Level of Education" name="highestEducation">
                                                        <option >Select</option>
                                                        <option value="Secondary">Secondary</option>
                                                        <option value="Undergraduate Degree">Undergraduate Degree</option>
                                                        <option value="Postgraduate Degree">Postgraduate Degree</option>
                                                        <option value="Research and Doctoral">Research &amp; Doctoral</option>
                                                        <option value="Undergraduate Diploma">Undergraduate Diploma</option>
                                                        <option value="Postgraduate Diploma">Postgraduate Diploma</option>
                                                        <option value="Foundation Degree">Foundation Degree</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="education_status">Education Status <span className="text-danger"> *</span></label><br />
                                                    <label className="ant-radio-wrapper ant-radio-wrapper-checked">
                                                        <span className="ant-radio ant-radio-checked"><input

                                                            value={element.status || ""} onChange={e => handleChange(index, e)}


                                                            checked={element.status === "Pursuing"}
                                                            name="status" type="radio" className="ant-radio-input" value="Pursuing" />
                                                            <span className="ant-radio-inner"></span></span><span>Pursuing</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input

                                                                value={element.status || ""} onChange={e => handleChange(index, e)}


                                                                checked={element.status === "Completed"}
                                                                value="Completed"
                                                                name="status" type="radio" className="ant-radio-input" /><span className="ant-radio-inner"></span></span>
                                                        <span>Completed</span></label> <br />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="specialisation">Specialization <span className="text-danger"> *</span>
                                                    </label>
                                                    <select
                                                        value={element.specialization || ""} onChange={e => handleChange(index, e)}


                                                        className="form-control" id="specialisation" name="specialization" required="">
                                                        <option >Select</option>
                                                        <option value="Social Science and Humanities">Social Science and Humanities</option>
                                                        <option value="Management">Management</option>
                                                        <option value="Law">Law</option>
                                                        <option value="Engineering">Engineering</option>
                                                        <option value="Architecture">Architecture</option>
                                                        <option value="Design">Design</option>
                                                        <option value="Medicine">Medicine</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="education_degree">Degree/Diploma/Certificate
                                                        <span className="text-danger"> *</span></label>
                                                    <select
                                                        value={element.degree || ""} onChange={e => handleChange(index, e)}

                                                        className="form-control" id="education_degree" name="degree" required="">
                                                        <option >Select Education Level</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="grading_scheme_id">Grade
                                                    Scheme(GPA/Percentage)</label><select
                                                        value={element.gradePercentage || ""} onChange={e => handleChange(index, e)}
                                                        className="form-control" id="grading_scheme_id" name="gradePercentage" required="">
                                                        <option >Select</option>
                                                        <option value="Grade Scale 0-4">Grade Scale 0-4</option>
                                                        <option value="Grade Scale 0-10">Grade Scale 0-10</option>
                                                        <option value="Percentage 0-100">Percentage 0-100</option>
                                                        <option value="Division/Class">Division/Class</option>
                                                        <option value="Letter Grade F to A+">Letter Grade F to A+</option>
                                                    </select></div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="grade_marks">Grade
                                                    Average/Marks Obtained</label><input
                                                        value={element.marks || ""} onChange={e => handleChange(index, e)}

                                                        type="text" className="form-control" id="grade_marks" name="marks" placeholder="Grade Average/Marks Obtained" required="" /></div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="attendedFrom">Attended From</label>
                                                    <br />
                                                    <input
                                                        value={element.attendedForm || ""} onChange={e => handleChange(index, e)}

                                                        name="attendedForm"
                                                        type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="institute_name">Name of Institution</label>
                                                    <input
                                                        value={element.institution || ""} onChange={e => handleChange(index, e)}


                                                        type="text" className="form-control" id="institute_name" name="institution" placeholder="Name of Institution" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                <div className="form-group"><label htmlFor="institute_affiliation">Affiliating University/Board
                                                    of Education</label>
                                                    <input
                                                        value={element.affiliationUniversity || ""} onChange={e => handleChange(index, e)}


                                                        type="text" className="form-control" id="institute_affiliation" name="affiliationUniversity" placeholder="Name of Institution" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                                <div className="form-group">
                                                    <label htmlFor="language_of_study">Language of
                                                        Instruction</label>
                                                    <select
                                                        value={element.language || ""} onChange={e => handleChange(index, e)}


                                                        className="form-control" id="language_of_study" name="language" required="">
                                                        <option value="English">English</option>
                                                        <option value="Hindi">Hindi</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="nationality">Country</label>
                                                    <select
                                                        value={element.country || ""} onChange={e => handleChange(index, e)}

                                                        className="form-control" id="Nationality" name="country">
                                                        <option >Select Country</option>
                                                        <option value="India">India</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Albania">Albania</option>
                                                        <option value="Algeria">Algeria</option>
                                                        <option value="American Samoa">American Samoa
                                                        </option>
                                                        <option value="Andorra">Andorra</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="institute_address_state">State/Province</label><select
                                                    value={element.state || ""} onChange={e => handleChange(index, e)}

                                                    className="form-control" id="institute_address_state" name="state" required="">
                                                    <option>Select State</option>
                                                </select></div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="form-group"><label htmlFor="City/institute_address_city">City/Town</label><input
                                                        value={element.city || ""} onChange={e => handleChange(index, e)}

                                                        type="text" className="form-control" id="institute_address_city" placeholder="City/Town" name="city" required="" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="form-group"><label htmlFor="institute_address_text_1">Address</label><input
                                                        value={element.address || ""} onChange={e => handleChange(index, e)}

                                                        type="text" className="form-control" id="institute_address_text_1" placeholder="Address" name="address" required="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                    <div className="form-group"><label htmlFor="institute_address_zipcode">Zipcode</label><input
                                                        value={element.zipcode || ""} onChange={e => handleChange(index, e)}

                                                        type="text" className="form-control" id="institute_address_zipcode" placeholder="Zipcode" name="zipcode" required="" /></div>
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

                                            <button type="submit" data-bs-toggle="collapse" className="btn btn-success" href="#collapse5">Save
                                                Next</button>

                                        </div>

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

export default EducationProfile