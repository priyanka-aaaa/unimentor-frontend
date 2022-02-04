
import React, { useState, useEffect } from "react";
import axios from 'axios';



const Recommendation = () => {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [formValues, setFormValues] = useState([{
        type: "", organization: "", recommenderName: "", email: "", relation: "",
        designation: "", number: "", address: "", letter: "",
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
        const url = process.env.REACT_APP_SERVER_URL + 'student/profileRecommendations';

        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mounted }

        })
            .then(response => response.json())
            .then(data => {

                // this.setState({ data: data.universityCourses })


                var myresults = data.studentProfileRecommendation;
                if (Object.keys(myresults).length === 0) {

                }
                else {
                    setFormValues(data.studentProfileRecommendation)
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
            type: "", organization: "", recommenderName: "", email: "", relation: "",
            designation: "", number: "", address: "", letter: "",
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
                await axios.post(process.env.REACT_APP_SERVER_URL + 'student/profileRecommendations/', item, { headers: { 'Authorization': mounted } })
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
                await axios.put(process.env.REACT_APP_SERVER_URL + 'student/profileRecommendations/' + item._id, item, { headers: { 'Authorization': mounted } })
                    // await axios.put('/university/61dab27e05671a193cca5f81/courses', item, { headers: { 'Authorization': mounted } })
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
        })

    }

    return (
        <div>
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse8">
                    <strong>8</strong>    Recommendation
                </a>
                <div id="collapse8" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        <div className="form-block">
                            <form onSubmit={handleSubmit}>
                                {formValues.map((element, index) => (
                                    <div key={index}>
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label>Reference Type <span className="text-danger"> *</span></label><br /><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                    value={element.type || ""} onChange={e => handleChange(index, e)}

                                                    name="reference_type_0" type="radio" className="ant-radio-input" value="Professional" /><span className="ant-radio-inner"></span></span><span>Professional</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input
                                                        value={element.type || ""} onChange={e => handleChange(index, e)}

                                                        name="reference_type_0" type="radio" className="ant-radio-input" value="Academic" /><span className="ant-radio-inner"></span></span><span>Academic</span></label>
                                                    <br />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="Name_of_organisation">Name
                                                    of Organisation/Institution <span className="text-danger">
                                                        *</span></label><input
                                                        value={element.organization || ""} onChange={e => handleChange(index, e)}


                                                        type="text" className="form-control" id="Name_of_organisation" name="Name_of_organisation" placeholder="Name of Organisation/Institution" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="recommender_name">Recommender Name <span className="text-danger"> *</span></label><input
                                                    value={element.recommenderName || ""} onChange={e => handleChange(index, e)}

                                                    type="text" className="form-control" id="recommender_name" name="recommender_name" placeholder="Recommender Name" /></div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="official_email_id">Official
                                                    Email ID <span className="text-danger">
                                                        *</span></label><input
                                                        value={element.email || ""} onChange={e => handleChange(index, e)}

                                                        type="text" className="form-control" id="official_email_id" name="official_email_id" placeholder="Email" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="relation_with_applicant">Relation with Recommender</label><input
                                                    value={element.relation || ""} onChange={e => handleChange(index, e)}
                                                    type="text" className="form-control" id="relation_with_applicant" name="relation_with_applicant" placeholder="Relation with recommender" /></div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="recommender_designation">Recommender Designation</label><input
                                                    value={element.designation || ""} onChange={e => handleChange(index, e)}
                                                    type="text" className="form-control" id="recommender_designation" name="recommender_designation" placeholder="Recommender Designation" /></div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="contact_number">Contact Number</label><input
                                                    value={element.number || ""} onChange={e => handleChange(index, e)}
                                                    type="number" className="form-control" id="contact_number" name="contact_number" placeholder="Contact Number" /></div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label htmlFor="address_of_organisation">Address of Organisation/Institution</label><input
                                                    value={element.address || ""} onChange={e => handleChange(index, e)}
                                                    type="text" className="form-control" id="address_of_organisation" name="address_of_organisation" placeholder="Address of Organisation/Institution" /></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="form-group"><label>Do you have letter of recommendation?</label><br /><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input
                                                    value={element.letter || ""} onChange={e => handleChange(index, e)}
                                                    name="has_lor_0" type="radio" className="ant-radio-input" value="yes" /><span className="ant-radio-inner"></span></span><span>Yes</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input
                                                    value={element.letter || ""} onChange={e => handleChange(index, e)}
                                                        name="has_lor_0" type="radio" className="ant-radio-input" value="no" /><span className="ant-radio-inner"></span></span><span>No</span></label> <br /></div>
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
                                            <button type="button" className="btn btn-success ">Save &amp;
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

export default Recommendation
