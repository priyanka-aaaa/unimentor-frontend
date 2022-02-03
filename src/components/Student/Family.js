
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Family = () => {




    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [formValues, setFormValues] = useState([{


        relationship: "", salutation: "", firstName: "", middleName: "", lastName: "", email: "",
        mobile: "", occupation: "", qualification: "", _id: "null"
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
        const url = process.env.REACT_APP_SERVER_URL + 'student/families';
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
            relationship: "", salutation: "", firstName: "", middleName: "", lastName: "", email: "",
            mobile: "", occupation: "", qualification: "", _id: "null"
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
                await axios.post(process.env.REACT_APP_SERVER_URL + 'student/families', item, { headers: { 'Authorization': mounted } })
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
            
                await axios.put(process.env.REACT_APP_SERVER_URL + 'student/families/' + item._id, item, { headers: { 'Authorization': mounted } })

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
        const url2 = process.env.REACT_APP_SERVER_URL + 'student/families/' + value
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
                const url = process.env.REACT_APP_SERVER_URL + 'student/families';
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
                <a className="card-header" data-bs-toggle="collapse" href="#collapse3"><strong>3</strong>
                    Family Information
                </a>
                <div id="collapse3" className="collapse" data-bs-parent="#accordion">
                    {/* <form> */}
                    <form onSubmit={handleSubmit}>

                        {formValues.map((element, index) => (
                            <div key={index}>

                                {/* start */}
                                <button className="btn deleteFamily" onClick={() => handleDelete(element._id)}><i className="fas fa-trash-alt"></i></button>

                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="state" className="form-label">Relationship *
                                            </label>
                                            <select


                                                value={element.relationship || ""} onChange={e => handleChange(index, e)}


                                                className="form-control" id="Relationship" name="relationship">
                                                <option>Select</option>
                                                <option>Father</option>
                                                <option>Mother</option>
                                                <option>Brother</option>
                                                <option>Sister</option>
                                                <option>Guardian</option>
                                                <option >Sibling</option>
                                                <option>Husband</option>
                                                <option >Wife</option>
                                                <option >Son</option>
                                                <option>Daughter</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="state" className="form-label">Salutation
                                                *</label>
                                            <select
                                                value={element.salutation || ""} onChange={e => handleChange(index, e)}

                                                type="text" className="form-control" id="salutation" placeholder="Salutation" name="salutation">
                                                <option >Select</option>
                                                <option value="Ms.">Ms.</option>
                                                <option value="Mr.">Mr.</option>
                                                <option value="Mrs.">Mrs.</option>
                                                <option value="Miss.">Miss.</option>
                                            </select>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="fname" className="form-label">First Name
                                                *</label>
                                            <input
                                                value={element.firstName || ""} onChange={e => handleChange(index, e)}

                                                type="text" className="form-control" placeholder="First Name" name="fname" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="Mname" className="form-label">Middle
                                                Name</label>
                                            <input
                                                value={element.middleName || ""} onChange={e => handleChange(index, e)}
                                                type="text" className="form-control" placeholder="Middle Name" name="Mname" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lname" className="form-label">L-Name/
                                                S-name/ Family Name *</label>
                                            <input
                                                value={element.lastName || ""} onChange={e => handleChange(index, e)}

                                                type="text" className="form-control" placeholder="" name="lname" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label htmlFor="fOccupation">Email
                                            </label><input type="email"
                                                value={element.email || ""} onChange={e => handleChange(index, e)}
                                                className="form-control" id="email" name="email" placeholder="Email" /></div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label htmlFor="2-qualification">Mobile </label><input
                                                value={element.mobile || ""} onChange={e => handleChange(index, e)}

                                                type="number" className="form-control" id="mobile" name="mobile" placeholder="Mobile" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label htmlFor="occupation">Occupation</label><input
                                                value={element.occupation || ""} onChange={e => handleChange(index, e)}

                                                type="text" className="form-control" id="occupation" name="occupation" placeholder="Occupation" /></div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label htmlFor="highest_qualification">Highest
                                                Qualification </label><select
                                                    value={element.qualification || ""} onChange={e => handleChange(index, e)}
                                                    className="form-control dropdown" id="highest_qualification" name="highest_qualification">
                                                    <option >Select Qualification</option>
                                                    <option value="Diploma">Diploma</option>
                                                    <option value="Secondary">Secondary</option>
                                                    <option value="Higher Secondary">Higher
                                                        Secondary</option>
                                                    <option value="Undergraduate">Undergraduate
                                                    </option>
                                                    <option value="Postgraduate">Postgraduate
                                                    </option>
                                                </select></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* //end  */}
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

export default Family
