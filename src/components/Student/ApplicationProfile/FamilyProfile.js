import React, { useState, useEffect } from "react";
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
import Loader from '../../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faTrash, faPen, faAngleDown, faAngleUp
} from '@fortawesome/free-solid-svg-icons';
const FamilyProfile = () => {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [formValues, setFormValues] = useState([{
        relationship: "", salutation: "", firstName: "", middleName: "", lastName: "", email: "",
        mobile: "", occupation: "", qualification: "", _id: "null"
    }])
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [loader, setmyloader] = useState("false");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [deleteId, setdeleteId] = useState("");
    useEffect(() => {
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
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
    let handleSubmit = (event) => {
        event.preventDefault();
        var myvalues = JSON.stringify(formValues);
        setmyloader("true")
        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'student/families', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        setmyloader("false")
                        if (res.data.success === true) {
                            setsuccessMessage("Family Updated")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
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
                        }
                    })
                    .catch(error => {
                    });
            }
            else {
                await axios.put(process.env.REACT_APP_SERVER_URL + 'student/families/' + item._id, item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        setmyloader("false")
                        if (res.data.success === true) {
                            setsuccessMessage("Family Updated")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
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
                        }
                    })
                    .catch(error => {
                    });
            }
        })
    }
    function handleDeleteClick(value) {
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
                    axios.delete(process.env.REACT_APP_SERVER_URL + 'student/families/' + deleteId, { headers: { 'Authorization': mounted } })
                        .then(function (res) {
                            setmyloader("false")
                            if (res.data.success === true) {
                                setsuccessMessage("Family deleted")
                                setTimeout(() => setsubmitSuccess(""), 3000);
                                setsubmitSuccess(1)
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
                            }
                            else {
                            }
                        })
                        .catch(error => {
                        });
                }}
                onCancel={() =>
                    setshowSweetAlert("0")
                }
                focusCancelBtn  >
            </SweetAlert>
                : null
            }
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse3"><strong>3</strong>
                    Family Information
                </a>
                <div id="collapse3" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            {formValues.map((element, index) => (
                                <div key={index}>
                                    <div className="row mb-3">
                                        <div className="col-md-11">
                                            <label htmlFor="state" className="form-label">Relationship *
                                            </label>
                                            <select
                                                value={element.relationship || ""} onChange={e => handleChange(index, e)}
                                                required
                                                className="form-control" id="Relationship" name="relationship">
                                                <option value="">Select</option>
                                                <option value="Father">Father</option>
                                                <option value="Mother">Mother</option>
                                                <option value="Brother">Brother</option>
                                                <option value="Sister">Sister</option>
                                                <option value="Guardian">Guardian</option>
                                                <option value="Sibling">Sibling</option>
                                                <option value="Husband">Husband</option>
                                                <option value="Wife">Wife</option>
                                                <option value="Son">Son</option>
                                                <option value="Daughter">Daughter</option>
                                            </select>
                                        </div>
                                        <div className="col-md-1">
                                            <a title="Delet" className="btn  btn-danger deleteFamily" onClick={() => handleDeleteClick(element._id)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="state" className="form-label">Salutation
                                                *</label>
                                            <select
                                                value={element.salutation || ""} onChange={e => handleChange(index, e)}
                                                required
                                                type="text" className="form-control" id="salutation" placeholder="Salutation" name="salutation">
                                                <option value="">Select</option>
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
                                                required
                                                type="text" className="form-control" placeholder="First Name" name="firstName" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="Mname" className="form-label">Middle
                                                Name</label>
                                            <input
                                                value={element.middleName || ""} onChange={e => handleChange(index, e)}
                                                type="text" className="form-control" placeholder="Middle Name" name="middleName" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lname" className="form-label">L-Name/
                                                S-name/ Family Name *</label>
                                            <input
                                                value={element.lastName || ""} onChange={e => handleChange(index, e)}
                                                required
                                                type="text" className="form-control" placeholder="L-Name" name="lastName" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label htmlFor="fOccupation">Email
                                            </label><input type="email"
                                                value={element.email || ""} onChange={e => handleChange(index, e)}
                                                className="form-control" id="email" name="email" placeholder="Email" /></div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label htmlFor="2-qualification">Mobile </label>
                                                <input
                                                    value={element.mobile || ""} onChange={e => handleChange(index, e)}
                                                    type="number" className="form-control" name="mobile"
                                                    placeholder="Mobile" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label htmlFor="occupation">Occupation</label><input
                                                value={element.occupation || ""} onChange={e => handleChange(index, e)}

                                                type="text" className="form-control" id="occupation" name="occupation" placeholder="Occupation" /></div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group"><label htmlFor="highest_qualification">Highest
                                                Qualification </label><select
                                                    value={element.qualification || ""} onChange={e => handleChange(index, e)}
                                                    className="form-control dropdown" id="highest_qualification" name="qualification">
                                                    <option value="">Select Qualification</option>
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
                            ))}

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6 text-right">

                                        <button className="btn btn-success " type="button" onClick={() => addFormFields()}>Add New</button>

                                        <button type="submit" className="btn btn-secondary ml-2">Save
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
        </div>
    );
}

export default FamilyProfile
